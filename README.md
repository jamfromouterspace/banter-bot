# Linux Banter Bot

## Environment
* Node version 13.3.0
* yarn
* Secret config goes in .env file at root (read by dotenv package)

## Git Conventions
### Conventional commits
* [feat/chore/docs/fix/refactor/...]: lowercase present-tense message
* Example: "feat: send random sticker every 30 seconds"
* P.S. This is enforced by the git hook commit-msg
* [More info](https://www.conventionalcommits.org/en/v1.0.0/)

### Branching model
* master, dev, and [feature]
* Work on a feature branch, merge into dev, merge dev into master for major release
* [More info](https://nvie.com/posts/a-successful-git-branching-model/)