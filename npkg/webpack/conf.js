// basic
const path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
module.exports = {
	entry: './app/entry',                    // str|obj|arr Here the application starts executing and webpack starts bundling
	
	// options related how webpack emits results
	output: {
		path: path.resolve(__dirname, 'dist'), // string    the target directory for all output files, must be an absolute path
		filename: 'bundle.js',                 // string    the filename template for entry chunks
		publicPath: '/assets/',                // string    the url to the output directory resolved relative to the HTML page
		library: 'MyLibrary',                  // string    the name of the exported library
		libraryTarget: 'umd',                  // enum      the type of the exported library
	},
	
	// configuration regarding modules
	module: {
		rules: [
			{ // Rule
				test:                    /\.jsx?$/ | '\.html$',
				use:                     '' | ['','',] | {loader:'',options:{}}  | UseEntry[],
				loader:                  this.use.loader,
				options | query:         this.use.options,
				presets:                 ['es2015']
				include:                 [ path.resolve(__dirname, 'app') ],
				exclude:                 /node_modules/ | [ path.resolve(__dirname, 'app/demo-files') ]
				issuer:                  Condition,
				enforce:                 'pre' | 'post',
				parser:                  ,
				parser.dataUrlCondition: ,
				generator.dataUrl:       ,
				generator.filename:      ,
				resource:                ,
				resourceQuery:           ,
				parser.parse:            ,
				rules | oneOf:           , // nested rules
				sideEffects:             ,
				type:                    ,
				resolve:                 , // v4.36.1+
				loaders:                 , // deprecated
			}
		]
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