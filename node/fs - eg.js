// append to file
await fs.promises.appendFile('message.txt', 'data to append')
fs.appendFileSync('message.txt', 'data to append');



// check if file or dir exists
await fs.promises.access('file.txt').catch(async () => await fs.writeFile('file.txt', ''))
await fs.promises.access('file.txt', fs.F_OK).catch(err =>) // exists?
await fs.promises.access('file.txt', fs.R_OK).catch(err =>) // exists?
await fs.promises.access('file.txt', fs.W_OK).catch(err =>) // writable?
var exists = fs.existsSync(path)
// only if open|readFile|writeFile called before:
var stats = await fs.promises.stat('path/to/file/or/dir')
stats.isDirectory()
stats.isFile()



// read file
var data = await fs.promises.readFile('file.txt', 'utf8')
var data = await fs.promises.readFile('file.txt', {encoding:'ascii', flag:'w+'})
var data = fs.readFileSync('temp.txt', 'utf8')



// copy file 
await fs.promises.copyFile('src.txt', 'dest.txt')
await fs.promises.copyFile('src.txt', 'dest.txt', fs.COPYFILE_EXCL)

// using streams
fs.createReadStream('source.txt').pipe(
	fs.createWriteStream('destination.txt')
)



// create dir
await fs.promises.mkdir('mydir')
fs.mkdir('some/path', err => /*ENOENT*/)                // no such file or directory: some
await fs.promises.mkdir('dir1/dir2', {recursive: true}) // create necessary dirs
await fs.promises.mkdir('/', {recursive: true}})        // windows error on root dirs (EPERM: operation not permitted)
if ( !fs.existsSync('foo') ) fs.mkdirSync('foo')        // sync



// delete file
await fs.promises.unlink('file.txt')
fs.unlinkSync('file.txt')



// get size of file
var stats = await fs.promises.stat('file.txt')
var stats = fs.statSync('file.txt')
stats.size // bytes
var stats = await fs.promises.stat('file.txt', {bigint: true})
typeof stats.size // 'bigint'



// get info about file or dir
var stats = await fs.promises.stat('some/path')
stats.isDirectory()
stats.isFile()
stats.isSocket()
stats.isSymbolicLink()
fs.statSync('some/path').isDirectory()
fs.lstatSync('some/path').isDirectory() // do not follow symlinks



// move or rename file
await fs.promises.rename('oldFile.txt', 'newFile.txt')
fs.renameSync('oldFile.txt', 'newFile.txt')



// read from stdin (windows issue: https://github.com/nodejs/node/issues/35997)
var buffer = fs.readFileSync(0) // STDIN_FILENO = 0
fs.readFileSync(0).toString() // or:
fs.readFileSync(0, 'utf8')

// read from stdin (better, but still not sure)
let stdin = await new Promise(resolve => {
	const rs = process.stdin;
	let str = '';
	if (process.stdin.isTTY) resolve(str); // called without pipe: https://nodejs.org/api/process.html#process_a_note_on_process_i_o
	rs.setEncoding('utf8');
	rs.on('readable', () => {
		let chunk;
		while ((chunk = rs.read()) !== null) str += chunk;
	});
	rs.on('end', () => resolve(str));
});



// print progress (write to stdout)
process.stdout.write('\r' + 'new info');
for (let i of [...Array(100).keys()]) process.stdout.write('\r'+(i+1)+'/'+100), await new Promise(r=>setTimeout(r,500))



// read contents of directory
var files = await fs.promises.readdir('mydir') // array of filenames  '.' and '..'
var files = await fs.promises.readdir('mydir', {withFileTypes: true})
files[0] instanceof fs.Dirent // true



// delete dir
await fs.promises.rmdir('mydir')                                    // path must be an empty folder
await fs.promises.rmdir('mydir', {recursive: true}).catch(err => }) // non-empty folder, but subdirs must be empty (ENOTEMPTY: subdir not empty)
fs.rmdirSync('mydir')
fs.rmdirSync('mydir', {recursive: true})



// write file
await fs.promises.writeFile('message.txt', 'Hello')
await fs.promises.writeFile('file.txt', 'Hello', 'ascii').catch(err =>)
fs.writeFileSync('file.txt', 'Hello', 'utf8')
fs.writeFileSync('file.txt', 'Hello', 'ascii')
fs.writeFileSync('file.txt', 'Hello')                         // defaults to 'utf8'
fs.writeFileSync('utf8bom.txt', '\ufeff'+'hello bom', 'utf8') // utf8 bom (prepend \ufeff to the string)
