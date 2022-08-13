// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

new Error()          // can be used as a base object for user-defined exceptions
new EvalError()      // indicates an error regarding the global eval() function (non-standard)
new InternalError()  // indicates an error that occurred internally in the JavaScript engine
new RangeError()     // indicates an error when a value is not in the set or range of allowed values
new SyntaxError()    // thrown when JavaScript engine encounters tokens/token order that does not conform to language's syntax when parsing code
new ReferenceError() // represents an error when a non-existent variable is referenced
new TypeError()      // represents an error when a value is not of the expected type
new URIError()       // represents an error when a global URI handling function was used in a wrong way

// statements after throw won't execute and control is passed to first catch block if any otherwise program terminates
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// simple values (no trace captured about where error happened)
throw 42
throw 'hi'
throw new Date()
throw true
throw {foo:'bar'}
throw [1,2,3]
try{ throw 42 }catch(e){console.log(e)} // 42 (nothing captured)

// using constructors (captures some stuff about the place where error happened)
throw new Error('hi')
throw Error('hi') // same as above (due to native guarded constructor, like Number() for example)
try{ throw Error(42) }catch(e){console.log(e)} // Error: 42 (somethings captured)

// show the stack trace
var err = new Error('Message!');
console.log(err.stack)

// throw an object
function UserException(message) {
	this.name = 'UserException';
	this.message = message;
}
try {
	throw new UserException('InvalidMonthNo');
} catch (e) {
	e.message // InvalidMonthNo 
	e.name    // UserException
}

// user-defined error
function MyError(message) {
	this.name = 'MyError';
	this.message = message;
	this.stack = new Error().stack;
}
MyError.prototype = new Error;

// user-defined error - es6
class MyError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}
