// Run `dotenv` module
require('dotenv-autoload');

var webpack = require('webpack');
var stringify = require('stringify-object-values');

module.exports = {
  // Basic input-output configuration
  entry: './src/index.js',
  output: {
    path: './public/dist/',
    filename: 'script.js'
  },

  module: {
    // Make Buble, our transpiler, to work
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'buble'
    }]
  },

  resolve: {
    // Easily import app-level files
    // Before: import x from '../../components/x';
    //  After: import x from 'app/components/x';
    alias: {
      app: [process.cwd(), 'src'].join('/')
    }
  },

  plugins: [
    // Allow our application to read environment config
    new webpack.DefinePlugin({ 'process.env': stringify(process.env) })
  ]
};
