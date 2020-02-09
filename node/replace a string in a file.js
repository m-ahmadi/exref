const fs = require("fs");

// Async:
fs.readFile(someFile, "utf8", (err, data) => {
	if (err) {
		return console.log(err);
	}
	let result = data.replace(/string to be replaced/g, "replacement");

	fs.writeFile(someFile, result, "utf8", err => {
		if (err)
			return console.log(err);
	});
});

// Sync:
let c = fs.readFileSync(filePath, "utf-8");
let result = c.replace(/string to be replaced/g, "replacement");
fs.writeFileSync(filePath, result);