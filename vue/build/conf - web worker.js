// npm i worker-loader -D

module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.worker\.js$/,
					use: 'worker-loader'
				}
			]
		}
	}
}

module.exports = {
	...(process.env.NODE_ENV === 'production') && { publicPath: '/subpath/dist/' },
	
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.worker\.js$/,
					use: {
						loader: 'worker-loader',
						...(process.env.NODE_ENV === 'production') && { options: {publicPath: './'} }
					}
				}
			]
		}
	}
}

module.exports = {
	chainWebpack: config => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
			.loader('worker-loader')
			.end()
  }
}