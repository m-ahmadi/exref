//var fileContents;
try {
	fileContents = fs.readFileSync("foo.bar");
} catch (err) {
	// Here you get the error when the file was not found,
	// but you also get any other error
	
	
	if (err.code === "ENOENT") {
		// ENOENT, no such file or directory "foo.bar"
		console.log("File not found!");
	} else {
		throw err;
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another aproach
if( !fs.existsSync("hasan.json") ) {
	console.log("File not found");
} else {
	// Read the file and do anything you want
	let contents = fs.readFileSync("hasan.txt", "utf-8");
}