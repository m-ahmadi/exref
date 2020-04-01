const { join } = require('path');

// async
const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir, result=[]) {
	const files = await readdir(dir);
	for (let file of files) {
		file = join(dir, file);
		const stats = await stat(file);
		if ( stats.isDirectory() ) {
			getFiles(file, result);
		} else {
			result.push(file);
		}
	}
	return result;
}

// sync
const { readdirSync, statSync } = require('fs');

function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (let file of files) {
		file = join(dir, file);
		const stats = statSync(file);
		if ( stats.isDirectory() ) {
			getFiles(file, res);
		} else {
			res.push( file.replace(/\\/g, '/') );
		}
	}
	return res;
}