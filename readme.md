# react-redux-starter-kit
An opinionated non-universal react+redux starter kit.

## No longer isomorphic/universal?
Server-side rendering was removed with the recent commits because:
- I don't need server-side rendering in most cases.
- I only use client-side rendering in most cases.
- It bloats the starter kit.

## Libraries
|dependency|version|
|----|----|
|[react](http://facebook.github.io/react)|(`v0.14.2`)|
|[react-router](http://rackt.github.io/react-router)|(`v2.0.0`)|
|[redux](http://rackt.github.io/redux)|(`v3.0.4`)|
|[react-redux](http://github.com/gaearon/react-redux)|(`v4.0.0`)|
|[redux-thunk](http://github.com/gaearon/redux-thunk)|(`v1.0.0`)|
|[classnames](http://github.com/JedWatson/classnames)|(`v2.2.0`)|
|[axios](https://github.com/mzabriskie/axios)|(`v0.7.0`)|

**Development**:

|dependency|version|
|----|----|
|[webpack](http://webpack.github.io)|`1.12.4`|
|[babel](http://babeljs.io)|`v6.1.5`|
|[karma](http://karma-runner.github.io/)|`v0.13.15`|
|[mocha](http://mochajs.org)|`v2.3.4`|
|[chai](http://chaijs.com)|`v3.4.1`|
|[sinon](http://sinonjs.org)|`v1.17.2`|
|[enzyme](http://airbnb.io/enzyme)|`v2.0.0`|
|[redux-devtools](https://github.com/gaearon/redux-devtools/)|`v3.0.0-beta-3`|
|[redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools/)|`v1.0.0-beta-3`|
|[node-sass](https://github.com/sass/node-sass)|`v3.4.2`|
|[autoprefixer](https://github.com/postcss/autoprefixer)|``|
|[cssnano](http://cssnano.co/)|``|

## Getting Started
To get your fingers typing asap:
- [Install requirements, clone repository, and install dependencies](#installing).
- [Setup config](#configuration).
- [Run build script](#development).

## Installing
You are required to install [node `>=4`](nodejs.org) / [npm `>=2`](npmjs.com).

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
```

## Configuration
We use [dotenv](https://www.npmjs.com/package/dotenv-style) configuration.

<sub>*Note*: If you don't have any `.env` file in the project root directory, run this: `cp .env.example .env`.</sub>

|config|description|
|----|----|
|`process.env.NODE_ENV`|Environment.|
|`process.env.API`|The URI of the API. Mainly used to concatenate the requests with a base URI in `common/utils/axios/interceptors/concatBaseUrl`.|
|`process.env.IMG`|Path to the images folder. This can be used as such : ````${_IMG_}/cat.jpg````.|
|`process.env.PORT`|The port which the server will be ran. This is a server-only config.|
|`process.env.REDUX_DEVTOOLS`|Condition which Redux Devtools will be enabled.|

**Gotchas**: To set a config to `false`, [leave it empty](https://github.com/motdotla/dotenv/issues/74#issuecomment-113287892).
```bash
# wrong
REDUX_DEVTOOLS=false

# correct
REDUX_DEVTOOLS=
```

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
- [babel-plugin-module-alias](https://github.com/tleunen/babel-plugin-module-alias) is being used for the aliases. Everything in `src` is aliased under `app` (e.g., `import from 'app/components/'). You may configure this in [`.babelrc`](.babelrc).
- The bootstrap file (imported in [`src/index.js#L2`](src/index.js#L2)) is useful for libraries that need to be initialized (e.g., axios interceptors, et al.).
