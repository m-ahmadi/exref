module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
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
					'js/**/*.js'
				],
				tasks: ['browserify'],
				options: {
					spawn: false,
					reload: true
				}
			},
			livereload: {
				options: { livereload: true },
				files: [
					'js/**/*.js',
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};