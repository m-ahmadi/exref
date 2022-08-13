/*
	arguments is an array-like object
	use Array.prototype.slice on it, and it will convert it into a standard JavaScript array
*/
function ali() {
	console.log( arguments );
	console.log( typeof arguments );
	console.log( isObject(arguments) );
	console.log( isArray(arguments) );
	
	var args = Array.prototype.slice.call(arguments);
	console.log( isArray(args) );
}
/*
	converting array-like objects to arrays via slice() unfortunately deson't work reliably across browsers
	eg IE can't convert node lists this way
	for a general function which works with all array-like objects, manually loop over the entries:
*/
function getArgs(a) {
    var args = new Array(a.length),
		i;
    for (i=0; i<args.length; i+=1) {
		args[i] = a[i];
    }
	return args;
}
function al() {
	var args = getArgs(arguments);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function isObject(v) {
	return (
		v &&
		typeof v === 'object' &&
		typeof v !== null &&
		Object.prototype.toString.call(v) === "[object Object]"
	) ? true : false;
}
function isArray(v) {
	if ( typeof Array.isArray === 'function' ) {
		return Array.isArray(v);
	}
	return (
		v &&
		typeof v === 'object' &&
		typeof v.length === 'number' &&
		typeof v.splice === 'function' &&
		!v.propertyIsEnumerable('length') &&
		Object.prototype.toString.call(v) === "[object Array]"
	) ? true : false;
}