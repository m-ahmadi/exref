const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // npm i mini-css-extract-plugin -D

// extracts css into separate files (a css file per js file which contains css)

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			// or
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			// or
			{
				test: /\.scss$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: {plugins: [rtlcss]} },
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin()
		// or
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
};