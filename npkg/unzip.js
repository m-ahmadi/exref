const unzip = require('unzip'); // it can't extract .7z files
const fs = require('fs');

// extract .zip file to a directory
fs.createReadStream('file.zip').pipe( unzip.Extract({ path: 'extracted' }) );