module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-jslint'); // load the task 

	grunt.initConfig({
		jslint: { // configure the task 
			// lint your project's server code 
			server: {
				src: [ // some example files 
					'server/lib/*.js',
					'server/routes/*.js',
					'server/*.js',
					'server/test/*.js'
				],
				exclude: [
					'server/config.js'
				],
				directives: { // example directives 
					node: true,
					todo: true
				},
				options: {
					edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path 
					junit: 'out/server-junit.xml', // write the output to a JUnit XML 
					log: 'out/server-lint.log',
					jslintXml: 'out/server-jslint.xml',
					errorsOnly: true, // only display errors 
					failOnError: false, // defaults to true 
					checkstyle: 'out/server-checkstyle.xml' // write a checkstyle-XML 
				}
			},
			// lint your project's client code 
			client: {
				src: [
					'client/**/*.js'
				],
				directives: {
					browser: true,
					predef: ['jQuery', '$', '_', 'Handlebars', 'Backbone', 'PIXI']
				},
				options: {
					junit: 'out/client-junit.xml'
				}
			}
		}
	});

	grunt.registerTask('default', 'jslint');
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
jslint: {
	client: {
		src: [
			'js/util.js',
			'js/pubsub.js',
			'js/fn.js',
			'js/main.js'
		],
		directives: {
			browser: true,
			predef: [
				'jQuery', '$', 'PIXI'
			]
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
jslint: {
	server: {               // lint the server code
		src: [              // files to lint
			'app.js',
			'server/*.js',
			'server/routes/*.js'
		],
		exclude: [          // files to exclude
			'server/config.js'
		],
		directives: {       // lint options
			node: true,     // node environment
			browser: false, // browser environment
			nomen: true,    // allow dangling underscores
			todo: true,     // allow todo statements
			unparam: true,  // allow unused parameters
			sloppy: true,   // don't require strcit pragma
			white: true     // allow whitespace discrepencies
		}
	},      
	client: { // lint the client code
		src: [
			'client/*.js'
		],
		directives: {
			node: false,    // node environment
			browser: true,  // browser environment
			nomen: true,    // allow dangling underscores
			todo: true,     // allow todo statements
			unparam: true,  // allow unused parameters
			predef: [       // add predefined libraries
				'$',
				'_',
				'Handlebars',
				'Backbone',
			]
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@