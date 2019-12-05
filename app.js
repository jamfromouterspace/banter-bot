require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const reply = text => bot.sendMessage(msg.chat.id, text);
  if (msg.from.username === 'Vashmata') reply('JOSH HAS SPOKEN.')
  else if (/.*bot.*/.test(msg.text.toString())) reply("Did someone say bot?")
});
