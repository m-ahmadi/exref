module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: [
					'sass/**/*.scss',
					'js/**/*.js',
					'gruntfile.js',
					'!**/node_modules/**' // don't forget this or it'll be slow
				],
				tasks: ['sass', 'jshint', 'concat'],
				options: {
					spawn: false,
					reload: true,  // when gruntfile.js is been watched too
					interval: 5007 // another thing that makes it faster
				}
			},
			livereload: {
				options: { livereload: true },
				files: ['**/*']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
watch: {
	scripts: {
		files: ['**/*.js'], // 'Gruntfile.js', 'config/*.js'
		tasks: ['jshint'],  // 'generateFileManifest'
		options: {
			spawn: false,
			interrupt: true,
			debounceDelay: 250,
			event: ['added', 'deleted'],
		}
	},
	//-----------------------------------------------------------------------------------------------------
	configFiles: {
		files: [ 'Gruntfile.js', 'config/*.js' ],
		options: {
			reload: true
		}
	},
	//-----------------------------------------------------------------------------------------------------
	options: {
		options: {
			livereload: true,
		},
		dateFormat: function(time) {
			grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
			grunt.log.writeln('Waiting for more changes...');
		},
		cwd: {
			files: 'match/files/from/here',
		//	files: 'a/path',
			spawn: 'but/spawn/files/from/here'
		//	event: 'a/path'
		}
	},
	//-----------------------------------------------------------------------------------------------------
	css: {
		files: '**/*.sass',
		tasks: ['sass'],
		options: {
			livereload: true,
		}
	},
	css: {
		files: '**/*.sass',
		tasks: ['sass'],
		options: {
			livereload: {
				host: 'localhost',
				port: 9000,
				key: grunt.file.read('path/to/ssl.key'),
				cert: grunt.file.read('path/to/ssl.crt')
				// you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener 
			}
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//																Examples:
/*------------------------------------------------------------------------------------------------------
	Simple config to run jshint any time a file is added, changed or deleted
*/
grunt.initConfig({
	watch: {
		files: ['**/*'],
		tasks: ['jshint'],
	}
});
/*------------------------------------------------------------------------------------------------------
	Advanced config. Run specific tasks when specific files are added, changed or deleted. 
*/
grunt.initConfig({
	watch: {
		gruntfile: {
			files: 'Gruntfile.js',
			tasks: ['jshint:gruntfile']
		},
		src: {
			files: ['lib/*.js', 'css/**/*.scss', '!lib/dontwatch.js'],
			tasks: ['default']
		},
		test: {
			files: '<%= jshint.test.src %>',
			tasks: ['jshint:test', 'qunit']
		}
	}
});
/*------------------------------------------------------------------------------------------------------
	Using the watch event
*/
grunt.initConfig({
	watch: {
		scripts: {
			files: ['lib/*.js']
		}
	}
});
grunt.event.on('watch', function (action, filepath, target) {
	grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});
/*------------------------------------------------------------------------------------------------------
	Compiling Files As Needed
*/
grunt.initConfig({
  watch: {
    scripts: {
      files: ['lib/*.js'],
      tasks: ['jshint'],
      options: {
        spawn: false,
      },
    },
  },
  jshint: {
    all: {
      src: ['lib/*.js'],
    },
  },
});
// On watch events configure jshint:all to only run on changed file 
grunt.event.on('watch', function (action, filepath) {
	grunt.config('jshint.all.src', filepath);
});
/*	If you need to dynamically modify your config,
	the spawn option must be disabled to keep the watch running under the same context.
	If you save multiple files simultaneously you may opt for a more robust method:
*/
var changedFiles = Object.create(null);
var onChange = grunt.util._.debounce(function () {
	grunt.config( 'jshint.all.src', Object.keys(changedFiles) );
	changedFiles = Object.create(null);
}, 200);
grunt.event.on('watch', function (action, filepath) {
	changedFiles[filepath] = action;
	onChange();
});
/*------------------------------------------------------------------------------------------------------
	Live Reloading
*/
grunt.initConfig({
	watch: {
		options: {
			livereload: true
		},
		css: {
			files: ['public/scss/*.scss'],
			tasks: ['compass']
		}
	}
});
/*	You can also configure live reload for individual watch targets or run multiple live reload servers.
	Just be sure if you're starting multiple servers they operate on different ports:
*/
grunt.initConfig({
	watch: {
		css: {
			files: ['public/scss/*.scss'],
			tasks: ['compass'],
			options: {
				// Start a live reload server on the default port 35729 
				livereload: true,
				//======================================================
				// or another port
				livereload: 123456,
				// (unfortunately chrome livereload extension doesn't have
				// the option to change the port from 35729 to something else)
				//======================================================
				// Passing an object to livereload allows listening on a specific port and hostname/IP or over https connections (by specifying key and cert paths).
				livereload: {
					host: 'localhost',
					port: 9000,
					key: grunt.file.read('path/to/ssl.key'),
					cert: grunt.file.read('path/to/ssl.crt')
					// you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener 
				}
				//======================================================
			}
		},
		another: {
			files: ['lib/*.js'],
			tasks: ['anothertask'],
			options: {
				// Start another live reload server on port 1337 
				livereload: 1337
			}
		},
		dont: {
			files: ['other/stuff/*'],
			tasks: ['dostuff']
		}
	}
});
/*------------------------------------------------------------------------------------------------------
	Live Reload with Preprocessors
*/
grunt.initConfig({
	sass: {
		dev: {
			src: ['src/sass/*.sass'],
			dest: 'dest/css/index.css'
		},
	},
	watch: {
		sass: {
			// We watch and compile sass files as normal but don't live reload here 
			files: ['src/sass/*.sass'],
			tasks: ['sass']
		},
		livereload: {
			// Here we watch the files the sass task will compile to 
			// These files are sent to the live reload server after sass compiles to them 
			options: { livereload: true },
			files: ['dest/**/*']
		}
	}
});