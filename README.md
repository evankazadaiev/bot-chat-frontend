# Bot chat front-end

## Technologies/frameworks used:

1. [Init git flow for project](./GITHOOKS.md)
1. [Vue](https://vuejs.org/) JS framework.
1. [Typescript](https://www.typescriptlang.org/)
1. [Vue Cli](https://cli.vuejs.org/) Command line tools v4.
1. [Yarn](https://yarnpkg.com/en/) Package manager.
1. [prettier](https://prettier.io/) For keeping code pretty!
1. [ESLint]() Linting.

The instructions below will help you set up the development environment.

## Project setup Environment

1. Make sure you have Vue CLI 3.x installed, you can install it by going to [Vue website](https://cli.vuejs.org/guide/installation.html)
1. Clone the repository `git clone ssh://git@git.technorely.com:2222/careclix/careclix-front-end.git`
1. `cd careclix-front-end`
1. `yarn install` to install the dependencies.
2. Before running your local server, make sure you have `.env` file in the root of project. If you don't, create `.env` file in the root and paste there variables from `.env.template`. 
1. `yarn serve` to compile and hot-reload for development.
1. In a new terminal window/tab type `cd SignallingServer` and run the command `node server.js` - This will start the signalling server required for webRTC
1. Visit `http://localhost:8080/` and start developing.

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

## Conventions

### Linting, code style, commit messages

Developers spend lots of time reading the code, written by others. So we need to ensure code style consistency and enforce best practices by utilizing **tslint**, **prettier**, **validate-commit-msg**.

### Lints and fixes files

Before you commit any code, don't forget to run the command `yarn run lint` as the Prettier and ESLint plugins will keep the code readable and beautiful.

[**ESlint**](https://eslint.org/) is an extensible static analysis tool that checks JavaScript/ECMAScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

[**prettier**](https://prettier.io/) is a code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. In webstorm you can press `Ctrl + Alt + Shift + P` to format on the fly.

**validate-commit-msg** - makes sure that every commit message follows [ESLint](https://github.com/conventional-changelog-archived-repos/conventional-changelog-eslint/blob/master/convention.md)

### Git Flow

https://gist.github.com/forest/19fc774dde34f77e2540



# bot-chat-frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
