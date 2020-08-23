const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const access = promisify(fs.access);
const stat = promisify(fs.stat);

(async function () {
	// fs.writeFile()
	await fs.writeFile("file.txt", "salam");           // creates the file but: DeprecationWarning: Calling an asynchronous function without callback is deprecated.
	await writeFile("file.txt", "salam");              // no error. writes the file.
	
	// fs.readFile()
	const res = await fs.readFile("file.txt", "utf8"); // does not read the file and: DeprecationWarning: Calling an asynchronous function without callback is deprecated.
	const res = await readFile("file.txt", "utf8");    // no error. reads the file.
	console.log(res);
	
	// fs.access()
	await fs.access("file.txt");                       // TypeError: "callback" argument must be a function
	await access("file.txt");                          // no error
	
	await access("file.txt").catch(async err => {
		await fs.writeFile("file.txt", "");
	});
	console.log("at this point: file exists!")
	
	// fs.stats()
	const stats = await stat('.');
	console.log( stats.isDirectory() )
})()