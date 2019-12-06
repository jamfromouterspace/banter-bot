require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

let echoSticker = false;
let echoMessage = false;

bot.on("message", msg => {
  // console.log(msg);
  const match = phrase => new RegExp(".*" + phrase + ".*", 'i').test(msg.text);
  const matchExact = phrase => new RegExp(phrase, 'i').test(msg.text);
  const reply = text => bot.sendMessage(msg.chat.id, text);
  const josh = () => bot.sendSticker(msg.chat.id, JOSH_STICKER);
  const linux = () => bot.sendSticker(msg.chat.id, randomLinux());
  const goodBot = () => bot.sendSticker(msg.chat.id, GOOD_BOT_STICKER);
  const zepto = () => bot.sendSticker(msg.chat.id, ZEPTO_STICKER);
  const jquery = () => bot.sendPhoto(msg.chat.id, CAVEMAN_SPONGEBOB_IMAGE)

  if (msg.from.username === "Vashmata") reply("JOSH HAS SPOKEN.");
  if (msg.from.username === "AnthonySmartens") reply("THE SMARTENS CREATOR HAS SPOKEN.");
  
  if (echoSticker) {
    if (msg.sticker) reply(rude() || 'Sticker ID: ' + msg.sticker.file_id);
    else reply("That wasn't a sticker.");
    echoSticker = false;
  } else if (echoMessage) {
    reply(rude() || JSON.stringify(msg));
    echoMessage = false
  } else if (msg.new_chat_members) reply(WELCOME_MESSAGE(msg.new_chat_members));
  else if (matchExact("bad bot")) reply("Fuck you");
  else if (matchExact("good bot")) goodBot();
  else if (matchExact("zepto please")) zepto()
  else if (matchExact("bot sticker")) echoSticker = true;
  else if (matchExact("bot echo sticker")) echoSticker = true;
  else if (matchExact("bot echo next")) echoMessage = true;
  else if (matchExact("bot echo")) reply(rude() || JSON.stringify(msg));
  else if (matchExact("bot help")) reply(rude() || HELP_REPLY);
  else if (matchExact("bot github")) reply(rude() || GITHUB_LINK);
  else if (match("linux")) linux();
  else if (match("josh")) josh();
  else if (match("jquery")) jquery();
  else if (match("bot")) reply("Did someone say bot?");
});

const HELP_REPLY = `--- BOT HELP ---
bot echo: echo the message's JSON details
bot echo next: echo the next message's JSON details
bot echo sticker: echo the next message's sticker ID
bot github: get the github link
zepto please: get some zepto`;

const rude = () => {
  const shouldBeRude = Math.random() <= 0.30
  if (shouldBeRude) return 'Nah'
  else return false
}

const randomLinux = () => {
  const i = Math.floor(Math.random() * 10) % 4;
  return LINUX_STICKERS[i];
};

const LINUX_STICKERS = [
  "CAADBAADZAEAApdrhgTNh414jbPDihYE",
  "CAADBAAD_QADl2uGBLaZ6SiHh0w4FgQ",
  "CAADBAADjwEAApdrhgThTIzm5zjdpxYE",
  "CAADBAADGwEAApdrhgRugj8xK_OZzhYE"
];

const CAVEMAN_SPONGEBOB_IMAGE = "AgADAQADZqgxGyX7QEeABETtoJ7O7uIRFDAABAEAAwIAA3gAA5kIBQABFgQ"
const GOOD_BOT_STICKER = "CAADAQADMAADmY5hL3UAAUlp0ev2xhYE";
const ZEPTO_STICKER = "CAADBAADSgIAApdrhgSbrW_V8Ssf9xYE";
const JOSH_STICKER = "CAADAQADbgADmY5hL18k-jQuCglHFgQ";
const GITHUB_LINK = "https://github.com/closetothe/banter-bot";
const WELCOME_MESSAGE = users => `Welcome to the linux shitposting group: ${users
  .map(u => u.first_name)
  .join(", ")}.
It is meant for linux talk but often ends up being just memes or @jamielnr and Stuart talking about random ass shit for 400 messages`;
