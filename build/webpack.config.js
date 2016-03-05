require('dotenv-autoload');

module.exports = {
  entry: './src/index.js',
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
