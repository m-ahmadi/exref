const glob = require('glob');

// async
glob(pattern, [options], cb)

glob('./template/**/*.htm', function (err, res) {
	console.log(err, res);
	res.forEach(path => ...)
});
 
// sync
const files = glob.sync(pattern [, options])

const filePaths = glob.sync('/TseClient/**/*.csv');
filePaths.forEach( path => console.log(path) );

glob.sync('views/**/*.hbs').forEach(path => {
	const c = fs.readFileSync(path, "utf-8");
});

// class
const Glob = require('glob').Glob
const mg = new Glob(pattern, options, cb)


glob('**/*.js', options, function (err, files) {
	// files is an array of filenames. 
	// if the `nonull` option is set, and nothing was found, then files is ['**/*.js'] 
	// err is an error object or null. 
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* reference
*                           0 or more characters in a single path portion
?                           1 character
[...]                       range of characters. similar to a RegExp range. if first char of range is ! or ^ then it matches any chars not in the range.
!(pattern|pattern|pattern)  everything except these patterns
?(pattern|pattern|pattern)  0 or 1    of patterns
+(pattern|pattern|pattern)  1 or more of patterns
*(a|b|c)                    0 or more of patterns
@(pattern|pat*|pat?erN)     1         of patterns
**                          if a 'globstar' is alone in a path portion, then it matches 0 or more dirs and subdirs searching for matches. (won't crawl symlinked directories)
*/
'*'               // any file
'**/*'            // any file in this folder and all of its subfolders
'*.js'            // any js file
'**/*.js'         // any js file in this folder and all of its subfolders
'**/*'            // mathes  all      files in  root       folder and its subfolders
'*'               // matches all      files in  root       folder
'**/*.js'         // matches all  js  files in  root       folder and its subfolders
'*.js'            // matches all  js  files in  root       folder
'lib/**/*'        // mathes  all      files in  specified  folder and its subfolders
'lib/*'           // mathes  all      files in  specified  folder
'lib/**/*.js'     // mathes  all  js  files in  specified  folder and its subfolders
'lib/*.js'        // mathes  all  js  files in  specified  folder
'**/lib/**/*.js'  // all lib/**/*.js within root
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@