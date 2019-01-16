var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

var path = require('path');
var basePath = __dirname; // viene de base

module.exports = env => {
  console.log(env.NODE_ENV);

  return {
    context: path.join(basePath, 'src'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    entry: {
      app: './index.tsx',
      appStyles: './sass/appStyle.scss',
      vendor: ['@babel/polyfill']
    },
    output: {
      filename: '[name].[hash].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelCore: '@babel/core' // needed for Babel 7
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      })
    ]
  };
};
