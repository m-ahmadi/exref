/*
	CLI:
	
	concat -o output.css ./1.css ./2.css ./3.css
*/


const concat = require('concat');
 
concat([file1, file2, file3]).then(result => console.log(result))
 
// or 
concat([file1, file2, file3], outputFile)