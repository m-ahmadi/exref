/*
	Globbing patterns

	It is often impractical to specify all source filepaths individually,
	so Grunt supports filename expansion (also known as globbing) via the built-in node-glob and minimatch libraries.

	While this isn't a comprehensive tutorial on globbing patterns, know that in a filepath:

	*		matches any number of characters, but not /
	?		matches a single character, but not /
	**		matches any number of characters, including /, as long as it's the only thing in a path part
	{}		allows for a comma-separated list of "or" expressions
	!		at the beginning of a pattern will negate the match
	
*/
//	All most people need to know is that foo/*.js will match all files ending with .js in the foo/ subdirectory,
//	but foo/**/*.js will match all files ending with .js in the foo/ subdirectory and all of its subdirectories.
/*	Also, in order to simplify otherwise complicated globbing patterns,
	Grunt allows arrays of file paths or globbing patterns to be specified.
	Patterns are processed in-order, with !-prefixed matches excluding matched files from the result set.
	The result set is uniqued.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Official Examples:

'foo/this.js'                                                           // You can specify single files
['foo/this.js', 'foo/that.js', 'foo/the-other.js']                      // Or arrays of files
'foo/th*.js'                                                            // Or you can generalize with a glob pattern
'foo/{a,b}*.js'                                                         // This single node-glob pattern
['foo/a*.js', 'foo/b*.js']                                              // Could also be written like this
['foo/*.js']                                                            // All .js files, in foo/, in alpha order
['foo/bar.js', 'foo/*.js']                                              // bar.js is first, followed by the remaining files, in alpha order:
['foo/*.js', '!foo/bar.js']                                             // All files except for bar.js, in alpha order
['foo/*.js', '!foo/bar.js', 'foo/bar.js']                               // All files in alpha order, but with bar.js at the end
{src: ['src/<%= basename %>.js'], dest: 'build/<%= basename %>.min.js'} // Templates may be used in filepaths or glob patterns
['foo/*.js', '<%= jshint.all.src %>']                                   // But they may also reference file lists defined elsewhere in the config
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// My Examples aka: Special Selectors in Grunt (Wildcards)
//	*          any file
//	**/*       any file in this folder and all of its subfolders
//	*.js       any js file
//	**/*.js    any js file in a this folder and all of its subfolders

files: ['**/*']        // mathes  all      files in  root       folder and its subfolders
files: ['*']           // matches all      files in  root       folder
files: ['**/*.js']     // matches all  js  files in  root       folder and its subfolders
files: ['*.js']        // matches all  js  files in  root       folder
files: ['lib/**/*']    // mathes  all      files in  specified  folder and its subfolders
files: ['lib/*']       // mathes  all      files in  specified  folder
files: ['lib/**/*.js'] // mathes  all  js  files in  specified  folder and its subfolders
files: ['lib/*.js']    // mathes  all  js  files in  specified  folder