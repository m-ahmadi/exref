// a.js
module.exports = {
	foo: function () {},
	bar: function () {}
};
var zemba = function () {};


// b.js
var foerign = require('./a.js');
debugger;
/*
	foerign {
		foo: function () {},
		bar: function () {}
	}
*/
tools.zemba; // undefined