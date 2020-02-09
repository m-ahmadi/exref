// basic
const presetEntry = ['@babel/env', {
	targets: 'last 2 versions',
	useBuiltIns: false,
	modules: 'amd',
	loose: false
}];

const presetEntry = ['@babel/env', {
	targets: {
		edge: '17',
		firefox: '60',
		chrome: '67',
		safari: '11.1',
	},
	useBuiltIns: 'usage',
	modules: 'amd'
}];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
const presetEntry = ['@babel/env', {
	targets: {}, // default.         or:
	targets: '> 5%, not dead',    // or:
	targets: ['> 5%', 'not dead'] // or:
	targets: {
		chrome: 7,
		opera: 7,
		edge: 7,
		firefox: 7,
		safari: 7,
		ie: 9,
		ios: 7,
		android: 4,
		node: 2,
		electron: '', 
		browsers: [
			'last 1 version',
			'last 2 versions',
			'safari 7',
			'last 2 Chrome versions',
			'last 3 firefox versions'
		], // browsers results are overridden by explicit items from targets
		node: true || 'current'  // compile against the current node version
	},
	spec: false,
	loose: false,
	modules: 'auto' | 'amd' | 'umd' | 'systemjs' | 'commonjs' | 'cjs' | 'auto' | false,
	debug: false,
	include: ['@babel/plugin-transform-regenerator', 'es6.map'],
	exclude: ['transform-es2015-arrow-functions', 'es6.set'],
	useBuiltIns: false | 'usage' | 'entry', // how to handle polyfills:
		// false: no polyfills
		// usage: add direct references to core-js modules
		// entry: individual requires to different core-js entry points based on environment
	corejs: 2 | 3 | { version: 2 | 3, proposals: boolean },
	forceAllTransforms: false,
	configPath: process.cwd(),
	ignoreBrowserslistConfig: false,
	shippedProposals: false
}];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// browserslist reference:
'last 2 versions'            // the last 2 versions for each browser.
'last 2 Chrome versions'     // the last 2 versions of Chrome browser.
'last 2 major versions'      // all minor/patch releases of last 2 major versions.
'last 2 iOS major versions'  // ...
'since 2015'                 // all versions released since year 2015
'last 2 years'               // ...
'since 2015-03'              // ...
'since 2015-03-10'           // ...
'dead'                       // browsers without official support or updates for 24 months. currently: IE 10, IE_Mob 10, BlackBerry 10, BlackBerry 7, Samsung 4 and OperaMobile 12.1.
'not dead'                   // opposite of above
'> 5%'                       // browsers versions selected by global usage statistics. >=, < and <= work too.
'> 5% in US'                 // uses USA usage statistics. It accepts two-letter country code.
'> 5% in alt-AS'             // uses Asia region usage statistics. List of all region codes can be found at caniuse-lite/data/regions.
'> 5% in my stats'           // uses custom usage data.
'cover 99.5%'                // most popular browsers that provide coverage.
'cover 99.5% in US'          // same as above, with two-letter country code.
'cover 99.5% in my stats'    // uses custom usage data.
'maintained node versions'   // all node.js versions, which are still maintained by node.js Foundation.
'node 10' | 'node 10.4'      // selects latest node.js 10.x.x or 10.4.x release.
'current node'               // node.js version used by browserslist right now.
'ie 6-8'                     // selects an inclusive range of versions.
'Firefox > 20'               // versions of Firefox newer than 20. >=, < and <= work too. It also works with node.js.
'iOS 7'                      // the iOS browser version 7 directly.
'Firefox ESR'                // the latest [Firefox ESR] version.
'PhantomJS 2.1'              // selects Safari versions similar to PhantomJS runtime.
'unreleased versions'        // alpha and beta versions.
'unreleased Chrome versions' // ...
'defaults'                   // browserslist's default browsers (> 0.5%, last 2 versions, Firefox ESR, not dead).
'not'                        // negate any query
'not ie <= 8'                // exclude browsers selected by previous queries.
'extends browserslist-config-mycompany' // take queries from browserslist-config-mycompany npm package.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@