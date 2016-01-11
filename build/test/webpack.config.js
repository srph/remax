var webpack = require('webpack');
var path = require('path');
var s = JSON.stringify; // shortcu
var p = JSON.parse; // shortcu

var env = path.resolve(__dirname, '../../.env');
require('dotenv').load({ path: env });

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // @todo
          // add rewire
          // https://github.com/speedskater/babel-plugin-rewire/issues/71
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  },
  plugins: [
    new webpack.DefinePlugin({
      _API_: s(process.env.API),
      _ROOT_URI_: s(process.env.ROOT_URI),
      _ENV_: s(process.env.NODE_ENV),
      _DEV_: s(process.env.NODE_ENV !== 'production'),
      _PRODUCTION_: s(process.env.NODE_ENV === 'production'),
      _IMG_: s(process.env.IMG),
      _CDN_: s(process.env.CDN),
      // Server-side rendering option is explicitly set to false.
      // This is set only to true for the server.
      _SSR_: false,
      _REDUX_DEVTOOLS_: p(process.env.REDUX_DEVTOOLS)
    })
  ],
  // http://rmurphey.com/blog/2015/07/20/karma-webpack-tape-code-coverage
  // Tell webpack how to deal with tape's `fs` dependency
  node: {
    fs: 'empty'
  }
};
