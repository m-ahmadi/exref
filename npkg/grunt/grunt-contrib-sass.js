module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded'              // nested (sass default), compact, compressed, expanded
				},
				files: {
					'main.css': 'main.scss'        // 'destination': 'source' 
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//																Examples
/*
	Example config
*/
grunt.initConfig({
	sass: {                                    // Task 
		dist: {                                // Target 
			options: {                         // Target options 
				style: 'expanded'
			},
			files: {                           // Dictionary of files 
				'main.css': 'main.scss',       // 'destination': 'source' 
				'widgets.css': 'widgets.scss'
			}
		}
	}
});
/*--------------------------------------------------------
	Compile
*/
grunt.initConfig({
	sass: {
		dist: {
			files: {
				'main.css': 'main.scss'
			}
		}
	}
});
/*--------------------------------------------------------
	Compile multiple files
*/
grunt.initConfig({
	sass: {
		dist: {
			files: {
				'main.css': 'main.scss',
				'widgets.css': 'widgets.scss'
			}
		}
	}
});
/*--------------------------------------------------------
	Compile files in a directory
*/
grunt.initConfig({
	sass: {
		dist: {
			files: [{
				expand: true,
				cwd: 'styles',
				src: ['*.scss'],
				dest: '../public',
				ext: '.css'
			}]
		}
	}
});