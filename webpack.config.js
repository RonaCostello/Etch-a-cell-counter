const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // externals: {
  //   jquery: 'jQuery'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/template_index.html',
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '')
  }
};
