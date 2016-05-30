# react-redux-starter-kit
An opinionated non-universal react+redux starter kit.

## Libraries
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [Redux](https://github.com/reactjs/redux)
- [Axios](https://github.com/mzabriskie/axios)
- Build: [Babel](babeljs.io) / [Webpack](https://webpack.github.io/)
- Testing: [Karma](https://karma-runner.github.io/) / [Mocha](http://mochajs.org) / [Chai](http://chaijs.com) / [Sinon](http://sinonjs.org/) / [Enzyme](http://airbnb.io/enzyme/docs/api/shallow.html)
- Styling: [Sass](https://github.com/sass/node-sass) / [Autoprefixer](https://github.com/postcss/autoprefixer) / [CSS Nano](https://github.com/ben-eb/cssnano)

## Getting Started
To get your fingers typing asap:
- [Install requirements, clone repository, and install dependencies](#installing)
- [Setup config](#configuration)
- [Run build script](#development)

## Installing
You are required to install [node `>=4`](nodejs.org) / [npm `>=2`](npmjs.com).

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
```

## Configuration
Most configuration is stored on [`src/config.js`](src/config.js). For environment configs, we use [dotenv](https://www.npmjs.com/package/dotenv-style).

<sub>*Note*: If you don't have any `.env` file in the project root directory, run this: `cp .env.example .env`.</sub>

|config|description|
|----|----|
|`process.env.NODE_ENV`|Environment.|
|`process.env.REDUX_DEVTOOLS`|Condition which Redux Devtools will be enabled.|

**Gotchas**: To set a config to `false`, [leave it empty](https://github.com/motdotla/dotenv/issues/74#issuecomment-113287892).

## Development
|command|description|
|----|----|
|`npm run watch:script`|watch for file changes and compile scripts|
|`npm run watch:style`|watch for file changes and compile stylesheets|
|`npm start`|runs `watch:script` and `watch:style`|
|`npm watch:test`|watches for file changes and runs test|
|`npm test`|run tests (single run)|

## 101
- This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).
- [babel-plugin-module-alias](https://github.com/tleunen/babel-plugin-module-alias) is being used for the aliases. Everything in `src` is aliased under `app` (e.g., `import from 'app/components/'`). You may configure this in [`.babelrc`](.babelrc).
- The bootstrap file (imported in [`src/index.js#L2`](src/index.js#L2)) is useful for libraries that need to be initialized (e.g., axios interceptors, et al.).
