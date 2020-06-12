module.exports = {
	devtool: 'none' // default
	
	// original source
	devtool: 'eval-source-map'                // fast
	devtool: 'inline-source-map'              // slowest
	devtool: 'source-map'                     // slowest
	
	devtool: 'eval-cheap-module-source-map'   // fastest (lines only)
	devtool: 'cheap-module-source-map'        // slower  (lines only)
	devtool: 'inline-cheap-module-source-map' // slower  (lines only)
	
	// transformed code
	devtool: 'eval-cheap-source-map' // fastest (lines only)
};

// https://webpack.js.org/configuration/devtool/