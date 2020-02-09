const fs = require('fs');

fs.stat('some/path', (err, stats) => {
	stats.isDirectory()
	stats.isFile()
	stats.isSocket()
	stats.isSymbolicLink()
});

fs.stat('some/path', { bigint: true }, (err, stats) => {
	typeof stats.size // 'bigint'
});

fs.statSync('some/path').isDirectory()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
fs.stat(path[, options], callback)/*
path:      string|Buffer|url
options:   object
	bigint:  boolean. default: false. whether numeric values in returned fs.Stats object should be bigint.
callback:  function
	err:     error
	stats:   fs.Stats
*/
fs.lstat(path[, options], callback)
fs.fstat(fd[, options], callback) 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* stat vs lstat vs fstat
stat
	follows symlinks.
	when given a path that is a symlink, it returns the stat of the target of the symlink.

lstat
	doesn't follow symlinks.
	when given a path that is a symlink it returns the stat of the symlink and not its target.
	in other words:
	identical to stat, except if pathname is a symlink, it returns information about the link itself, not the file that it refers to.
fstat
	identical to stat, except it takes a file descriptor (fd) rather than a path.
*/

/*
	symlink / symbolic link in Unix
	
	A symbolic link, also termed a soft link,
	- is a special kind of file that points to another file,
	- much like a shortcut in Windows or a Macintosh alias.
	Unlike a hard link, a symbolic link does not contain the data in the target file.
	It simply points to another entry somewhere in the file system.
	This difference gives symbolic links certain qualities that hard links do not have,
	- such as the ability to link to directories, or to files on remote computers networked through NFS.
	Also, when you delete a target file, symbolic links to that file become unusable,
	- whereas hard links preserve the contents of the file.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@