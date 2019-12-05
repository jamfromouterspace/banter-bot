require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const reply = text => bot.sendMessage(msg.chat.id, text);
  console.log(msg)
  if (msg.from.username === 'Vashmata') reply('JOSH HAS SPOKEN.')
  else if (msg.new_chat_members) reply(WELCOME_MESSAGE(msg.new_chat_members))
  else if (/.*bot.*/.test(msg.text)) reply("Did someone say bot?")
});


const WELCOME_MESSAGE = users => `Welcome to the linux shitposting group: ${users.map(u => u.first_name).join(', ')}.
It is meant for linux talk but often ends up being just memes or @jamielnr and Stuart talking about random ass shit for 400 messages`
