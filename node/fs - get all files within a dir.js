const fs = require('fs');
const { join } = require('path');

// async
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function files(dir) {
	const result = [];
	const files = await readdir(dir);
	for (file of files) {
		const stats = await stat( join(dir, file) );
		// if ( !stats.isDirectory() ) result.push(file);
		if ( stats.isFile() ) result.push(file);
	}
	return result;
}
files('node_modules/fs-extra').then(console.log) // ['file1', 'file2', 'file3']


// sync
function files(p) {
	return fs.readdirSync(p).filter( f => fs.statSync(join(p, f)).isFile() )
}
files('path/to/some/file') // ['file1', 'file2', 'file3']