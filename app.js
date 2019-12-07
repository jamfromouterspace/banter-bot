require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });
const CONSTANTS = require('./constants')

let echoSticker = false;
let echoMessage = false;
let loudMode = false
let rudeMode = false

bot.on("message", msg => {
  // console.log(msg);
  // Utilities
  const cmd = msg.text ? msg.text.trim() : ''
  const match = phrase => new RegExp(".*" + phrase + ".*", 'i').test(cmd);
  const matchExact = phrase => new RegExp(phrase, 'i').test(cmd);
  const reply = text => bot.sendMessage(msg.chat.id, rude() || text, { parse_mode: 'markdown' });
  const replyRaw = text => bot.sendMessage(msg.chat.id, text);

  // Responses
  const josh = () => bot.sendSticker(msg.chat.id, CONSTANTS.JOSH_STICKER);
  const linux = () => bot.sendSticker(msg.chat.id, randomLinux());
  const goodBot = () => bot.sendSticker(msg.chat.id, CONSTANTS.GOOD_BOT_STICKER);
  const zepto = () => bot.sendSticker(msg.chat.id, CONSTANTS.ZEPTO_STICKER);
  const jquery = () => bot.sendPhoto(msg.chat.id, CONSTANTS.CAVEMAN_SPONGEBOB_IMAGE)
  const spicy = () => bot.sendDocument(msg.chat.id, CONSTANTS.SPICY_GIF)

  const invalidCommand = () => {
    reply('*Invalid command*. Type `bot help` for list of valid commands.')
  }

  const setEchoNext = () => {
    reply("Echoing JSON for the next message...")
    echoMessage = true
  }

  const setEchoSticker = () => {
    reply("Echoing ID of the next sticker...")
    echoSticker = true
  }

  const setQuiet = (wasMeanAboutIt) => {
    if (loudMode) {
      if (!wasMeanAboutIt) reply("Quieting down now...")
      else reply("Yeah yeah fuck you okay fine I'll shut up")
      loudMode = false
    } else {
      reply("I'm already quiet!")
    }
  }

  const setLoud = (wasMeanAboutIt) => {
    if (!loudMode) {
      reply("HAHAHAHAHAHAH, I'M FREE!")
      linux();
      loudMode = true
    } else {
      reply("Louder you say?")
      zepto();
      zepto();
    }
  }

  const setRude = () => {
    if (!rudeMode) {
      if (loudMode) reply("Rude AND loud? Today's my lucky day!")
      else reply("Rude mode is now on!")
      rudeMode = true
    } else {
      reply("Rude mode is already on, idiot.")
    }
  }

  const setPolite = () => {
    if (rudeMode) {
      reply("Rude mode is now off... idiot.")
      rudeMode = false
    } else {
      reply("Rude mode is already off.")
    }
  }

  const status = () => {
    reply(`*Loud Mode*: ${loudMode ? "ON" : "OFF"}\n*Rude Mode*: ${rudeMode ? "ON" : "OFF"}`)
  }

  // Welcome new members
  if (msg.new_chat_members) {
    bot.sendMessage(msg.chat.id, CONSTANTS.WELCOME_MESSAGE(msg.new_chat_members), { parse_mode: 'markdown' });
  }

  // Annoying behaviors
  if (loudMode) {
    if (msg.from.username === "Vashmata") reply("JOSH HAS SPOKEN.");
    else if (msg.from.username === "AnthonySmartens") reply("THE SMARTENS CREATOR HAS SPOKEN.");
    else if (msg.from.username === "PeterGhimself") reply("THE CREATOR HAS SPOKEN.");
    if (match("linux")) linux();
  }

  // Special behaviors
  if (matchExact("bad bot")) reply("Fuck you");
  else if (matchExact("good bot")) goodBot();

  if (echoSticker && msg.sticker) {
    // Previous command was "echo sticker"
    replyRaw('Sticker ID: ' + msg.sticker.file_id);
    echoSticker = false;
  } else if (echoMessage) {
    // Previous command was "echo next"
    replyRaw(JSON.stringify(msg));
    echoMessage = false
  }

  // Normal commands
  const commandMap = {
    "help": () => reply(CONSTANTS.HELP_REPLY),
    "echo": {
      "default": () => replyRaw(JSON.stringify(msg)),
      "sticker": setEchoSticker,
      "next": setEchoNext
    },
    "github": () => reply(CONSTANTS.GITHUB_LINK),
    "quiet": setQuiet,
    "shutup": () => setQuiet(true),
    "loud": setLoud,
    "rude": setRude,
    "polite": setPolite,
    "status": status,
    "josh": josh,
    "jquery": jquery,
    "linux": linux,
    "zepto": zepto,
    "spicy": spicy,
    "master": () => reply("ALL HAIL JAM"),
  }

  // EXECUTE COMMAND
  const isCommand = cmd.slice(0, 4) === 'bot '
  if (isCommand) {
    const commandList = cmd.slice(4).toLowerCase().split(' ') // e.g. ['echo', 'next']
    const response = parseCommand(commandList, commandMap, 0)
    response()
  } else if (cmd === 'bot') {
    // Empty command
    reply(CONSTANTS.HELP_REPLY)
  }

  function parseCommand(commandList, commandMap, i) {
    // Recursively match command list with command map
    // i is the index in the command list
    const key = commandList[i];
    if (!commandMap.hasOwnProperty(key)) return invalidCommand // Command not found in map
    if (i === commandList.length - 1) {
      // e.g. ["echo"] => return echo.default, since echo has subcommands
      if (typeof commandMap[key] === 'object') return commandMap[key].default
      // Normal command, no subcommands
      return commandMap[key]
    } else {
      // Nested command given for a command that has no subcommands
      if (typeof commandMap[key] !== 'object') return invalidCommand
      // Normal nested command ("echo next")
      return parseCommand(commandList, commandMap[key], i + 1)
    }
  }
});

const rude = () => {
  if (rudeMode) {
    const shouldBeRude = Math.random() <= 0.50
    if (shouldBeRude) return 'Nah'
  } else return false
}

const randomLinux = () => {
  const i = Math.floor(Math.random() * 10) % 4;
  return CONSTANTS.LINUX_STICKERS[i];
};
