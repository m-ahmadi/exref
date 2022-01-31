if (require.main === module) {
	console.log('called directly');
} else {
	console.log('required as a module');
}

// another way:
if (require.main !== module) {
	console.log('required as a module');
	module.exports = mycode;
	return;
}
console.log('called directly');
const cmd = require('commander');