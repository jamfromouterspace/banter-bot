require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  console.log(msg)

  const reply = text => bot.sendMessage(msg.chat.id, text);
  const josh = () => bot.sendSticker(msg.chat.id, JOSH_STICKER)

  if (msg.from.username === 'Vashmata') reply('JOSH HAS SPOKEN.')
  else if (/.*josh.*/i.test(msg.text)) josh()
  else if (msg.new_chat_members) reply(WELCOME_MESSAGE(msg.new_chat_members))
  else if (/.*bot github.*/.test(msg.text)) reply(GITHUB_LINK)
  else if (/.*bot.*/i.test(msg.text)) reply("Did someone say bot?")

});

const JOSH_STICKER = 'CAADAQADbgADmY5hL18k-jQuCglHFgQ'
const GITHUB_LINK = 'https://github.com/closetothe/banter-bot'
const WELCOME_MESSAGE = users => `Welcome to the linux shitposting group: ${users.map(u => u.first_name).join(', ')}.
It is meant for linux talk but often ends up being just memes or @jamielnr and Stuart talking about random ass shit for 400 messages`
