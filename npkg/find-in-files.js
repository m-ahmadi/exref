let findInFiles = require("find-in-files");

// Async
findInFiles.find(pattern, directory, fileFilter)
// Sync
findInFiles.findSync(pattern, directory, fileFilter)

findInFiles.find("I'm Brian, and so's my wife!", '.', '.txt$')
	.then(results => {
		for (let result in results) {
			let res = results[result];
			console.log(`found "${res.matches[0]}" ${res.count} times in "${result}"`);
		}
	});

// Use object to set flags on regular expression. This one will ignore case.
findInFiles.find({
		"term": "I'm Brian, and so's my wife!",
		"flags": "ig"
}, ".", ".txt$")
	.then(results => {
		for (let result in results) {
			let res = results[result];
			console.log(`found "${res.matches[0]}" ${res.count} times in "${result}"`);
	});
