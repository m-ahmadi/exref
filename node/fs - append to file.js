var fs = require('fs');

// Async
fs.appendFile('message.txt', 'data to append', err => {
	if (err) throw err;
	console.log('Saved!');
});

// Sync
fs.appendFileSync('message.txt', 'data to append');