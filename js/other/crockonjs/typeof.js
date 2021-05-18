// The "typeof" prefix operator returns a string identifying the type of a value.
/*
object     ===  'object'
function   ===  'function'
array      ===  'object'
number     ===  'number'
string     ===  'string'
boolean    ===  'boolean'
null       ===  'object'
undefined  ===  'undefined'
*/
typeof {};             // 'object'
typeof function(){};   // 'function'
typeof [];             // 'object'
typeof 00;             // 'number'
typeof '';             // 'string'
typeof true;           // 'boolean'
typeof null;           // 'object'
typeof undefined;      // 'undefined'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Array.isArray **/
alert(Array.isArray([]);); // true
if (typeof Array.isArray !== 'function') {
	Array.isArray = function (value) {
		return Array.prototype.toString.apply(value) === 'object Array';
	};
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@