const fs = require('fs');

// path must be an empty folder
fs.rmdir('path/to/dir', err => {
	if (err) throw err;
	console.log('deleted.');
});

// non-empty folder, but subdirs must be empty (node v12+, experimental)
fs.rmdir('path/to/dir', { recursive: true }, err => {
	if (err) throw err;
	// ENOTEMPTY if subdir not empty
});

// sync
fs.rmdirSync('path/to/dir')
fs.rmdirSync('path/to/dir', { recursive: true })

// solution for non-empty folder
const fs = require('fs');
const path = require('path');
function rmdirRecursive(dir) {
  if ( fs.existsSync(dir) ) {
    fs.readdirSync(dir).forEach(file => {
      const curPath = path.join(dir, file);
      if ( fs.lstatSync(curPath).isDirectory() ) { // recurse
        rmdirRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}
// careful not to run on wrong dir as it's not guarded
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
fs.rmdir(path[, options], callback)
fs.rmdirSync(path[, options]) /*
path:      string|Buffer|url
options:   object
	emfileWait:    integer. default: 1000.
	maxBusyTries:  integer. default: 3
	recursive:     boolean. default: false
callback:  function
	err:     error
if path is a file, it causes an ENOENT error on windows and ENOTDIR error on posix.  */

const options = {
	emfileWait: 1000,
		// on EMFILE error, node retries with a linear backoff of 1ms longer on each try until timeout duration passes this limit.
		// ignored if recursive is false.
	maxBusyTries: 3,
		// on EBUSY, ENOTEMPTY, EPERM errors, node retries with a linear backoff wait of 100ms longer on each try.
		// this option represents the number of retries.
		// ignored if recursive is false.
	recursive: false
		// perform recursive directory removal.
		// in recursive mode, errors are not reported if path does not exist, and operations are retried on failure.
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@