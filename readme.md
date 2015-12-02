## react-redux-starter-kit
An opinionated starter kit.

### Installing
Some requirements include:
- [node](nodejs.org) / [npm](npmjs.com)
- [ruby](ruby-lang.org) / [gems](rubygems.org) / [bundler](bundler.io)

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
bundle install
```

### Development
```bash
npm run build:script
npm run build:style

# for continuous development,
# run these commands instead of the above:
npm run watch:script
npm run watch:style

# for production (minification)
npm run prod:script
npm run prod:style

# run tests
npm test # open up localhost:9876
```

Right now, we don't support server-side rendering yet. Run `open public/index.html` when you're done compiling.

### Aliases
Here are some alias that you may `import` to make importing 69-levels-high of folders easier. It is not required, but highly recommended. These can be used like the following:
```es6
import configureStore from '../../common/store/configureStore'; // without alias
import configureStore from 'app-store/configureStore'; //with alias
```

Available aliases:
```
'server'      => './server'
'client'      => './client'
'common'      => './common'
'components'  => './common/components'
'modules'    => './common/modules'
'store'       => './common/store'
'utils'       => './common/utils'
'views'       => './common/views'
```

### Globals
These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `config/index.js`.

#### `_ENV_`
A global variable for `process.env.NODE_ENV`.

#### `_PRODUCTION_`
`true` when `process.env.NODE_ENV` is set to `production`.

#### `_DEV_`
`true` when `process.env.NODE_ENV` is **not** set to `production`.

#### `_API_`
The URI of the your API.

Mainly used to concatenate your requests with a base URI in `common/utils/axios/interceptors/concatBaseUrl`.

#### `_IMG_`
Path to your images folder.

This can be used as such : ````${_IMG_}/cat.jpg````.

#### `_SSR_`
The variable to check if the environment is node. This is safer than deriving by checking variables available only to node.

This is explicitly set to each config (e.g., server globals, webpack config).

### Libraries
**Mainly**:
- [react](http://facebook.github.io/react) - Our view library; which is what we built most of our code with.
- [react-router](http://rackt.github.io/react-router) - Client-side (Browser) router.
- [history](http://rackt.github.io/history) - React-Router's history library.
- [redux](http://rackt.github.io/redux) - Our [Flux](http://facebook.github.io/redux) library.
- [react-redux](http://github.com/gaearon/react-redux) - Library to use Redux for ReactJS.
- [redux-thunk](http://github.com/gaearon/redux-thunk) - So we can if-else / async for our action-creators.
- [reselect](http://github.com/faassen/reselect) - For Redux, a *selector* library; also helps us cache it.
- [classnames](http://github.com/JedWatson/classnames) - Utility so we can easily join classnames.
- [axios](https://github.com/mzabriskie/axios) - Our *isomorphic* HTTP / AJAX Library.
- [koa](http://koajs.com) - Our server-side micro framework.

**Development**:
- [webpack](http://webpack.github.io) - Our script build tool. So we can `require`, and aliases.
- [babel](http://babeljs.io) - So we can write ES6 code.
- [karma](http://karma-runner.github.io/) - Our test runner; so we can run tests in different environments.
- [mocha](http://mochajs.org) - Our test suite
- [chai](chaijs.com) - Assertion library so we can do `expect`, and etc.
- [sinon](sinonjs.org) - Spying / stubbing library for tests
