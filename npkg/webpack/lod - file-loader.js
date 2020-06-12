module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			// or
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: { outputPath: 'images/', name: '[name].[ext]' } // default name: '[contenthash].[ext]'
				}]
			},
			// or
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				test: /\.(woff|woff2|ttf)$/,
				use: [{
					loader: 'file-loader',
					options: { outputPath: 'fonts/', name: '[name].[ext]', }
				}]
			}
		],
	},
};