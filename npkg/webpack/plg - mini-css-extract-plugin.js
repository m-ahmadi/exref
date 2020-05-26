const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // npm i mini-css-extract-plugin -D

// extracts css into separate files (a css file per js file which contains css)

module.exports = {
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
};