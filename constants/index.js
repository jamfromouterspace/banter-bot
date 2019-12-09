module.exports = {}

module.exports.HELP = `*BOT HELP*
\`bot echo\`: echo the message's JSON details
\`bot echo next\`: get the JSON details of the next message
\`bot echo sticker\`: get the sticker ID of the next message
\`bot github\`: get the github link
\`bot quiet\`: stop sending unprompted messages
\`bot loud\`: continue sending unprompted messages
\`bot rude\`: stop sending unprompted messages
\`bot polite\`: continue sending unprompted messages
\`bot status\`: quiet/loud, rude/polite status

*Other commands*
\`bot jquery\`
\`bot zepto\`
\`bot josh\`
\`bot linux\`
\`bot spicy\`
\`bot master\`
\`bot big brain\`
\`bot small brain\`
\`bot shrek\`
\`good bot\`
\`bad bot\`
\`bot fortnite\`
\`bot how fast\`
\`bot jesus fucking christ\`

*More info*
\`bot help rude\`
\`bot help loud\``

module.exports.HELP_RUDE =
  'Rude mode sets a 50% chance of ignoring your command.'
module.exports.HELP_LOUD = 'Loud mode allows special bot behaviors that aren\'t explicitly preceded by a command.'

module.exports.VERY_VERY_FAST = `a lot very ***fast*** for old computer tat kant handl ***quantum physics*** like my calculator thxtothispull now I run in calculatyr`

module.exports.LINUX_STICKERS = [
  'CAADBAADZAEAApdrhgTNh414jbPDihYE',
  'CAADBAAD_QADl2uGBLaZ6SiHh0w4FgQ',
  'CAADBAADjwEAApdrhgThTIzm5zjdpxYE',
  'CAADBAADGwEAApdrhgRugj8xK_OZzhYE'
]

module.exports.BRAIN_STICKERS = [
  'CAADAQADbgADmY5hL18k-jQuCglHFgQ',
  'CAADAQADcwADmY5hLyUTKg_ALvhkFgQ',
  'CAADAQADaQADmY5hL0ycpciir360FgQ',
  'CAADAQADaAADmY5hL_kkkRe5J3UKFgQ',
  'CAADAQADcQADmY5hLzHIzj1wZp2aFgQ',
  'CAADAQADZgADmY5hL1ZKnyImMaxnFgQ'
]

module.exports.SHREK_STICKERS = [
  'CAADAQADdQADmY5hL531m9Ri4De-FgQ',
  'CAADAQADdAADmY5hL48pFaD5UqR4FgQ',
  'CAADAQADdgADmY5hLwaxUzxjNhcsFgQ',
  'CAADAQADdwADmY5hLxS6BILTlhYrFgQ',
  'CAADAQADeAADmY5hL4viip2vEBiSFgQ'
]

module.exports.JFC = "CgADBAADuAEAAuQuxFKeyOCHYs9gjhYE"
module.exports.SPICY_GIF = 'CgADBAADnQEAAli4ZVNGqjXuMqbYeRYE'
module.exports.CAVEMAN_SPONGEBOB_IMAGE =
  'AgADAQADZqgxGyX7QEeABETtoJ7O7uIRFDAABAEAAwIAA3gAA5kIBQABFgQ'
module.exports.GOOD_BOT_STICKER = 'CAADAQADMAADmY5hL3UAAUlp0ev2xhYE'
module.exports.MIDDLE_FINGER_STICKER = 'CAADAQADTQADmY5hL7y7vBjIcBUiFgQ'
module.exports.SMALL_BRAIN_STICKER = 'CAADAQADbwADmY5hL-d-WkdiGovcFgQ'
module.exports.QUIET_STICKER = 'CAADAQADQAADmY5hL13mbnu87BS4FgQ'
module.exports.ZEPTO_STICKER = 'CAADBAADSgIAApdrhgSbrW_V8Ssf9xYE'
module.exports.JOSH_STICKER = 'CAADAQADbgADmY5hL18k-jQuCglHFgQ'
module.exports.GITHUB_LINK = 'https://github.com/closetothe/banter-bot'
module.exports.WELCOME_MESSAGE = users => `*Welcome to the linux shitposting group: ${users
  .map(u => u.first_name)
  .join(', ')}*.
It is meant for linux talk but often ends up being just memes or @jamielnr and Stuart talking about random ass shit for 400 messages`
