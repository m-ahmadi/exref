const fs = require('fs');
const path = require('path');

getFiles('./').forEach(i => {
	fs.watchFile(i, {interval: 100}, () => {
		console.log('file changed:', i);
	});
});

function getFiles(dir, res=[]) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const path = path.join(dir, file);
		const stats = fs.statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( file.replace(/\\/g, '/') ); // or path
		}
	}
	return res;
}