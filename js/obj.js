{a:'foo', b:'bar'}['a'] // access obj prop with square bracket

// length of obj
Object.keys(obj).length // or
var size = 0;
for (let key in obj) size += obj.hasOwnProperty(key) ? 1 : 0;

// add props in loop
var obj = {};
for (let i=0; i<100; i++) obj[x] = 'hi'+i;

// loop through obj and push props that are obj to an array
for (var prop in obj) {
	if ( obj.hasOwnProperty(prop) ) {
		arr.push(obj[prop]);
	}
}

// string variable as key
var obj = {};
var key = 'shotormorgh';
obj[key] = 10;
obj = {key: 10} // same as:
obj = {'shotormorgh': 10} 

// overwrite native method
String.prototype.ourMethod = String.prototype.ourMethod || function() {};
if (typeof String.prototype.ourMethod !== 'function') String.prototype.ourMethod = function(){};


// char limit of keys
/* 
no limit as long as it fits into memory
not specified in specs es5|es6 (only stated that prop accessor must be string)
how browsers handle it:
	rest:   2^27 characters
	safar:  2^30 characters
	max key length === max string length

note:
	strings are immutable symbols and stored at a certain address (aka pointer, reference)
	that address is used for index and not the string itself
*/