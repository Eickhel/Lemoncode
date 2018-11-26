var path = require('path');
var basePath = __dirname; // viene de base

module.exports = {
  context: path.join(basePath, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
