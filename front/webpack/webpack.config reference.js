/*
	If a webpack.config.js is present, webpack command picks it up by default.
	
	
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
module.exports = {
	entry: './app/index.js',
	output: {
		path: './dist'
		filename: 'bundle.js',
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*												Entry
	entry: string | Array<string> | obj
	
	Passing an array of file paths to the entry property creates a multi-main entry.
	As a rule of thumb: for each HTML document use exactly one entry point.
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
/*												Modules
	What is a webpack Module
	
	An ES2015 import statement
	A CommonJS require() statement
	An AMD define and require statement
	An @import statement inside of a css/sass/less file.
	An image url in a stylesheet (url(...)) or html (<img src=...>) file.
*/

// Absolute paths
import "/home/me/file";

import "C:\\Users\\me\\file";

// Relative paths
import "../src/file1";
import "./file2";
/*
	directory of resource file where import/require occurs is context directory.
	relative path import/require is joined to this context path to produce absolute path to the module.
*/

// Module paths
import "module";
import "module/lib/file";
// Modules are searched for inside all directories specified in resolve.modules.
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
/*												Loaders
	Loaders are transformations that are applied on a resource file of your application.
	They are functions (running in Node.js),
	that take the source of a resource file,
	as the parameter and return the new source.
	for example, you can use loaders to tell webpack to load a CSS file or to convert TypeScript to JavaScript.
	
	Loaders can be chained, they are applied in a pipeline to the resource.
	A chain of loaders are compiled chronologically.
	The first loader in a chain of loaders returns a value to the next and at the end loader,
	webpack expects JavaScript to be returned.
	
	Loaders can be synchronous or asynchronous.
	Loaders run in Node.js and can do everything that's possible there.
	Loaders accept query parameters. This can be used to pass configuration to the loader.
	Loaders can also be configured with an options object.
	Normal modules can export a loader in addition to the normal main via package.json with the loader field.
	Plugins can give loaders more features.
	Loaders can emit additional arbitrary files.
	A loader is typically a npm package, which you can install as a development dependency.

	Webpack treats every file as a module. (.css, .html, .scss, .jpg, etc.),
  	however, webpack only understands JavaScript.
	loaders in webpack transform these files into modules as they are added to your dependency graph.
*/
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
	entry: "./app/entry", 							// str|obj|arr	Here the application starts executing and webpack starts bundling
	// options related how webpack emits results
	output: {
		path: path.resolve(__dirname, "dist"),		// string		the target directory for all output files, must be an absolute path (use the Node.js path module)
		filename: "bundle.js", 						// string		the filename template for entry chunks
		publicPath: "/assets/", 					// string		the url to the output directory resolved relative to the HTML page
		library: "MyLibrary", 						// string		the name of the exported library
		libraryTarget: "umd",						// enum			the type of the exported library
	},
	// configuration regarding modules
	module: {
		rules: [{
			test: /\.jsx?$/,
			include: [
				path.resolve(__dirname, "app")
			],
			exclude: [
				path.resolve(__dirname, "app/demo-files")
			]
			issuer: { test, include, exclude },	// conditions for the issuer (the origin of the import)
			enforce: "pre",	// apply these rule even if rules are overridden (advanced option)
			enforce: "post",
			loader: "babel-loader",	// the loader which should be applied, it'll be resolve relative to the context, -loader suffix is no longer optional in Webpack 2 for clarity reasons
			options: {
				presets: ["es2015"]
			},
			// options for the loader
		}, {
			test: "\.html$",

			use: [
				// apply multiple loaders and options
				"htmllint-loader",
				{
					loader: "html-loader",
					options: {
						/* ... */
					}
				}
			]
		}
	},
	// options for resolving module requests (does not apply to resolving to loaders)
	resolve: {
		modules: [										// directories where to look for modules
			"node_modules",
			path.resolve(__dirname, "app")
		],
		extensions: [".js", ".json", ".jsx", ".css"],	// extensions that are used
		alias: {										// a list of module name aliases
			"module": "new-module"						// alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
			"only-module$": "new-module",				// alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"
		},
	},
	performance: {
		hints: "warning", 								// enum
		maxAssetSize: 200000, 							// int (in bytes),
		maxEntrypointSize: 400000,						// int (in bytes)
		assetFilter: function (assetFilename) {			// Function predicate that provides asset filenames
			return assetName.endsWith('.css') || assetName.endsWith('.js');
		}
	},
	devtool: "source-map", 								// enum		enhance debugging by adding meta info for the browser devtools, source-map most detailed at the expense of build speed.
	context: __dirname, 								// string (absolute path!)	the home directory for webpack, the entry and module.rules.loader option is resolved relative to this directory
	target: "web", 										// enum						the environment in which the bundle should run, changes chunk loading behavior and available modules
	externals: ["react", /^@angular\//],				// 							Don't follow/bundle these modules, but request them at runtime from the environment
	stats: { },
	devServer: { },
	plugins: [ ],
}