# react-redux-starter-kit
An opinionated non-universal react+redux starter kit.

## No longer isomorphic/universal?
Server-side rendering was removed with the recent commits because:
- I don't need server-side rendering in most cases.
- I only use client-side rendering in most cases.
- It bloats the starter kit.

## Libraries
**Mainly**:
- [react](http://facebook.github.io/react) (`v0.14.2`)
- [react-router](http://rackt.github.io/react-router) (`v2.0.0`)
- [redux](http://rackt.github.io/redux) (`v3.0.4`)
- [react-redux](http://github.com/gaearon/react-redux) (`v4.0.0`)
- [redux-thunk](http://github.com/gaearon/redux-thunk) (`v1.0.0`)
- [classnames](http://github.com/JedWatson/classnames) (`v2.2.0`)
- [axios](https://github.com/mzabriskie/axios) (`v0.7.0`)
- [koa](http://koajs.com) (`v1.1.2`)

**Development**:
- [webpack](http://webpack.github.io)
- [babel](http://babeljs.io) (`v6.1.5`)
- [karma](http://karma-runner.github.io/) (`v0.13.15`)
- [mocha](http://mochajs.org) (`v2.3.4`)
- [chai](http://chaijs.com) (`v3.4.1`)
- [sinon](sinonjs.org) (`v1.17.2`)
- [redux-devtools](https://github.com/gaearon/redux-devtools/) (`v3.0.0-beta-3`)
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools/) (`v1.0.0-beta-3`)

## FAQ
Checkout the [FAQ page](faq.md)

## Getting Started
You are required to install [node `>=4`](nodejs.org) / [npm `>=2`](npmjs.com).

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
```

## Development
|command|description|
|----|----|
|`npm run watch:script`|watch for file changes and compile scripts|
|`npm run watch:style`|watch for file changes and compile stylesheets|
|`npm start`|runs `watch:script` and `watch:style`|
|`npm watch:test`|watches for file changes and runs test|
|`npm test`|run tests (single run)|

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

## Alias
[babel-plugin-module-alias](https://github.com/tleunen/babel-plugin-module-alias) is being used for the aliases.
