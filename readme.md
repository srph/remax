# react-redux-starter-kit
An opinionated yet dead-simple non-universal React+Redux starter kit.

## Libraries
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [Redux](https://github.com/reactjs/redux)
- [Axios](https://github.com/mzabriskie/axios)
- Build: [Buble](https://buble.surge.sh) / [Webpack](https://webpack.github.io/)
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
|`npm run build:style`|simply compile scripts|
|`npm run build:style`|simply compile stylesheets|
|`npm start`|runs `watch:script` and `watch:style`|

## 101
- The `src` directory is aliased as `app`
  - Before: `import X from '../../components/X'`
  - After: `import X from 'app/components/X'`
- This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).
