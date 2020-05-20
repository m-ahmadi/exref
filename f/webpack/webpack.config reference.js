// basic
module.exports = {
	entry: './app/index.js',
	output: {
		path: './dist'
		filename: 'bundle.js',
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* entry
entry: string | Array<string> | obj

passing an array of file paths to the entry property creates a multi-main entry.
as a rule of thumb: for each HTML document use exactly one entry point.
*/										

module.exports = {
	entry: './path/to/my/entry/file.js'
	// above is short hand for:
	entry: {
		main: './path/to/my/entry/file.js'
	}
	
	// more:
	entry: {
		app: './src/app.js',
		vendors: './src/vendors.js'
	}
	
	entry: {
		pageOne: './src/pageOne/index.js',
		pageTwo: './src/pageTwo/index.js',
		pageThree: './src/pageThree/index.js'
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// modules (import, require, define, css/scss @import, css url(), img tag)

// absolute paths
import '/home/me/file';
import 'C:\\Users\\me\\file';

// relative paths
import '../src/file1';
import './file2';

// module paths (searched for in dirs specified in resolve.modules)
import 'module';
import 'module/lib/file';

module.exports = {
	module: {
		resolve: {
			modules: ['./js/src'] // what directories should be searched when resolving modules.
			alias: {
				math: 'src/math/',
				Templates: 'src/templates/'
				/*
					import Utility from '../../utilities/utility';
					import Utility from 'Utilities/utility';
				*/
			}
		}
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// loaders
module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader' }
		]
	}
};
/*
pass all files inside of require()/import calls that ends with .js,
to babel-loader to transform it before adding it to the bundle.
When defining rules in webpack.config, we're defining them under module.rules, and not rules.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// complete reference
module.exports = {
	entry: './app/entry', 							// str|obj|arr	Here the application starts executing and webpack starts bundling
	// options related how webpack emits results
	output: {
		path: path.resolve(__dirname, 'dist'),		// string		the target directory for all output files, must be an absolute path (use the Node.js path module)
		filename: 'bundle.js', 						// string		the filename template for entry chunks
		publicPath: '/assets/', 					// string		the url to the output directory resolved relative to the HTML page
		library: 'MyLibrary', 						// string		the name of the exported library
		libraryTarget: 'umd',						// enum			the type of the exported library
	},
	// configuration regarding modules
	module: {
		rules: [{
			test: /\.jsx?$/,
			include: [
				path.resolve(__dirname, 'app')
			],
			exclude: [
				path.resolve(__dirname, 'app/demo-files')
			]
			issuer: { test, include, exclude },	// conditions for the issuer (the origin of the import)
			enforce: 'pre',	// apply these rule even if rules are overridden (advanced option)
			enforce: 'post',
			loader: 'babel-loader',	// the loader which should be applied, it'll be resolve relative to the context, -loader suffix is no longer optional in Webpack 2 for clarity reasons
			options: {
				presets: ['es2015']
			},
			// options for the loader
		}, {
			test: '\.html$',

			use: [
				// apply multiple loaders and options
				'htmllint-loader',
				{
					loader: 'html-loader',
					options: {
						/* ... */
					}
				}
			]
		}
	},
	// options for resolving module requests (does not apply to resolving to loaders)
	resolve: {
		modules: [                                    // directories where to look for modules
			'node_modules',
			path.resolve(__dirname, 'app')
		],
		extensions: ['.js', '.json', '.jsx', '.css'], // extensions that are used
		alias: {                                      // a list of module name aliases
			'module': 'new-module'                      // alias 'module' -> 'new-module' and 'module/path/file' -> 'new-module/path/file'
			'only-module$': 'new-module',               // alias 'only-module' -> 'new-module', but not 'module/path/file' -> 'new-module/path/file'
		},
	},
	performance: {
		hints: 'warning',                             // enum
		maxAssetSize: 200000,                         // int (in bytes),
		maxEntrypointSize: 400000,                    // int (in bytes)
		assetFilter: function (assetFilename) {       // Function predicate that provides asset filenames
			return assetName.endsWith('.css') || assetName.endsWith('.js');
		}
	},
	devtool: 'source-map',                          // enum  enhance debugging by adding meta info for the browser devtools, source-map most detailed at the expense of build speed.
	context: __dirname,                             // string (absolute path!)	the home directory for webpack, the entry and module.rules.loader option is resolved relative to this directory
	target: 'web',                                  // enum  the environment in which the bundle should run, changes chunk loading behavior and available modules
	externals: ['react', /^@angular\//],            // don't follow/bundle these modules, but request them at runtime from the environment
	stats: { },
	devServer: { },
	plugins: [ ],
}