'a'   // open file for appending. the file is created if it does not exist.
'ax'  // like 'a' but fails if the path exists.
'a+'  // open file for reading and appending. the file is created if it does not exist.
'ax+' // like 'a+' but fails if the path exists.
'as'  // open file for appending in synchronous mode. the file is created if it does not exist.
'as+' // open file for reading and appending in synchronous mode. the file is created if it does not exist.
'r'   // open file for reading. An exception occurs if the file does not exist.
'r+'  // open file for reading and writing. an exception occurs if the file does not exist.

'rs+'
// open file for reading and writing in synchronous mode. instructs the operating system to bypass the local file system cache.
// this is primarily useful for opening files on nfs mounts as it allows skipping the potentially stale local cache.
// it has a very real impact on i/o performance so using this flag is not recommended unless it is needed.
// this doesn't turn fs.open() or fsPromises.open() into a synchronous blocking call. If synchronous operation is desired, something like fs.openSync() should be used.

'w'   // open file for writing. the file is created (if it does not exist) or truncated (if it exists).
'wx'  // like 'w' but fails if the path exists.
'w+'  // open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
'wx+' // like 'w+' but fails if the path exists.