const fs = require('fs').promises;

fs.readFile(path, ?options)
fs.writeFile(file, data, ?options)
fs.access(path, ?mode)
fs.readdir(path, ?options)
fs.copyFile(src, dest, ?flags)
fs.rename(oldPath, newPath)
fs.mkdir(path, ?options)
fs.rmdir(path)
fs.stat(path, ?options)
fs.unlink(path)


fs.appendFile(path, data, ?options)
fs.chmod(path, mode)
fs.chown(path, uid, gid)
fs.lchmod(path, mode)
fs.lchown(path, uid, gid)
fs.link(existingPath, newPath)
fs.lstat(path, ?options)
fs.mkdtemp(prefix, ?options)
fs.open(path, flags, ?mode)
fs.readlink(path, ?options)
fs.realpath(path, ?options)
fs.symlink(target, path, ?type)
fs.truncate(path, ?len)
fs.utimes(path, atime, mtime)

