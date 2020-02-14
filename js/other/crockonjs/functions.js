/*
	Function is the key idea in JavaScript, it's what makes it so good and so powerful.
	In other languages you've got lots of things, you've got: methods, classes, constructors, modules and more,
	in JavaScript there's just function, and function does all of those things and more.
	that's not a deficiency, that's actually a wonderful thing, having one thing that can do a lot and do it brilliantly at scale.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    function expression (function literal)    **/
/*
	function
	optional name
	parameters
		Wrapped in parentheses, Zero or more names, Separated by , (comma)
	body
		Wrapped in curly braces, Zero or more statements
	
	Here's what a function is:
	a function is the word "function",
	it optionally has a name which can be used to allow it to call itself,
	it can have a set of parameters which are wrapped in parentheses, containing zero or more names, which are separated by commas,
	it can have a body which is wrapped in curly braces, containing zero or more statements.
	A function expression like that produces an instance of a function object.
	Function objects are first class, which means:
		They can be passed as an argument to another function.
		They can be returned as a return value from a function.
		They can be assigned to a variable.
		They can be be stored in an object or array.
	So anything you can do with any other kind of value in this language, you can do with a function.
	So a function expression is like an object literal in that it produces a value,
	except in this case it produces something that inherits from "Function.prototype",
	it may seem kind of strange that a function can inherit methods from something else, but it can,
	so in this language functions have methods.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    var statement    **/
/*
	var statement declares and initializes variables within a function.
	Because JavaScript is not a strongly type language,
	you don't specify types in the var statement,
	you just give a name for the variable.
	Any variable can contain any value that's expressible in the language.
	A variable declared anywhere within a function is visible everywhere within the function, we don't respect block scope.
	var statement gets split into two parts:
	The declaration part gets hoisted to the top of the function, and is initialized with "undefined".
	Back at the place where the original "var" statement was, it gets turned into an assignment statement, so the "var" gets removed.
*/
var myVar = 0, myOtherVar;
// Expands into:
var myVar = undefined,
	myOtherVar = undefined;
myVar = 0;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    function statement    **/
/*
	function
	mandatory name
	parameters
		Wrapped in parentheses
		Zero or more names
		Separated by , (comma)
	body
		Wrapped in curly braces
		Zero or more statements
	
	Unfortunately the function statement looks exactly like a function expression.
	The only differences is that the name instead of being optional is now mandatory,
	but in all other respects it looks exactly the same, and it's confusing to have both.
	Why do we have both?
	function statement was the older thing,
	and the function expression which is really the more useful form, was added to the language later.
	What the function statement does:
	It expands into a var statement, which creates a variable, and assigns a function value to it,
	and that expansion, because it's actually a var statement, splits into 2 things,
	except unlike the ordinary var statement, both pieces are hoisted to the top of the function,
	so things are not necessarily declared in the order that you think they are.
*/
function foo() {}
// expands to:
var foo  = function foo() {};
// expands to:
var foo = undefined;
foo = function foo() {};
// The assignment of the function is also hoisted
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    function expression v function statement    **/
/*
	It's confusing having both function expressions and function statements,
	so how do you know which is which when you're looking at it? The rule is:
	if the first token of a statement is "function",
	then it's a function statement,
	otherwise it's a function expression.
	Generally function expressions are easier to reason about:
	You can't put a function statement inside of an if statement, (because of the hoisting)
	you might want to have a different function being defined if you take the else branch or the then branch,
	but hoisting doesn't look at branching and it happens before we know the result of the if,
	so the language definition says you can't do that,
	turns out every browser lets you do that anyway,
	but because the language definition doesn't tell you what it supposed to do, they all do something different,
	so that's one of the edge cases that you want to stay away from.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    Scope    **/
/*
	Block scope v function scope:
	In this language we have function scope, in most other languages that have c syntax, we have block scope,
	because of the way "var"s get hoisted block scope doesn't work in this language,
	in JavaScript blocks do not have scope,
	scope means that in another language such as Java, if you declare a variable inside of a block (inside of curly braces),
	it's visible only inside of the curly braces and not outside, but that doesn't happen in JavaScript because of hoisting,
	the variable declaration gets pulled out of the if statement and move to the top of the function,
	so the variables will be visible everywhere within the function.
	Only functions in this language have scope,
	if you declare a variable in a function, that variable is not visible outside of the function,
	but still visible everywhere within the function, if you're coming from other languages, this can be confusing.
*/
function assure_positive(matrix, n) {
	for (var i = 0; i < n; i += 1) {
		var row = matrix[i];
		for (var i = 0; i < row.length; i += 1) {
			if (row[i] < 0) {
				throw new Error('Negative');
			}
		}
	}
}
/*
	A function like this will work in most other languages, and will fail in JavaScript without an error,
	what you'll find is that it will run for ever, and that's because:
	the programmer thinks he's created two i variables, but in fact there's only one i variable,
	so the inner loop constantly resetting the i value, and the outer loop will never finish.
	In JavaScript you can't be depending on block scope.
	Because of hoisting and the way variable statements and function statements work, it is recommended to:
	Declare all variables at the top of the function.
	Declare all functions before you call them.
	In other languages the common style is to declare variables near the sight of their first use,
	and in languages which have block scope, that's good advise, but it's not recommended in JavaScript.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    Return statement    **/
/*
	return statement allows a function to return early, and also it indicates what value the function should be returning.
	There's two forms of it: there's one that takes an expression, and one that does not,
	if there's no expression, then the return value is "undefined",
	turns out every function in JavaScript returns a value, and
	if you don't explicitly say what the value is, it will return the "undefined" value,
	unless it was called as a constructor, in which case it will return the new object that you're constructing,
	default return value for constructors is "this".
	You cannot put a line-break between the word "return" and the expression, because:
	semicolon insertion will go in, and turn it into a statement that returns undefined.
*/
return expression;
// or
return;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    Two pseudo parameters    **/
/*
	There are two pseudo parameters that every function can receive:
	One is called "arguments", and the other has the unfortunate name of "this"
	arguments:
	When a function is invoked, in addition to its parameter, it also gets a special parameter called "arguments".
	It contains all of the arguments that were actually specified in the invocation.
	It is an array-like object, but it is no an array,
	it's array-like in that it has "length" property,
	so you can ask "arguments", how many arguments were actually passed to this function,
	which might be different than the number of parameters that you specified.
	It also has a very weird interaction with parameters:
	if you change one of the elements of the "arguments" array,
	you may change one the parameters that it's associated with, and
	if you do something really scary like, do splicing on the "arguments" array,
	you may scramble and reassign all of your parameters,
	so generally you don't want to mess with the "arguments" array,
	while the language doesn't require you to treat it as a read-only structure,
	it is highly recommended to treat it as a read-only structure.
	Let's look at an example:
	I want to have a function in which I can pass it some number of numbers, and it will then add them all and return the result,
	this is how you would write that in ES3 (the 3rd edition of EcmaScript standard):
*/
function sum() {
	var i,
		n = arguments.length,
		total = 0;
	for (i = 0; i < n; i += 1) {
		total += arguments[i];
	}
	return total;
}
var ten = sum(1, 2, 3, 4);
/*
	In the 5th edition, "arguments" is more array-like in that it actually inherits now from "Array.prototype",
	and "Array.prototype" now contains some interesting functions like "reduce",
	so you can call "arguments.reduce" and pass it a function that does adding, and
	the result of that will be to add up all the members of that array and return it,
	so it's a more elegant way of expressing the same program.
	ES5:
*/
function sum() {
	return arguments.reduce(function (a, b) {
		return a + b;
	}, 0);
}
var ten = sum(1, 2, 3, 4);
/*
	this:
	The "this" parameter contains a reference to the object of invocation.
	"this" allows a method to know what object it is concerned with.
	"this" allows a single instance of a function object to service many functions,
	you can take a single function object and store it in a lots of different objects or put it in lots of prototypes,
	and allow it to be inherited by even more objects, and there's just one instance of the function in the system,
	but all of those objects think that they have that method, and they will do the right thing with it, because
	they use "this" to figure out what object they should actually be manipulating.
	"this" is the key to prototypal inheritance,
	prototypal inheritance works in this language because of "this".
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 /**    Invocation    **/
/*
	() suffix operator:
	It's used for invoking/calling/executing a function.
	It surrounds zero or more comma separated expressions which will become the arguments of the function, and
	those arguments will be bound to parameters of the function.
	If a function is called with too many arguments, the extra arguments are ignore, you don't get an error for that,
	but they're still going into the "arguments" array, so if you want to find out about them, they're still accessible to you.
	If a function is called with too few arguments, that's not an error either, the missing values will be filled-in with "undefined".
	There is no implicit type checking on the arguments, so if the types of the parameters are important to you,
	you need to check them yourself in your function.
	There are 4 ways to call a function, and they differ in what they do with "this":
*/
functionObject(arguments);                      //  Function form
thisObject.methodName(arguments);               //  Method form 
new FunctionObject(arguments);                  //  Constructor form
functionObject.apply(thisObject, [arguments]);  //  Apply form
/**    Method form :    **/
thisObject.methodName(arguments)
thisObject[methodName](arguments)
/*	When a function is called in the method form, "this" is set to thisObject, the object containing the function.
	It allows methods to have a reference to the object of interest. */
/**    Function form:    **/
functionObject(arguments)
/*	When a function is called in the function form, "this" is set to the global object.
	That's not very useful. (Fixed in ES5/Strict)
	An inner function does not get access to the outer "this": */
var that = this;
/**    Constructor form:    **/
new FunctionValue(arguments)
/*	When a function is called with the "new" operator, "this" is bound to a new object that inherits from "Function.prototype".
	If the function does not explicitly return a value, then that new object ("this") will be returned.
	Used in the Pseudo-classical style. */
/**    Apply form:    **/
functionObject.apply(thisObject, arguments)
functionObject.call(thisObject, argument, argument)
/*	What "apply" and "call" have in common:
	They both allow us to specify what "this" is, so the value that "this" should have will be the first parameter.
	The difference between them is:
	"apply" takes an array of arguments, and call takes zero or more individual parameters which will become the arguments.
	Defining "call" in terms of "apply" and,
	showing a little bit of ugliness caused by the fact that "arguments" is not a real array:  */
function.prototype.call = function (thisObject) {
	return this.apply(
		thisObject,
		Array.prototype.slice.apply(arguments, [1])
	);
};
/*
	To implement "call", we want all the parameters that were passed, except for the first-one,
	and we do that by using the "slice" method, except "arguments" doesn't have a "slice" method in ES3,
	so instead, we have to go out and find it, and we know that we can find it at "Array.prototype",
	and then we can take that piece of arguments out.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    this: summarize    **/
/*
	Invocation form           "this"
	function                  the global object (ES3), "undefined" (ES5 Strict)
	method                    the object containing the method
	constructor               the new object being constructed
	apply                     argument to determine what's it going to be
	
	"this" is a bonus parameter, its value depends on the calling form.
	"this" gives methods access to their objects.
	"this" is bound at invocation time.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    Recursion    **/
/*
	When a function calls itself.
	Example:
	value:
		string
		number
		object
		array
		true
		false
		null
	array:
		value
*/
var value = function () {
	white();
	switch (ch) {
		case '{':
			return object();
			break;
		case '[':
			return array();
			break;
		case '"':
			return string();
			break;
		case 't':
			return trueWord();
			break;
		case 'f':
			return falseWord();
			break;
		case 'n':
			return nullWord();
			v
		default:
			return number();
			break;
	}
};
var array = function () {
	var array = [];
	next('[');
	white();
	if (ch!== ']') {
		while (true) {
			array.push( value() );
			white();
			if (ch=== ']') {
				break;
			}
			next(',');
			white();
		}
	}
	next(']');
	return array;
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    A Module pattern    **/
/*
	Another thing we can do with functions is to create modules.
	We'd like to be able to avoid creating global variables, to minimize use of global variables,
	because of the conflicts that they can create, and functions provide a very nice way of doing that.
	So here I want to create a singleton object that be just one instance of it,
	so you don't want to have to create a class to define something that is just going to be one instance of, that'd be silly.
*/
var singleton = (function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	return {
		firstMethod: function (a, b) {
			...privateVariable...
		},
		secondMethod: function (c) {
			...privateFunction()...
		}
	};
}());
/*
	So I'm going to assign to "singleton" not that function,
	but the consequence of calling that function,
	and again I'm wrapping the whole function and the invocation in parentheses,
	as a sign to the reader that there's something bigger going on than just assignment of a function.
	There are some people who put the wrapping parentheses around the function not around the whole invocation,
	that doesn't make sense to me, because what we're trying to tell the user is, look at the whole thing,
	and putting parentheses around just part of it, I think it's counter-productive,
	so I think the whole thing needs to be wrapped in parentheses.
	So the outer function has variables and functions,
	and then we return an object using an object literal, and the object will contain some methods,
	and those methods will be closed over the private stuff,
	so we're returning in this case 2 functions, in the earlier cases we returned 1 function,
	this time we're returning 2, we can return as many as we want,
	and they share their access, they're both closed over the variables of the parent function,
	so they can communicate through that shared state without corrupting the global space.
	A related pattern to this is:
	We want to have a common global object where we'll keep our whole application,
	at yahoo we keep a lot of stuff in a global "YAHOO" object,
	so that everything that's ours we keep in one namespace:
*/
GLOBAL.methodical = (function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	return {
		firstMethod: function (a, b) {
			...privateVariable...
		},
		secondMethod: function (c) {
			...privateFunction()...
		}
	};
}());
/*
	So I want to add a new thing to my "GLOBAL" object called "methodical", which will have my 2 methods in it,
	so just as before I'm going to be assigning the result of my function into that object,
	now sometimes I want to be adding not a new object to that structure,
	but just add a couple of methods to that structure, and I can do that as well,
	so here another variation on the same pattern:
*/
(function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	GLOBAL.firstMethod = function (a, b) {
		...privateVariable...
	};
	GLOBAL.secondMethod = function (c) {
		...privateFunction()...
	};
}());
/*
	I've got a function and it's got the private stuff,
	and then I'm going to assign to "GLOBAL.firstMethod" my method, and to "GLOBAL.secondMethod" the other one.
	and again the whole thing is wrapped in parentheses,
	in this case the parentheses are syntactically required,
	and that's because I want this to be a function expression, and not a function statement,
	if it was a function statement I couldn't immediately execute it,
	and I want to immediately execute it.
	
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    Power Constructors    **/
/*
	We can take the Module pattern and very easily turn it into a constructor pattern.
	It's the same basic idea, we're just going to make lots of instances and not just 1 instance.
	So here's the recipe:
	Step 1: Make an object, using any of the techniques available in the language:
		object literal,
		"new",
		"Object.create",
		call another power constructor (and use the thing that it returns)
	Step 2: Define some variables and functions:
		these will be the private members (of the object that we're about to make)
	Step 3: Augment the object with privileged methods:
		a privileged method is a method which has access to that private state, that closes over the private state.
	Step 4. Return the object
	Really simple recipe but it's a little abstract, so let me turn it into a template that's a little easier to follow:
	Step 1:
*/
function myPowerConstructor(x) {
	var that = otherMaker(x);
}
/*
	This is going to be my new power constructor, and I'm going to create a variable called "that",
	because I can't call it "this", because "this" is a reserved word,
	and I will initialize it somehow, somehow I turn it into an object.
	Step 2:
*/
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
}
/*
	I declare "secret" variable, stuff it's going to be available to my privileged method
	Step 3:
*/
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
	that.priv = function () {
		... secret x that ...
	};
}
/*
	I create my privileged methods and assign them to that.
	Step 4:
*/
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
	that.priv = function () {
		... secret x that ...
	};
	return that;
}
/*
	I return "that".
	So it's really simple !
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    Super Methods    **/
/*
	When I started working with this language,
	I spent a lot of time thinking about how to simulate things that we did in the classical languages,
	like how do we get super functions,
	in the Pseudo-classical model there's no easy way to write super functions,
	in the functional style it's really easy:
*/
function hoozit(id) {
	var secret = {};
	var that = gizmo(id, secret);
	var super_toString = that.toString;
	that.test = function (testid) {
		return testid === secret.id;
	};
	that.toString = function () {
		return super_toString.apply(that);
	};
	return that;
}
/*
	I just capture a super function from the thing that I'm inheriting from,
	keep that in the Closure,
	and then I can call it anytime I want.
	It turns out though, in my carrier with this language I have never once written a super function,
	I just think about things in a different way,
	so that style of dependency, that kind of come-from, I just haven't find the need for it.
	So if you find yourself wanting to have super functions,
	you might step back and figure out why do I think I need that,
	and maybe there's a simpler way to think about this.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    Don’t make functions in a loop.    **/
/*
	One bit of warning about functions:
	Don't declare functions in a loop, for two reasons:
	One it can be wasteful because a new function object is created for each iteration,
	JavaScript compilers tend not to do any kind of loop invariants analyses,
	so anything that you're doing in a loop that doesn't change over each iteration,
	you probably want to move it out of the loop anyway just to make it go a little faster,
	but the bigger reason is that it gets really confusing,
	because you'd think that you're closing over the current value of the loop variables,
	but you're actually closing over their final values,
	so that's almost always not what you want,
	let me show you an example (a really common error):
*/
for (var i...) {
	div_id = divs[i].id;
	divs[i].onclick= function () {
		alert(div_id);
	};
}
/*
	Let's say you've got an array of divs, and you want to attach an event handler to each one,
	so you go through the array in a loop,
	and for each one you want to add an "onclick" handler which will display its ID number when it's clicked on,
	and what you find is that they all come up with the same number and it's the wrong number,
	and you wonder how did that happen, and it's because:
	when you add the function to "onclick" it's closing over "div_id" which is constantly changing,
	and so by the time you finally get around to clicking on them, you're going to be getting the final value,
	which was the value that kicked you out of the loop.
	So the way you get around that is by creating a separate function,
	which you're going to use to assign the functions to the event handler:
*/
var i;
function make_handler(div_id) {
	return function () {
		alert(div_id);
	}
}
for (i...) {
	div_id = divs[i].id;
	divs[i].onclick = make_handler(div_id);
}
/*
	So here I have a function called "make_handler" which will take the "div_id" and returns the event handler function,
	then within the loop we call "make_handler" and take its result and stuff it into "onclick",
	by doing that we avoided creating any functions inside of the loop,
	and that way we avoided the confusion that came from that problem with Closure.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**    Tennent's Principle of Correspondence    **/
/*
	Here I have two versions of the "factorial" function that do exactly the same thing,
	the only difference is:
	one of them uses a variable and the other uses a parameter to represent the result,
	otherwise exactly the same.
	Tennent wrote a book called "The Principles of Programming Languages",
	in which he demonstrated the principle of correspondence,
	which was a correspondence between variables and parameters,
	and JavaScript demonstrates it really well,
	so this shows that:
	you could imagine a subset of JavaScript which didn't have variables,
	would that still be a useful language?
	It turns out Yes and this is the proof,
	that anything that you can write with variables, you can write without variables,
	you can use a function Closure instead to do the same thing:
*/
function factorial(n) {
	varresult = 1; // result: variable
	while (n > 1) {
		result *= n;
		n -= 1;
	}
	return result;
}

function factorial(n) {
	return (function (result) { // result: parameter
		while (n > 1) {
			result *= n;
			n -= 1;
		}
		return result;
	}(1));
}
/*
	We can take that thought experiment one crazy step off the edge further:
	Suppose we had a language in which we didn't have variables,
	and in which we didn't have assignment,
	and we didn't have named functions,
	could we still do recursion?
	and it turns out you can, not sure if you want to but you can:
	So here's the strangest articact in computer science, it's called The Y Combinator,
	it's a function,
	it's a really complicated function although it's not very big,
	it's incredibly nested functions within nested functions,
	calling themselves,
	passing themselves as parameters to themselves:
*/
/**    The Y Combinator    **/
function y(le) {
	return (function (f) {
		return f(f);
	}(function (f) {
		return le(function (x) {
			return f(f)(x);
		});
	}));
}
varfactorial = y(function (fac) {
	return function (n) {
		return n <= 2 ? n : n * fac(n -1);
	};
});
varnumber120 = factorial(5);
/*
	So I call "y" passing a "factorial" formula,
	it returns a function,
	and the function it returns is the recursive "factorial" function.
	This is really wild stuff, and if you can figure this out, you can call yourself a computer-scientist.
	This is the really good stuff, and you can express this stuff in JavaScript,
	I mean JavaScript is right up there with Lisp and Scheme, it is a functional language, you can do this stuff,
	and while this may have little practical value,
	in terms of increasing you power as a programmer this is the stuff to be playing with, you can get really really deep,
	I see a lot of people playing with their Ajax stuff or wanting to show off, "Look at all the stuff I can do",
	and sometimes doing things which are probably reckless and ultimately not very smart,
	if you want to show that you're really smart,
	you ought to be doing this stuff,
	off to the side where you're not going to hurt anybody.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@