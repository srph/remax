var env = __dirname + '/../.env';
var dotenv = require('dotenv');
dotenv.load({ path: env });

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/../public/dist/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6']
  }
};
