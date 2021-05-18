module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
			  separator: '\n'
			},
			dist: {
				src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
				dest: 'dist/built.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//															Examples:
/*-------------------------------------------------------------------------------------------------
	Concatenating with a custom separator
*/
grunt.initConfig({
	concat: {
		options: {
			separator: ';',
		},
		dist: {
			src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
			dest: 'dist/built.js'
		}
	}
});
/*-------------------------------------------------------------------------------------------------
	Banner comments
*/
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	concat: {
		options: {
			stripBanners: true,
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},
		dist: {
			src: ['src/project.js'],
			dest: 'dist/built.js',
		}
	}
});
/*-------------------------------------------------------------------------------------------------
	Multiple targets
*/
grunt.initConfig({
	concat: {
		basic: {
			src: ['src/main.js'],
			dest: 'dist/basic.js'
		},
		extras: {
			src: ['src/main.js', 'src/extras.js'],
			dest: 'dist/with_extras.js',
		}
	}
});
/*-------------------------------------------------------------------------------------------------
	Multiple files per target
*/
grunt.initConfig({
  concat: {
    basic_and_extras: {
      files: {
        'dist/basic.js': ['src/main.js'],
        'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
      },
    },
  },
});
/*-------------------------------------------------------------------------------------------------
	Dynamic filenames
*/
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    dist: {
      src: ['src/main.js'],
      dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
    },
  },
});
/*-------------------------------------------------------------------------------------------------
	Advanced dynamic filenames
*/
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	dirs: {
		src: 'src/files',
		dest: 'dist/<%= pkg.name %>/<%= pkg.version %>',
	},
	concat: {
		basic: {
			src: ['<%= dirs.src %>/main.js'],
			dest: '<%= dirs.dest %>/basic.js',
		},
		extras: {
			src: ['<%= dirs.src %>/main.js', '<%= dirs.src %>/extras.js'],
			dest: '<%= dirs.dest %>/with_extras.js',
		}
	}
});
/*-------------------------------------------------------------------------------------------------
	Invalid or Missing Files Warning
*/
grunt.initConfig({
	concat: {
		missing: {
			src: ['src/invalid_or_missing_file'],
			dest: 'compiled.js',
			nonull: true,
		}
	}
});
/*-------------------------------------------------------------------------------------------------
	Custom process function
*/
grunt.initConfig({
	concat: {
		dist: {
			options: {
				// Replace all 'use strict' statements in the code with a single one at the top 
				banner: "'use strict';\n",
				process: function (src, filepath) {
					return '// Source: ' + filepath + '\n' +
					src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				}
			},
			files: {
				'dist/built.js': ['src/project.js'],
			}
		}
	}
});