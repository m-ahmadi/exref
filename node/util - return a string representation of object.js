var util = require('util');

console.log(
	util.inspect(myObject, {
		showHidden: false,
		depth: null
	})
);

console.log( util.inspect(myObject, false, null) );