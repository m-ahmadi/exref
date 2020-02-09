const { zip, unzip, zipSync, unzipSync } = require('cross-zip'); // it can't extract .7z files

zip('some/dir', 'file.zip', err => console.log('done'));
unzip('file.zip', 'some/dir', err => console.log('done'));

zipSync('some/dir', 'file.zip');
unzipSync('file.zip', 'some/dir');

// api
crossZip.zip(inPath, outPath, callback?)
crossZip.zipSync(inPath, outPath)
crossZip.unzip(inPath, outPath, callback?)
crossZip.unzipSync(inPath, outPath)