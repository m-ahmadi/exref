const fs = require('fs').promises

var result = await fs.METHOD().catch(err =>)

p1 = '' | Buffer | URL
p2 = '' | Buffer | URL | FileHandle

fs.access(path=p1, ?mode=fs.F_OK|int)
fs.appendFile(path=p2, data=''|Buffer, ?options=''|{})
fs.chmod(path=p1, mode=''|int)
fs.chown(path=p1, uid=int, gid=int)
fs.copyFile(src=p1, dest=p1, ?mode=0|int) // dest overwritten if already exists
fs.lchmod(path=p1, mode=int)
fs.lchown(path=p1, uid=int, gid==int)
fs.lutimes(path=p1, atime=0|''|Date, mtime=0|''|Date)
fs.link(existingPath=p1, newPath=p1)
fs.lstat(path=p1, ?options={})
fs.mkdir(path=p1, ?options=int|{recursive: false, mode: 0o777|int}): undefined|'' // err on:  path exists && recursive=false, windows root dir (even if recursive=true)
fs.mkdtemp(prefix='', ?options=''|{})
fs.open(path=p1, ?flags='r'|0, ?mode=''|int)
fs.opendir(path=p1, ?options={})
fs.readdir(path=p1, ?options='utf8'|{encoding:'utf8', withFileType:false}): [''|Buffer|fs.Dirnet, ...]
fs.readFile(path=p2, ?options='utf8'|{}): ''|Buffer
fs.readlink(path=p1, ?options''|{})
fs.realpath(path=p1, ?options=''|{})
fs.rename(oldPath=p1, newPath=p1) // newPath overwritten if already exists, error if newPath is dir
fs.rmdir(path=p1, ?options={emfileWait:1000, maxBusyTries:3, recursive:false}) // if path == file, windows=ENOENT and posix=ENOTDIR
fs.rm(path=p1, ?options={})
fs.stat(path=p1, ?options={bigint:false}): fs.Stats
fs.symlink(target=p1, path=p1, ?type='file')
fs.truncate(path=p1, ?len=0|int)
fs.unlink(path=p1) // path cannot be dir
fs.utimes(path=p1, atime=0|''|Date, mtime=0|''|Date)
fs.watch(filename=p1, ?options=''|{})
fs.writeFile(file=p2, data=''|Buffer|Uint8Array|{}, ?options=''|{}) // encoding ignored if data=Buffer


fs.constants.CONSTANT | fs.CONSTANT
fs.access()
	fs.F_OK	// exists
	fs.R_OK	// readable
	fs.W_OK	// writable
	fs.X_OK	// executable (no effect on windows, behaves like fs.constants.F_OK)
fs.copyFile()
	COPYFILE_EXCL          // copy operation fails if dest already exists
	COPYFILE_FICLONE       // creates copy-on-write reflink | fallback if no os support
	COPYFILE_FICLONE_FORCE // creates copy-on-write reflink | fail if no os support