const WebpackRTLPlugin = require('webpack-rtl-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							...,
						}
					}
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
				filename: 'style.css',
		}),
		new WebpackRTLPlugin(),
	],
};