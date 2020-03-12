fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)

fs.rename('oldFile.txt', 'newFile.txt', err => {
	if (err) throw err;
	console.log('done');
});