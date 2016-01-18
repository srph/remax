# react-redux-starter-kit
An opinionated react+redux starter kit.

## Libraries
**Mainly**:
- [react](http://facebook.github.io/react) (`v0.14.2`)
- [react-router](http://rackt.github.io/react-router) (`v1.0.0`)
- [redux](http://rackt.github.io/redux) (`v3.0.4`)
- [react-redux](http://github.com/gaearon/react-redux) (`v4.0.0`)
- [redux-simple-router](http://rackt.github.io/redux) (`v1.0.2`)
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
- Where's my `actions`, `reducers`, and `constants`? This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).

## Getting Started
Some requirements include:
- [node](nodejs.org) / [npm](npmjs.com)
- [ruby](ruby-lang.org) / [gems](rubygems.org) / [bundler](bundler.io)

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
bundle install
```

## Development
|command|description|
|----|----|
|`npm run watch:script`|watch for file changes and compile scripts|
|`npm run watch:style`|watch for file changes and compile stylesheets|
|`npm run dev`|runs `watch:script` and `watch:style`|
|`npm run server`|run server-side rendering|
|`npm start`|production-ready assets / run server|
|`npm watch:test`|watches for file changes and runs test|
|`npm test`|run tests|

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
You can use the `starter-kit` alias to `import` files. To change this, check the `make-app-symlink` script in `package.json`. This is useful for directories that are two levels away (`../../module/some-file` => `starter-kit/common/module/some-file`).
