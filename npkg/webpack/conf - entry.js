module.exports = {
	entry: '' | ['',] | {'':'', ...},
		'' | ['',]  // chunk is named main
		{}          // each key is chunk's name and value is chunk's entry point
	
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
	
	// must be set if multiple entry
	output: {
		filename: '[name].js' // or
		filename: '[name].[contentHash].bundle.js'
  }
};