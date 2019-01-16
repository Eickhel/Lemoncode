const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env =>
  merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new BundleAnalyzerPlugin()]
  });
