module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded' // nested compact compressed
				},
				files: {
					'public/css/style.css': 'public/sass/style.scss'
				}
			}
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			uses_defaults: [
				'public/js/**/*.js',
				'!public/js/lib/**/*',
				'!public/js/app/**/*'
			]
			//beforeconcat: ['public/js/app/**/*.js'],
			//afterconcat: ['public/js/app.js']
		},
		/*
		concat: {
			options: {
			  separator: '\n',
			},
			dist: {
				src: [
					'public/js/app/base.js',
					'public/js/app/patterns/namespace.js',
					'public/js/app/patterns/pubsub.js',
					'public/js/app/util.js',
					'public/js/app/ajax.js',
					'public/js/app/modals/rate-modal.js',
					'public/js/app/modals/last.js',
					'public/js/app/main/product.js'
				],
				dest: 'public/js/app.js',
			}
		},
		*/
		browserify: {
			all: {
				files: {
					"js/app.js": ["js/main.js"]
				},
				options: {
					watch: true
				}
			}
		},
		watch: {
			scripts: {
				files: [
					'public/sass/**/*.scss',
					'public/js/app/**/*.js',
					'gruntfile.js'
				],
				tasks: ['sass', 'jshint'], // 'concat'
				options: {
					spawn: false,
					reload: true
				}
			},
			livereload: {
				options: { livereload: true },
				files: [
					'public/**/*.htm',
					'public/sass/**/*.scss',
					'public/js/**/*.js'
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
};