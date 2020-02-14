var copydir = require("copy-dir");

// Sync
copydir.sync(from, to[, filter]);

// Async
copydir(from, to, [filter, ]callback);

copydir.sync("/my/from/path", "/my/target/path");

copydir("/my/from/path", "/my/target/path", err => {
	if (err) {
		console.log(err);
	} else {
		console.log("ok");
	}
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// add a filter
// When you want to copy a directory, but some file or sub directory is not you want, you can do like this:
var path = require('path');
var copydir = require('copy-dir');

// Sync:
copydir.sync('/my/from/path', '/my/target/path', (stat, filepath, filename) => {
	if (stat === 'file' && path.extname(filepath) === '.html') {
		return false;
	}
	if (stat === 'directory' && filename === '.svn') {
		return false;
	}
	return true;
}, err => {
	console.log('ok');
});

// Async:
copydir('/a/b/c', '/a/b/e', function (stat, filepath, filename) {
	//...
}, err => {
	//...
});
