// instances of Error object are thrown when runtime errors occur
new Error() // can be used as a base object for user-defined exceptions

// standard built-in error types:
new EvalError()      // indicates an error regarding the global eval() function (non-standard)
new InternalError()  // indicates an error that occurred internally in the JavaScript engine
new RangeError()     // indicates an error when a value is not in the set or range of allowed values
new SyntaxError()    // thrown when JavaScript engine encounters tokens/token order that does not conform to language's syntax when parsing code
new ReferenceError() // represents an error when a non-existent variable is referenced
new TypeError()      // represents an error when a value is not of the expected type
new URIError()       // represents an error when a global URI handling function was used in a wrong way


// You do not need to put a "return" statement after "throw",
// the return line will never be reached as throwing an exception immediately hands control back to the caller.

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	show the stack trace
var err = new Error('Message!');
throw err;
console.log(err.stack); // IE10+ and Error.prototype.stack is a Non-standard feature 
// Use dev-tools/firebug isntead.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// throw an object
function UserException(message) {
	this.message = message;
	this.name = 'UserException';
}
try {
	throw new UserException('InvalidMonthNo');
} catch (e) {
	e.message // InvalidMonthNo 
	e.name    // UserException
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@