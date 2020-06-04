
module.exports = {
	baseUrl:                  '/',
	publicPath:               'dist',
	outputDir:                '',
	assetsDir:                'index.html',
	indexPath:                '',
	filenameHashing:          true,
	pages:                    undefined | { 'pageName': {*entry, template, filename, title, chunks:[]}, ... },
	lintOnSave:               true | 'warning' | 'default' | 'error',
	runtimeCompiler:          false,
	transpileDependencies:    [''|/^/, ...],
	productionSourceMap:      true,
	crossorigin:              undefined | '',
	integrity:                false,
	configureWebpack:         {} | ()=>,
	chainWebpack:             ()=>,
	css: {
		modules:                , // v4 deprecated
		requireModuleExtension: true,
		extract:                true | {},
		sourceMap:              false,
		loaderOptions:          { /* css-related loeaders options */ },
	},
	devServer: {
		proxy:                  '' | {},
		/* webpack-dev-server options */
	},
	parallel:                 require('os').cpus().length > 1 | boolean | number,
	pwa:                      {},
	pluginOptions:            {},
};