const ExtractTextPlugin = require('extract-text-webpack-plugin'); // npm i extract-text-webpack-plugin -D
const RtlCssPlugin = require('rtlcss-webpack-plugin');            // npm i rtlcss-webpack-plugin -D
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css'), new RtlCssPlugin('style.rtl.css')]
};