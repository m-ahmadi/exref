// me
const path = require('path');

module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			default: {
				entry: './js/main.js',
				output: {
					filename: 'bundle.js',
					path: path.resolve(__dirname, './js/dist/')
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-webpack');
	grunt.registerTask('default', ['webpack']);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
webpack: {
	someName: {
		// webpack options 
		entry: './client/lib/index.js',
		output: {
			filename: '[hash].js',
			path: path.resolve(__dirname, './asserts/')
		},

		stats: {
		// Configure the console output 
			colors: false,
			modules: true,
			reasons: true
		},
		// stats: false disables the stats output 

		storeStatsTo: 'xyz', // writes the status to a variable named xyz 
		// you may use it later in grunt i.e. <%= xyz.hash %> 

		progress: false, // Don't show progress 
		// Defaults to true 

		failOnError: false, // don't report error to grunt if webpack find errors 
		// Use this if webpack errors are tolerable and grunt should continue 

		watch: true, // use webpacks watcher 
		// You need to keep the grunt process alive 

		watchOptions: {
			aggregateTimeout: 500,
			poll: true
		},
		// Use this when you need to fallback to poll based watching (webpack 1.9.1+ only) 

		keepalive: true, // don't finish the grunt task 
		// defaults to true for watch and dev-server otherwise false 

		inline: true,  // embed the webpack-dev-server runtime into the bundle 
		// Defaults to false 

		hot: true, // adds the HotModuleReplacementPlugin and switch the server to hot mode 
		// Use this in combination with the inline option
	},
	anotherName: {...}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@