var webpack = require('webpack');
var config = require('./config');
var parse = JSON.stringify; // shortcut
var path = require('path');

module.exports = {
  entry: './client/index.js', // Relative to the project root
  output: {
    filename: 'script.js', // Filename of the output
    path: './public/dist' // Directory of the output
  },
  module: {
    // Transformers
    loaders: [
      // Transform to es6 with babel
      // http://webpack.github.io/docs/loaders.html
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6'],
    alias: config.alias(path.resolve(__dirname, '../'))
  },
  plugins: [
    new webpack.DefinePlugin({
      _API_: parse(config._API_),
      _ROOT_URI_: parse(config._ROOT_URI_),
      _ENV_: parse(config._ENV_),
      _DEV_: parse(config._DEV_),
      _PRODUCTION_: parse(config._PRODUCTION_),
      _CDN_: parse(config._CDN_),
      _IMG_PATH_: parse(config._IMG_PATH_)
    })
  ]
};
