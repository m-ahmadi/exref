const fs = require('fs');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async
fs.writeFile(file, data[, options], callback)
/*
file:        string|buffer|url|integer filename or file descriptor
data:        string|buffer|typedarray|dataview
options:     object|string
	encoding:  string|null default: 'utf8'
	mode:      integer default: 0o666
	flag:      string default: 'w'. (see support of file system flags)
callback:    function
	err:       error

when file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.
when file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended).
the encoding option is ignored if data is a buffer.
if options is a string, then it specifies the encoding:
it is unsafe to use fs.writefile() multiple times on the same file without waiting for the callback. for this scenario, fs.createwritestream() is recommended.
*/

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
	if (err) { throw err; }
	console.log('The file was saved!');
});

fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);

await fs.writeFile('message.txt', 'Hello Node.js', 'utf8').catch(console.log);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sync
fs.writeFileSync(file, data[, options])
// options:  object | string
// encoding: string | null default: 'utf8'
// if options is a string, then it specifies the encoding

fs.writeFileSync('message.txt', 'Hello sync', 'utf8');
fs.writeFileSync('message.txt', 'Hello asky', 'ascii');
fs.writeFileSync('message.txt', 'Hello sync'); // defaults to 'utf8'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// utf8 bom
// prepend \ufeff to the string
var str = 'hello bom';
fs.writeFileSync('utf8bom.txt', '\ufeff'+str, 'utf8');


