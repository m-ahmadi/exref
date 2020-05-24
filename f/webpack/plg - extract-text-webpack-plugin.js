const ExtractTextPlugin = require('extract-text-webpack-plugin'); // npm i extract-text-webpack-plugin -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	]
}