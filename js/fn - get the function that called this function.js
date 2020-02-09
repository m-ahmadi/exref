/*
	only use this for debuging
	arguments.callee is removed from ES5 strict mode
	avoid using it in production
	
	Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
*/

function ali() {
	console.log( arguments.callee.caller.name );		// gets caller name (good for named fns)
	console.log( arguments.callee.caller.toString() );	// gets caller body (good for anonymous fns)
}

function hasan() {
	ali();
}
hasan(); // hasan