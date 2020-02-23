const fs = require('fs');

fs.readdir('path/to/dir', (err, files) => {
	files // array of filenames excluding '.' and '..'
});

const options = {
	encoding: 'utf8',
	withFileTypes: false
};

fs.readdir('path/to/dir', { withFileTypes: true }, (err, files) => {
	files[0] instanceof fs.Dirent // true
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
fs.readdir(path[, options], callback)
fs.readdirSync(path[, options]) /*
reads contents of a directory.

path:     string|Buffer|url
options:  string|object
	encoding:       string.  default: 'utf8'
	withFileTypes:  boolean. default: false
callback <Function>
	err:            error
	files:          string[] | Buffer[] | fs.Dirent[]
	
if options is string, it specifies encoding.
encoding specifies character encoding to use for filenames passed to callback.
if encoding is set to 'buffer', returned filenames are passed as Buffer objects.
if options.withFileTypes is true, the files array contains fs.Dirent objects.  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@