const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const access   = promisify(fs.access);
const mkdir    = promisify(fs.mkdir);
const stat     = promisify(fs.stat);
const unlink   = promisify(fs.unlink);
const readdir  = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
const rmdir    = promisify(fs.rmdir);
//const rename = promisify(fs.rename);

// move dir and all files within one level
// deletes newPath if it's an existing file
async function moveDir(oldPath, newPath) {
	await access(newPath).catch(async err => {
		await mkdir(newPath);
	});
	const stats = await stat(newPath);
	if ( !stats.isDirectory() ) {
		await unlink(newPath);
		await mkdir(newPath);
	}
	const files = await readdir(oldPath);
	for (const file of files) {
		const ferom = join(oldPath, file);
		const to = join(newPath, file);
	//await rename(ferom, to); // (not capable of moving across drives/partitions)
		await copyFile(ferom, to);
		await unlink(ferom);
	}
	await rmdir(oldPath);
}

moveDir('dir1', 'dir2')
moveDir('dir1', 'E:\dir2')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// recursive
async function moveDir(oldPath, newPath) {
	await access(newPath).catch(async err => {
		await mkdir(newPath);
	});
	const stats = await stat(newPath);
	if ( !stats.isDirectory() ) {
		await unlink(newPath);
		await mkdir(newPath);
	}
	const files = await readdir(oldPath);
	for (const file of files) {
		const ferom = join(oldPath, file);
		const to = join(newPath, file);
		const stats = await stat(ferom);
		if ( stats.isDirectory() ) {
			await mkdir(to);
			const files = await readdir(ferom);
			if (files.length) await moveDir(ferom, to);
		} else {
			await copyFile(ferom, to);
			await unlink(ferom);
		}
	}
	await rmdir(oldPath);
}

// sync
function moveDirSync(src, dest) {
	if ( !fs.existsSync(dest) ) fs.mkdirSync(dest);
	if ( !fs.statSync(dest).isDirectory() ) {
		fs.unlinkSync(dest);
		fs.mkdirSync(dest);
	}
	for (const file of fs.readdirSync(src)) {
		const ferom = path.join(src, file);
		const to = path.join(dest, file);
		if ( fs.statSync(ferom).isDirectory() ) {
			fs.mkdirSync(to);
			if (fs.readdirSync(ferom).length) moveDirSync(ferom, to);
		} else {
			fs.copyFileSync(ferom, to);
			fs.unlinkSync(ferom);
		}
	}
	fs.rmdirSync(src);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@