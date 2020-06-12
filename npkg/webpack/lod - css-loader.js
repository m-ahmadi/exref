// npm i css-loader -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'		// interprets css @import and url() like js import/require() and resolves them
				],
				// or
				use: ['to-string-loader', 'css-loader']
				// or
				use: ['handlebars-loader', 'extract-loader', 'css-loader'],
			},
		],
	},
};