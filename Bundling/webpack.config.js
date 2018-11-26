var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var basePath = __dirname; // viene de base

module.exports = {
  context: path.join(basePath, 'src'),
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: '[name].[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=2000'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
};
