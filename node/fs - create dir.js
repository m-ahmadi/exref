var fs = require("fs");

const options = {
	recursive: false,
	mode: 0o777
};

fs.mkdir('some/path', options, err => {
	if (err) throw err;
	console.log('dir created.');
});

// error if path doesn't exist
fs.mkdir('some/path', err => {
  // ENOENT: no such file or directory: some
});

// creates /tmp/a/apple, regardless of whether /tmp and /tmp/a exist.
fs.mkdir('/tmp/a/apple', { recursive: true }, err => {});

// windows error on root dirs:
fs.mkdir('/', { recursive: true }, err => {
  // => [Error: EPERM: operation not permitted, mkdir 'C:\']
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sync
var dir = "./tmp";
if ( !fs.existsSync(dir) ) {
	fs.mkdirSync(dir);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
fs.mkdir(path[, options], callback) /*
path:      string|Buffer|url
options:   object|integer optional.
	recursive:  boolean. default: false. indicates whether parent folders should be created.
	mode:       integer. default: 0o777 (not supported on windows)
callback:  function
	err:        error

if path is an existing directory and recursive is false, an error is raised.
on windows, if path is a root directory '/', an error is raised. (even if recursive is true)
if options arguments is integer, then it specifies the mode (permission and sticky bits)  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@