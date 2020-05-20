const ExtractTextPlugin = require('extract-text-webpack-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');
 
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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