# Linux Banter Bot

## Adding a command
Please include any command you add in the `HELP_REPLY` string.
### Simple commands
All standard commands are automatically preceded by "bot", so there is no need to add that.
Simply add the command name and resolver function to the `commandMap` object:
```
const commandMap = {
  ...
  "newcommand": resolverFunction
  ...
}
```
For example,
```
const commandMap = {
  ...
  "foo": () => reply("bar")
}
```
Note that `reply` is a standard function used by other commands too. **Only put function definitions in the commandMap if they are short**. If they exceed one short line, then define the function somewhere else and reference it:
```
const bar = () => {
  // Do something more involved
}
const commandMap = {
  ...
  "foo": bar
}
```
### Nested commands
For nested commands, such as `bot echo sticker`, you can define the command as an object:
```
const commandMap = {
  ...
  "foo": {
    default: doDefault, // "bot foo" (set this to invalidCommand if it's not allowed)
    "bar": doSomething, // "bot foo bar"
    "baz": doSomethingElse, // "bot foo baz"
  }
}
```
See the "echo" command for a concrete example. **You can nest as deeply as you want!**

## Environment
* [node-telegram-bot](https://github.com/yagop/node-telegram-bot-api/blob/master/doc)
* Start command: yarn start
* Node version 13.3.0
* yarn
* Secret config goes in .env file at root (read by dotenv package)

## Git Conventions
### Conventional commits
* [feat/chore/docs/fix/refactor/...]: lowercase present-tense message
* Example: "feat: send random sticker every 30 seconds"
* P.S. This is enforced by the git hook commit-msg
* Exception: merge commit messages are free-form
* [More info](https://www.conventionalcommits.org/en/v1.0.0/)

### Branching model
* master, dev, and [feature]
* Work on a feature branch, merge into dev, merge dev into master for major release
* Commit with --no-ff flag to add a message
* [More info](https://nvie.com/posts/a-successful-git-branching-model/)
