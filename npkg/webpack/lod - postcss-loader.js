// npm i -D postcss-loader

const rtlcss = require('rtlcss');
const autoprefixer = require('autoprefixer');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'postcss-loader'] // postcss.config.js
			},
			// or
			{
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader'
        ]
      },
			// or
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: {plugins: [autoprefixer,rtlcss]} },
					'sass-loader',
				],
			},
		],
	},
};