const { join } = require('path');

// async
const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir, result=[]) {
	const files = await readdir(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = await stat(path);
		if ( stats.isDirectory() ) {
			getFiles(path, result);
		} else {
			result.push(file); // or path
		}
	}
	return result;
}

// sync
const { readdirSync, statSync } = require('fs');

function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( file.replace(/\\/g, '/') );
		}
	}
	return res;
}