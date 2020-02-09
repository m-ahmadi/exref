var getLibs = require("./libs.js");

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		/* sass: {
			dist: {
				options: {
					style: "expanded" // nested compact compressed
				},
				files: {
					"css/style.css": "sass/style.scss"
				}
			}
		}, */
		
		jshint: {
			options: {
				reporter: require("jshint-stylish"),
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			uses_defaults: [
				"js/**/*.js",
				"!js/lib/**/*"
				//"!js/app/**/*"
			]
			//beforeconcat: ["public/js/app/**/*.js"],
			//afterconcat: ["public/js/app.js"]
		},
		
		
		jslint: {
			client: {
				src: [
					"js/fn.js"
				],
				directives: {
					browser: true,
					predef: [
						"jQuery", "$", "PIXI", "util", "window", "document", "coPubsub"
					]
				}
			}
		},
		
		/* concat: {
			options: {
			  separator: "\n",
			},
			dist: {
				src: getLibs( grunt.option("min") ===  true), // ["", "", ""]
				dest: getLibs.DEST_FILE, // ""
			}
		}, */
		
		/*
		browserify: {
			all: {
				files: {
					"js/bundle.js": ["js/src/main.ts"]
				},
				options: {
					watch: true,
					plugin: ["tsify"]
				}
			},
			
		},
		*/
		
		/*
		webpack: {
			default: {
				entry: {
					main: "./js/src/main.js"
				},
				output: {
					filename: "bundle.js",
					path: "./js/dist"
				}
			}
		},
		*/
		watch: {
			scripts: {
				files: [
					"!**/node_modules/**",
					"!**/.git/**",
					"css/**/*.css",
					"js/dist/**/*.js",
					"gruntfile.js",
					"test/**/*",
					"khpc/**/*",
					
				],
				tasks: [], // "sass", "webpack", "jslint", "browserify", "jshint", "concat"
				options: {
					spawn: false,
					reload: true
				}
			},
			livereload: {
				options: { livereload: true },
				files: [
					"!**/node_modules/**",
					"!**/.git/**",
					"**/*.htm",
					"css/**/*.css",
					"js/dist/**/*.js",
					"*.js",
					"test/**/*",
					"khpc/**/*"
				]
			}
		}
	});
	
	// grunt.loadNpmTasks("grunt-webpack");
//	grunt.loadNpmTasks("grunt-jslint");
//	grunt.loadNpmTasks("grunt-browserify");
	
//	grunt.loadNpmTasks("grunt-contrib-sass");
//	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	grunt.registerTask("libs", function () {
		grunt.config.set("concat", {
			options: {
			  separator: "\n",
			},
			dist: {
				src: getLibs( grunt.option("min") === true ), // ["", "", ""]
				dest: getLibs.DEST_FILE, // ""
			}
		});
		grunt.task.run("concat");
	});
	grunt.registerTask("default", ["watch"]);
};