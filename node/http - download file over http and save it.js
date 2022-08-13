const http = require('http');
const fs = require('fs');
let file = fs.createWriteStream('file.jpg');
let request = http.get('url', response => {
	response.pipe(file);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const http = require('http');
const fs = require('fs');
let download = (url, dest, cb) => {
	let file = fs.createWriteStream(dest);
	let req = http.get(url, res => {
		res.pipe(file);
		file.on('finish', () => {
			file.close(cb); // close() is async, call cb after close completes.
		});
	});
	req.on('error', err => { // Handle errors
		fs.unlink(dest); // Delete the file async. (But we don't check the result)
		if (cb)
			cb(err.message);
	});
};
download('url', 'dest', fn);