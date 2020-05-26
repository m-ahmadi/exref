const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // npm i mini-css-extract-plugin -D
const WebpackRTLPlugin = require('webpack-rtl-plugin');					 // npm i webpack-rtl-plugin -D
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
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {}
					}
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// same options as webpackOptions.output
			filename: 'style.css'
		}),
		new WebpackRTLPlugin(),
	],
};