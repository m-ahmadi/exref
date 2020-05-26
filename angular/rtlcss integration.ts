/*
	ng add ngx-build-plus
	npm i rtlcss autoprefixer -D
	ng serve --extra-webpack-config webpack.partial.js -o
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// webpack.partial.js
const rtlcss = require('rtlcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'postcss-loader', options: {plugins: [autoprefixer, rtlcss]} },
          'sass-loader', // ?
        ],
      },
    ],
  },
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@