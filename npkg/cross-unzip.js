// npm install cross-unzip
// npm install win-7zip  (for windows support)
const { zip, unzip } = require('cross-unzip'); // it can extract .7z and .zip files
 
// extract files
unzip('file.zip', 'some/dir', err => {
	console.log('done');
});
 
// compress files
zip('some/dir', 'file.zip', err => {
	console.log('done');
});