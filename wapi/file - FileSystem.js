/* DEPRECATED
https://developer.mozilla.org/en-US/docs/Web/API/FileSystem
this api will not grant you access to user filesystem
it gives a "virtual drive" within browser sandbox
to gain access to user filesystem, user needs to be invoked (for example by installing an extension) */

webkitRequestFileSystem(type=Window.PERSISTENT | Window.TEMPORARY, size=0, successCallback(FileSystem|DOMFileSystem)=>, ?errorCallback)
webkitRequestFileSystem(window.PERSISTENT, 1024*1024, function (FileSystem) {
	FileSystem.name
	FileSystem.root
		DirectoryEntry.fullPath
		DirectoryEntry.isDirectory
		DirectoryEntry.isFiles
		DirectoryEntry.name
		DirectoryEntry.filesystem
})

FileSystemFileHandle.isFile
FileSystemFileHandle.isDirectory
FileSystemFileHandle.getFile()
FileSystemFileHandle.isSameEntry(handle2): boolean
FileSystemFileHandle.createWritable(): FileSystemWritableFileStream
FileSystemFileHandle.createWriter():	 FileSystemWriter
FileSystemFileHandle.requestPermission(options={writable:false,...}): 'granted'| 'prompt' | ''
FileSystemFileHandle.queryPermission(options={writable:false,...}):   'granted'| 'prompt' | ''

FileSystemDirectoryHandle.getEntries(): [entry, ...] // entry.name entry.isFile

FileSystemWritableFileStream // essentially a WritableStream
FileSystemWritableFileStream.write(contents=''|BufferSource|Blob)
FileSystemWritableFileStream.close()

FileSystemWriter.write()
FileSystemWriter.close()

// allow user to select multiple files, or directories, or different file types
var options = {
	type: 'openFile' 'open-file' | 'save-file' | 'open-directory',
	accepts: [{
		description: 'Text file',
		extensions: ['txt'],
		mimeTypes: ['text/plain'],
	}],
};

var handle: FileSystemFileHandle;

// open file
something.addEventListener('click', async function () {
	fileHandle = await window.chooseFileSystemEntries(options); // only allowed in response to user action (secure context)
	var file = await fileHandle.getFile(); // returned obj only readable until file on disk unchanged (if changed must call getFile() again)
	var contents = await file.text();
	console.log(contents);
});

// open a directory and enumerate its content
something.addEventListener('click', async function () {
	const handle = await window.chooseFileSystemEntries({type: 'open-directory'});
	const entries = await handle.getEntries();
	for await (const entry of entries) {
		const kind = entry.isFile ? 'File' : 'Directory';
		console.log(kind, entry.name);
	}
});

// write to file system
(async function () {
	const writable = await fileHandle.createWritable(); // permission popup (if not already granted)
	await writable.write(contents);											// write file content to stream
	await writable.close();															// close file and write content to disk
	// or by piping:
	const response = await fetch(url);		// make http request for content
	await response.body.pipeTo(writable); // stream the response into file
	// no need to close (pipeTo() closes destination pipe by default)
	
	
	// in chrome 82 and earlier
	const writer = await fileHandle.createWriter();
	await writer.write(0, contents);
	await writer.close();
})()


// store file handles in IndexedDB
async function verifyPermission(fileHandle, withWrite) {
	const opts = {};
	if (withWrite) {
		opts.writable = true;
	}
	if (await fileHandle.queryPermission(opts) === 'granted') { // we already have permission
		return true;
	}
	if (await fileHandle.requestPermission(opts) === 'granted') { // we don't have permission, so we request it
		return true;
	}
	return false; // user didn't grant permission
}

// util
async function getNewFileHandle() {
	const opts = {
		type: 'save-file',
		accepts: [{
			description: 'Text file',
			extensions: ['txt'],
			mimeTypes: ['text/plain'],
		}],
	};
	const handle = await window.chooseFileSystemEntries(opts);
	return handle;
}