var webpack = require('webpack');
var s = JSON.stringify;
var p = JSON.parse;

require('dotenv').load({ path: __dirname + '/../../.env' });

module.exports = {
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
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
  },
  // https://github.com/webpack/karma-webpack#source-maps
  devtool: 'inline-source-map'
};
