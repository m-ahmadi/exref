module.exports = function (grunt) { // The "wrapper" function (do grunt-related things in here)

	/*---------------------------------------------------------------------------
	project and task configuration */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			// plugin config and options
		},
		watch: {
			// plugin config and options
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		gholamreza: {
			// custom task defined by me
		}
	});
	
	/*---------------------------------------------------------------------------
	loading grunt plugins and tasks (load the plugin that provides the "uglify" task) */
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	
	/*---------------------------------------------------------------------------
	custom tasks */
	
	// default task(s)
	grunt.registerTask('default', ['uglify']); // ['uglify', 'concat']
	
	// a custom task:
	grunt.registerTask('hasan', ['concat']);
	
	// a very basic default task.
	grunt.registerTask('default', 'Log some stuff.', function () {
		grunt.log.write('Logging some stuff...').ok();
	});
	
	// a basic task that I defined:
	grunt.registerTask('olagh', function (arg1, arg2) {
		console.log(arg1, arg2);
	});
	
	// a multi task that I defined:
	grunt.registerMultiTask('gholamreza', 'description of this gholamreza task', function () {
		grunt.log.writeln( this.target + ': ' + this.data );
	});
};