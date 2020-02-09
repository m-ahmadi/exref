fs.stat(path, (err, stats) => {})
stats = fs.statSync(path)
// path can't be a dir

// stats:
{
	dev: 2114,
	ino: 48064969,
	mode: 33188,
	nlink: 1,
	uid: 85,
	gid: 100,
	rdev: 0,
	size: 527,
	blksize: 4096,
	blocks: 8,
	atime: Mon, 10 Oct 2011 23:24:11 GMT,
	mtime: Mon, 10 Oct 2011 23:24:11 GMT,
	ctime: Mon, 10 Oct 2011 23:24:11 GMT,
	birthtime: Mon, 10 Oct 2011 23:24:11 GMT
}

// get size with the combination of:
fs.readdir()
fs.stat()