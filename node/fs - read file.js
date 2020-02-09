const fs = require("fs");

//----------------------------------------------------------------------------------------------------------
//	async

fs.readFile(path[, options], callback)
	
/*
asynchronously reads the entire contents of a file.
callback is passed two arguments (err, data), where data is the contents of the file.
if no encoding is specified, raw buffer is returned.
if options is a string, then it specifies the encoding.
any specified file descriptor has to support reading.
if a file descriptor is specified as the file, it will not be closed automatically.
	
path      string | buffer | url | integer filename or file descriptor
options   object | string
encoding  string | null default: null
flag      string default: 'r'
callback  function
	err     error
	data    string | buffer
*/
fs.readFile("file.txt", function (err, data) {
	if (err) throw err;
	console.log(data);
});

fs.readFile("file.txt", "utf8", callback);

fs.readFile("file.txt", { encoding: "utf8", flag: "r" }, callback);

let content = await fs.readFile("file.txt", "utf8");
//----------------------------------------------------------------------------------------------------------
//	sync
let content = fs.readFileSync(file[, options])
/*
	Synchronous version of fs.readFile. Returns the contents of the file.
	If the encoding option is specified then this function returns a string, otherwise it returns a buffer.
*/
let content = fs.readFileSync("file.txt", {
	encoding: "utf-8", // Default: null
	flag: "r"          // Default: "r"
});

// If options is a string, then it specifies the encoding:
let content = fs.readFileSync("temp.txt", "utf8");