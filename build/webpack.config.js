var webpack = require('webpack');
var s = JSON.stringify; // shortcut
var p = JSON.parse; // shortcut

require('dotenv').load({ path: __dirname + '/../.env' });

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/../public/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
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
  ]
};
