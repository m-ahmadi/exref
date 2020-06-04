const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i html-webpack-plugin -D

module.exports = {
	configureWebpack: {
		plugins: [
			new HtmlWebpackPlugin({template: './src/index.html'})
    ]
	}
};