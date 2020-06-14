// npm i worker-loader -D

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sigman.v/dist/' : '/',
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.worker\.js$/,
					use: { loader: 'worker-loader' }
				}
				
				{
					test: /\.worker\.js$/,
					use: {
						loader: 'worker-loader',
						options: {
							publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
							...process.env.NODE_ENV === 'production' && {publicPath: './'}
						} // prod=./ dev=/
					}
				}
			]
		}
	}
	
	// or
	chainWebpack: config => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
			.loader('worker-loader')
			.end()
  }
};