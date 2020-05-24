// passing an array of file paths to the entry property creates a multi-main entry

module.exports = {
	entry: string | string[] | obj,
	
	entry: './path/to/my/entry/file.js' // shorthand for:
	entry: {
		main: './path/to/my/entry/file.js'
	}
	
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