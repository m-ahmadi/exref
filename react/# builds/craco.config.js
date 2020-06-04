/* npm i @craco/craco -D

in package.json
{
	"scripts": {
		"start": "craco start",
		"build": "craco build"
		"test": "craco test"
	}
}
*/
const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');

module.exports = {
	reactScriptsVersion: 'react-scripts',
	style: {
		modules: {
			localIdentName: ''
		},
		css: {
			loaderOptions: {/* css-loader options */} | (cssLoaderOptions, {env, paths}) => cssLoaderOptions,
		},
		sass: {
			loaderOptions: {/* sass-loader options */} | (sassLoaderOptions, {env, paths}) => sassLoaderOptions,
		},
		postcss: {
			mode: 'extends' || 'file',
			plugins: [],
			env: {
				autoprefixer: {/* autoprefixer options */},
				stage: 3, // any valid stages
				features: {/* any css features */}
			},
			loaderOptions: {/* any postcss-loader options */} | (postcssLoaderOptions, {env,paths}) => postcssLoaderOptions,
		}
	},
	eslint: {
		enable: true,
		mode: 'extends' || 'file',
		configure: {/* eslint config */} | (eslintConfig, {env, paths}) => eslintConfig,
		loaderOptions: {/* eslint-loader options */} | (eslintOptions, {env,paths}) => eslintOptions,
	},
	babel: {
		presets: [],
		plugins: [],
		loaderOptions: {/* babel-loader options */},
		loaderOptions: (babelLoaderOptions, { env, paths }) => babelLoaderOptions
	},
	typescript: {
		enableTypeChecking: true
	},
	webpack: {
		alias: {},
		plugins: [],
		configure: {/* webpack options */} | (webpackConfig, {env, paths}) => webpackConfig,
	},
	jest: {
		babel: {
			addPresets: true,
			addPlugins: true
		},
		configure: {/* Jest options */} | (jestConfig, {env,paths,resolve,rootDir}) => jestConfig,
	},
	devServer: {/* devServer options */} | (devServerConfig, {env,paths,proxy,allowedHost}) => devServerConfig,
	plugins: [
		{
			plugin: {
				overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => cracoConfig,
				overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => webpackConfig,
				overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => devServerConfig,
				overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => jestConfig
			},
			options: {}
		}
	]
};