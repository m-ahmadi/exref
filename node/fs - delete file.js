const fs = require('fs');

fs.unlink('/tmp/hello', err => {
	if (err) throw err;
	console.log('successfully deleted /tmp/hello');
});

fs.unlinkSync('/tmp/hello');
console.log('successfully deleted /tmp/hello');