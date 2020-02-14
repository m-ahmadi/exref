/*	
	npm install --save-dev jshint-stylish (if using it)
	
	grunt jshint
	grunt jshint:uses_defaults
	grunt jshint:with_overrides
	grunt jshint:all
*/
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				reporter: require('jshint-stylish'), // ("jshint-stylish" needs to be installed)
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			// Files that we want to be linted:
			uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js']
			//beforeconcat: ['src/foo.js', 'src/bar.js'],
			//afterconcat: ['dist/output.js']
			//all: ['dir1/**/*.js', 'dir2/**/*.js']
			
			// Hint all .js files, But exclude some folders:
			uses_defaults: [
				'dir1/js/**/*.js',
				'!dir1/js/lib/**/*',
				'!dir1/js/app/**/*'
				//	It's important to know that,
				//	If you use **/*
				//	JSHint will lint EVERYTHING!, and you can't exclude a damn thing!
				//	So you have to specify the file extension: **/*.js
			]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//															Examples:
/*-----------------------------------------------------------------
	Wildcards
*/
grunt.initConfig({
	jshint: {
		all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
	}
});
/*-----------------------------------------------------------------
	Linting before and after concatenating
*/
grunt.initConfig({
	concat: {
		dist: {
			src: ['src/foo.js', 'src/bar.js'],
			dest: 'dist/output.js'
		}
	},
	jshint: {
		beforeconcat: ['src/foo.js', 'src/bar.js'],
		afterconcat: ['dist/output.js']
	}
});
/*-----------------------------------------------------------------
	Specifying JSHint options and globals
*/
grunt.initConfig({
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			eqnull: true,
			browser: true,
			globals: {
				jQuery: true
			}
		},
		uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
		with_overrides: {
			options: {
				curly: false,
				undef: true,
			},
			files: {
				src: ['dir3/**/*.js', 'dir4/**/*.js']
			}
		}
	}
});
/*-----------------------------------------------------------------
	Ignoring specific warnings
*/
grunt.initConfig({
	jshint: {
		ignore_warning: {
			options: {
				'-W015': true
			},
			src: ['**/*.js']
		}
	}
});
