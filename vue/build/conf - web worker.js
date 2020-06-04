// npm i worker-loader -D

module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.worker\.js$/,
					use: { loader: 'worker-loader' }
				}
			]
		}
	}
};