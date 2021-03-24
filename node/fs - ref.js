const fs = require('fs')

p1 = '' | Buffer | URL
p2 = '' | Buffer | URL | int
c1 = (err) =>
flag = 'a | ax | a+ | ax+ | as | as+ | r | r+ | rs+ | w | wx | w+ | wx+'

fs.access(path=p1, ?mode=fs.constants.fs.F_OK|int, callback=c1)
fs.appendFile(path=p2, data=''|Buffer, ?options=''|{}, callback=c1)
fs.chmod(path=p1, mode=''|int, callback=c1)
fs.chown(path=p1, uid=int, gid=int, callback=c1)
fs.close(fd=int, ?callback=c1)
fs.copyFile(src=p1, dest=p1, ?mode=0|int, callback=c1) // if 3rd arg is number, then it specifies flags
fs.createReadStream(path=p1, ?options=''|{
	flags:         'r',
	encoding:      '',
	fd:            null | 0,
	mode:          0o666,
	autoClose:     true
	emitClose:     false,
	start:         0,
	end:           Infinity,
	highWaterMark: 64 * 1024,
	fs:            null | {},
}): fs.ReadStream
fs.createWriteStream(path=p1, ?options=''|{
	flags:         'w',
	encoding:      'utf8',
	fd:            null | 0,
	mode:          0o666,
	autoClose:     true
	emitClose:     false,
	start:         0,
	fs:            null | {},
}): fs.WriteStream
fs.fchmod(fd=int, mode=''|int, callback=c1)
fs.fchown(fd=int, uid=int, gid=int, callback=c1)
fs.fdatasync(fd=int, callback=c1)
fs.fstat(fd=int, ?options={}, callback=(err,stats)=>)
fs.fsync(fd=int, callback=c1)
fs.ftruncate(fd=int, ?len=0|int, callback=c1)
fs.futimes(fd=int, atime=0|''|Date, mtime=0|''|Date, callback=c1)
fs.lchmod(path=p1, mode=int, callback=c1)
fs.lchown(path=p1, uid=int, gid==int, callback=c1)
fs.lutimes(path=p1, atime=0|''|Date, mtime=0|''|Date, callback=c1)
fs.link(existingPath=p1, newPath=p1, callback=c1)
fs.lstat(path=p1, ?options={}, callback=(err,stats)=>)
fs.mkdir(path=p1, ?options=int|{}, callback=c1)
fs.mkdtemp(prefix='', ?options=''|{}, callback=(err,directory)=>)
fs.open(path=p1, ?flags='r'|0, ?mode=''|int, callback=(err,fd=int)=>)
fs.opendir(path=p1, ?options={}, callback=(err,dir)=>)
fs.read(fd=int, buffer=Buffer|TypedArray|DataView, offset=int, length=int, position=int|bigint, callback=(err,bytesRead=int,buffer)=>)
fs.read(fd=int, ?options={}, callback=(err,bytesRead=int,buffer)=>)
fs.readdir(path=p1, ?options=''|{}, callback=(err,files)=>)
fs.readFile(path=p2, ?options='utf8'|{encoding:null|'', flag:'r', signal:AbortSignal}, callback=(err,data=''|Buffer)=>)
fs.readlink(path=p1, ?options''|{}, callback=(err,linkString=''|Buffer)=>)
fs.readv(fd=int, buffers=[ArrayBufferView,...], ?position=int, callback=(err,bytesRead=int,buffers)=>)
fs.realpath(path=p1, ?options=''|{}, callback=(err,resolvedPath)=>)
fs.realpath.native(path=p1, ?options=''|{}, callback=(err,resolvedPath)=>)
fs.rename(oldPath=p1, newPath=p1, callback=c1)
fs.rmdir(path=p1, ?options={}, callback=c1)
fs.rm(path=p1, ?options={}, callback=c1)
fs.stat(path=p1, ?options={}, callback=(err,stats)=>)
fs.symlink(target=p1, path=p1, ?type='file', callback=c1)
fs.truncate(path=p1, ?len=0|int, callback=c1)
fs.unlink(path=p1, callback=c1)
fs.unwatchFile(filename=p1, ?listener=()=>)
fs.utimes(path=p1, atime=0|''|Date, mtime=0|''|Date, callback=c1)
fs.watch(filename=p1, ?options='utf8'|{
	persistent: true,
	recursive:  false,
	encoding:   'utf8',
	signal:     AbortSignal
}, ?listener=(eventType='rename|change',filename=''|Buffer)=>): fs.FSWatcher
fs.watchFile(filename=p1, ?options={
	bigint:     false,
	persistent: true,
	interval:   5007
}, listener=(current=Stats,previous=Stats)=>): fs.StatWatcher
fs.write(fd=int, buffer=Buffer|TypedArray|DataView|''|{}, ?offset=int, ?length=int, ?position=int, callback=(err,bytesWritten=int,buffer)=>)
fs.write(fd=int, string=''|{}, ?position=int, ?encoding='utf8', callback=(err,written=int,string='')=>)
fs.writeFile(file=p2, data=''|Buffer|TypedArray|DataView|{}, ?options=''|{}, callback=c1)
fs.writev(fd=int, buffers=[ArrayBufferView,...], ?position=int, callback=(err,bytesWritten=int,buffers)=>)




fs.readFileSync(path, ?options='utf8'|{encoding,flag}): ''|Buffer