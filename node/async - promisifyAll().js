const { promisify } = require('util');

function promisifyAll(module) {
	const obj = {};
	Object.keys(module).forEach(k => {
		if (typeof module[k+'Sync'] === 'function') {
			obj[k] = promisify( module[k] );
		}
	});
	return obj;
}