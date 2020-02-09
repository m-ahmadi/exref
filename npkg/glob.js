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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference
/*
	*                           Matches 0 or more characters in a single path portion
	?                           Matches 1 character
	[...]                       Matches a range of characters, similar to a RegExp range. If the first character of the range is ! or ^ then it matches any character not in the range.
	!(pattern|pattern|pattern)  Matches anything that does not match any of the patterns provided.
	?(pattern|pattern|pattern)  Matches zero or one occurrence of the patterns provided.
	+(pattern|pattern|pattern)  Matches one or more occurrences of the patterns provided.
	*(a|b|c)                    Matches zero or more occurrences of the patterns provided
	@(pattern|pat*|pat?erN)     Matches exactly one of the patterns provided
	**                          If a 'globstar' is alone in a path portion, then it matches zero or more directories and subdirectories searching for matches. It does not crawl symlinked directories.
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@