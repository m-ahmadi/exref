const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'app.js',
		path: __dirname + '/dist'
	},
	resolve: {
		modules: ['./js/src']
	},
	module: {
		rules: [
		//	{ test: /\.html$/, use: 'html-loader' },
		//	{ test: /\.scss$/, use: 'sass-loader' },
		//	{ test: /\.hbs$/,  use: 'handlebars-loader' }
		//	{ test: /\.js$/,   use: 'babel-loader' },
			{ test: /\.html$/, use: ExtractText.extract({ use: 'html-loader' }) },
			{ test: /\.scss$/, use: ExtractText.extract({ use: ['css-loader', 'sass-loader'] }) },
			{ test: /\.hbs$/,  use: ExtractText.extract({ use: 'raw-loader' }) },
			{ test: /\.js$/,   use: 'babel-loader' }
		]
	},
	plugins: [
		new ExtractText('index.html'),
		new ExtractText('style.css')
		new ExtractText('temps.js')
	]
};