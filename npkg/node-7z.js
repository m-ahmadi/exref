// needs a 7z executable (v16.02 or greater) available in your system
const Seven = require('node-7z');

// readable stream:
const stream = Seven.extractFull('./archive.7z', './output', { $progress: true });
stream.on('data', data => );
stream.on('progress', progress => );
stream.on('end', () => ); // end of the operation
stream.on('error', err => handleError(err));  // must be handled