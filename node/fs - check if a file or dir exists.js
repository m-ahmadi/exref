const fs = require('fs');
const log = console.log;
const path = 'path/to/file/or/dir';
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async - using access (recommended)

// use this:
const access = require('util').promisify(fs.access);
await access("somefile.txt").catch(async err => {
	await fs.writeFile("somefile.txt", "");
});

// exists?
fs.access(path, fs.F_OK, err => {
  if (err) log("doesn't exist")
});
// or short:
fs.access(path, err => log(err));

// readable?
fs.access(path, fs.R_OK, err => {
  if (err) log("not readable")
});

// writable?
fs.access(path, fs.W_OK, err => {
  if (err) log("not writable")
});

// reference
fs.access(path[, mode], callback)
fs.accessSync(path[, mode])
/*
path      string | buffer | url
mode      integer default: fs.constants.F_OK (fs.constants.F_OK === fs.F_OK)
callback  function
	err 		error

constants:
	F_OK	exists
	R_OK	readable
	W_OK	writable
	X_OK	executable (no effect on windows, will behave like fs.constants.F_OK)
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sync
if ( fs.existsSync(path) ) {
	// do something
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* async - using stat
using fs.stat() to check for the existence of a file before calling fs.open(), fs.readFile() or fs.writeFile() is not recommended.
instead, user code should open/read/write the file directly and handle the error raised if the file is not available.
to check if a file exists without manipulating it afterwards, fs.access() is recommended.
*/
fs.stat('path/to/file/or/dir', function (err, stats) {
	log( stats.isDirectory() );
	log( stats.isFile() );
	log(stats);
});