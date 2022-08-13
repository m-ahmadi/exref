'foo/this.js'                        // single files
['foo/a.js', 'foo/b.js', 'foo/c.js'] // arrays of files
'foo/th*.js'                         // glob pattern
'foo/{a,b}*.js'                      // ...
['foo/a*.js', 'foo/b*.js']           // same as above

//	*        Any file
//	**/*     Any file in this folder and all of its subfolders
//	*.js     Any js file
//	**/*.js  Any js file in a this folder and all of its subfolders
'**/*'         // mathes  all      files in  root       folder and its subfolders
'*'            // matches all      files in  root       folder
'**/*.js'      // matches all  js  files in  root       folder and its subfolders
'*.js'         // matches all  js  files in  root       folder
'lib/**/*'     // mathes  all      files in  specified  folder and its subfolders
'lib/*'        // mathes  all      files in  specified  folder
'lib/**/*.js'  // mathes  all  js  files in  specified  folder and its subfolders
'lib/*.js'     // mathes  all  js  files in  specified  folder
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// some examples
['foo/*.js']                              // all .js files in foo/ in alpha order
['foo/bar.js', 'foo/*.js']                // bar.js is first, followed by the remaining files, in alpha order:
['foo/*.js', '!foo/bar.js']               // all files except for bar.js, in alpha order
['foo/*.js', '!foo/bar.js', 'foo/bar.js'] // all files in alpha order, but with bar.js at the end
['**/*', '!node_modules/**/*']            // everythng except node_modules