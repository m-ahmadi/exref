const fs = require('fs');
const { join } = require('path');

// async
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function dirs(dir) {
	const result = [];
	const files = await readdir(dir);
	for (file of files) {
		const stats = await stat( join(dir, file) );
		if ( stats.isDirectory() ) result.push(file);
	}
	return result;
}

dirs('path/to/some/dir').then(console.log) // ['dir1', 'dir2', 'dir3']

// sync
function dirs(p) {
	return fs.readdirSync(p).filter( f => fs.statSync( join(p, f) ).isDirectory() );
}

dirs('path/to/some/dir') // ['dir1', 'dir2', 'dir3']
