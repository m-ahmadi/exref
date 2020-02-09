/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Closure    **/
/*
	Sometimes called:
		"Lexical Scoping"
		"Static Scoping"
	Rules of how variable names are resolved in nested functions:
	
	The context of an inner function includes the scope of the outer function,
	so all the variables that are in the outer function are available to the inner function,
	and this continues even after the parent function has returned,
	so the inner function have access to that context even though the parent function has returned.
	Let's look at the following example:
*/
// Global:
var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var digit_name = function (n) {
	return names[n];
};
alert( digit_name(3) ); // 'three'
/*
	Unfortunately the way it's defined here, "names" is a global variable and the problem with that is,
	if there's anything else in the environment that is also a global variable that has that name,
	they're going to interfere with each other, and we'll probably cause this to fail,
	and that is something you cannot test for, because it's impossible to test with everything that might be loaded in the page,
	it might be that a third party ad gets loaded one day that happens to have a global variable called "names",
	and now you page died, so that's intolerable, so we want to as much as possible reduce our dependence on global variables,
	one way we could do that is to rewrite this program so that "names" is now a local variable of the "digit_name" function:
*/
// Slow:
var digit_name = function (n) {
	var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	return names[n];
}
alert( digit_name(3) ); // 'three'
/*
	and this works, so "names" is a local variable, we have function scope, "names" is not visible on the outside,
	so even if an evil ad comes in and has a "names" variable, it will not interfere with this one,
	so that's good, this is a much more reliable version of the function,
	unfortunately every time we call the function we're going to allocate a new array and stuff ten things into it,
	which is going to take some time and we don't want to do that, that's a terrible waste and we want to prevent it,
	fortunately closure provides a very nice way to do that:
*/
// Closure:
var digit_name = (function (){
	var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	return function (n) {
		return names[n];
	};
}());
alert( digit_name(3) ); // 'three'
/*
	so now we have function and it has a private "names" variable and it returns a function,
	and the function it returns is assigned to digit name,
	so the important thing is notice at the bottom we're invoking the function immediately,
	so what we're storing in "digit_name" is not the whole function, it is the function that it returns,
	so we assign the return value of the outer function to digit name, the outer function now has returned,
	"digit_name" now contains a function which is returned function (the function after return statement),
	and that returned function still has access to "names",
	even though "names" is a private variable of a function that is already returned.
	That's Closure!
	One function closes over the variables of another function.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Lazy function definition    **/
var digit_name = function (n) {
	var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	digit_name = function (n) {
		return names[n];
	};
	return digit_name(n);
};
alert( digit_name(3) ); // three
/*
	We're looking at this pattern as a warning (Don't do this).
	The idea here is that:
	in closure we unconditionally initialized the function before we're going to start calling it,
	but what if the initialization is really expensive?
	so we don't want to do it unless we know the function is going to end up getting called at least once,
	so the lazy pattern attempts to do that, so what it does is:
	it assigns to "digit_name" a function and when that function is called,
	it will then store another function into the same variable, so it'll replace itself, it'll modify itself,
	and the idea here is that, that allows us to avoid having to initialize the thing if we don't need to do it,
	but it comes at a cost, and the cost is confusion that "digit_name" is no longer first-class,
	and that If we were to pass it to a function and want that function to call it,
	or If were to assign it to an object and let someone call it as a method,
	every time it gets called from that point on, it will do the initialization and stuff a new function into "digit_name",
	so instead of making it faster, we've actually made it slower,
	it's slower than the slow case that we started off with (the 2nd example),
	now the counter-argument is: you have to be very careful to not do that,
	so one of the rules that we put in the documentation is that this can only be called from the global variable,
	you can't use the function value as a function value, except to call it immediately,
	and that's worth because we're saving the initialization cost,
	it turns out that analysis is wrong,
	all we're saving is the cost of an if per iteration:
*/
/**    Closure Conditional    **/
var digit_name = function (n) {
	var names;
	digit_name = function (n) {
		if (!names) {
			names = = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		}
		return names[n];
	};
	return digit_name(n);
};
alert( digit_name(3) ); // three
/*
	So here we're going back to the closure form, except we put an if statement in it,
	so that if "names" hasn't been initialized yet, we'll initialize it now, and then we'll do the rest,
	so the cost of this compared to the previous one was 1 if statement per invocation,
	which is in the noise, it's not even measurable,
	so the optimization that we were hoping to get in the lazy form just doesn't pay off and we get weirdness instead,
	an argument about that might be:
	well suppose we call this function a million times or a gazillion times,
	a gazillion if statements, that starts to add-up to something, and well yeah maybe that's true,
	but if you think you're really going to call this a gazillion times, we shouldn't be optimizing the case where
	we're not going to call it at all.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (fade function)    **/
function fade(id) {
	var dom = document.getElementById(id),
		level= 1;
	function step() {
		var h = level.toString(16);
		dom.style.backgroundColor = '#FFFF' + h + h;
		if (level < 15) {
			level+= 1;
			setTimeout(step, 100);
		}
	}
	setTimeout(step, 100);
}
/*
	A fade function, this is something you might do in an Ajax application.
	We want to take some object maybe a div or something and have it fade from yellow to white,
	maybe as an indication to the user that something changed and they should pay attention to it,
	so we've got our "fade" function,
	first thing we do is find the DOM element and create a variable called "level" which we'll set initially to one,
	then we define a "step" function,
	then we call "setTimeout", passing that "step" function with a time so it'll fire in a tenth of a second,
	and then the function returns, done, that's the end of "fade",
	then suddenly a tenth of second later approximately, the "step" function executes,
	and it will first define a variable "h" and initialize it with "level", what is "level" ?
	"level" is the variable of "fade", it's not the value of "fade" when it was created, it's the current value/variable,
	it does the same thing with "dom":
	it gets access to the "dom" variable and uses that to change the background color of that DOM node,
	then it looks at "level" and if it is less than fifteen which will be at this point, it will add one to it,
	it's adding 1 to the "level" variable of "fade" function that's already returned,
	and then it will call "setTimeout",
	and in a tenth of a second, we'll do this again and we'll keep doing it until eventually we reach fifteen and then we stop.
	Now suppose we had three things on the page and we wanted them all to fade simultaneously,
	so we call "fade(1); fade(2); fade(3);" with three different IDs at the same time,
	are those three executions going to interfere with each other? No, not at all,
	because each invocation of fade has its own unique set of variables:
	its own "dom", its own "level", creates its own "step" functions, they do not interfere each other at all.
	So this works again because of Closure,
	because "step" is able to close over the "dom" and "level" variables, it just works.
	Everybody still with me? :D
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (later method)    **/
my_object.later(1000, "erase", true);
/*	The "later" method causes a method on the object to be invoked in the future.
	We want to make a "later" method, it's like "setTimeout" except more object-oriented:
	We want it to be a method of all objects,
	so we can take any object,
	call its "later",
	give it a number of milliseconds in which to wait,
	FYI: it doesn't actually wait, it puts it on the timer queue and eventually it'll get around to dispatching it)
	give it a name of a method,
	pass it a function which will be treated as a method,
	pass it other parameters that the method would need.
	Let's look at the problems with "arguments" variable again:
	What we're going to to want to be able to say is:
*/
arguments.slice(2)
/*	so that we can take all of the parameters that were passed except for the first two, and make a little nice array out of it,
	we can't do that in ES3, instead we have to write:  */
Array.prototype.slice.apply( arguments, [2] );    //    In ES5: we can do "arguments.slice(2)"
/*	
	Here's how to define it:
	So we're going to add this to "Object.prototype", we could add it to any of the ancestors in the application,
	this is one place to put it, "Object.prototype" is a global object,
	so all of the problems you have with global variables, you have with global prototypes as well,
	so this is something you want to do really cautiously,
	you want to do it conditionally just in case the language ever actually adds "later" as standard equipment,
	so that you're not going to be replacing the official version with your version.
	Generally you don't want to be doing this in applications,
	although it's sometimes a reasonable thing to be doing in Ajax libraries.	
*/
if (typeofObject.prototype.later!== 'function') {
	Object.prototype.later= function (msec, method) {
		var that = this,
			args = Array.prototype.slice.apply( arguments, [0, 2] );
		if (typeof method === 'string') {
			method = that[method];
		}
		setTimeout(function () {
			method.apply(that, args);
		}, msec);
		return that; // Cascade
	};
}
/*
	If we don't already have a "Object.prototype.later" method, we're going to define one,
	and we're going to pass in the "msec" (number of milliseconds) and the "method",
	then we'll create an array of the additional arguments,
	we're binding "that" to "this",
	because in the function that we are passing to "setTimeout" (anonymous function in the first parameter),
	we're going to want access to "this",
	but "this" doesn't work inside the mentioned function,
	"this" is not captured in Closure, but "that" is,
	so that's how we get "this" to the mentioned function,
	then we call "setTimeout" and that will cause "method" (second parameter of "later") to get invoked at later time.
	One other thing we're doing here is,
	when "later" is finished which happens immediately, it returns the value of "that", which is also "this",
	and the advantage of doing that is that: it allows us to then cascade on that,
	so if we had several things that we wanted to happen later but at different times,
	we could say "myObject.later5.later10.later20" and so on,
	we can just cascade all these things one after another because each returns its own object,
	so we can then go right-on and invoke the next one.
	A lot of Ajax libraries carry this idea to excess,
	but it's a really nice pattern and it works very nicely in this language.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (partial application)    **/
/*
	We're starting to get a little theoretical now.
	Partial application says:
	I'll take a function and a parameter,
	and return another function which doesn't execute that yet,
	but will when supplied with additional parameters.
	Let's start with the example first:
	We're going to use a function called "curry",
	we're going to pass it an "add" function which takes two arguments and adds them together,
	and we're going to pass it "1",
	and it will return a function which will add 1 to whatever gets passed to it,
	so we're going to store it in "inc", and then we can call it,
	so if we pass a "6" now to "inc", we get "7", and this is called partial application:
*/
function curry(func) {
	var args = Array.prototype.slice.apply( arguments, [1] );
	return function () {
		return func.apply( null, args.concat(Array.prototype.slice.apply(arguments)) );
	};
}
var inc = curry(function add(a, b) {
	return a + b;
}, 1);
alert( inc(6) ); // 7
/*
	We first get an array of arguments except the first-one, because the first-one is the function and we don't need that one,
	and in this case we're assuming that we're on ES5 so we're not doing the awful "Array.prototype.slice.apply",
	and then "curry" returns a function and that function will apply the "arguments" to the function.
	One bit of weirdness that's left over from "arguments" not being a real array is that:
	if we pass "arguments" as a parameter to "concat", it doesn't recognize it as it's an array
	and then it'll take all the members of it and concatenate them to the other thing,
	and it will concatenate them as a single array which in this case is not what we want,
	so we need to turn it into a real array so the "concat" will do the right thing to it,
	and we do that by calling its "slice" method,
	so in ES5, it has the "slice" method, so "slice" returns an array so that'll work,
	but we shouldn't have had to to that, there's still some things left to get fixed in future editions.
	Everybody still with me? :D
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (make_promise)    **/
/*
	Suppose we've got a process which cannot be resolved immediately, maybe it's going to require a lot of computation,
	maybe it has to go a worker pool and do something, maybe it has to go back to the server and get some stuff,
	but we would like to be able to return something immediately that we can start acting on,
	even though it's not going to be real for a while and we don't when that while is yet.
	So a service that's doing something like that could return something it's called a promise,
	and a promise is an object which allows us to call methods on the thing,
	and if know what the thing is, then they'll get immediately executed,
	but if we don't know that thing is yet, they'll get queued-up,
	and we'll finally get executed when we know what the thing is,
	that turns out to be a really useful pattern for doing a lot of things particularly when you're doing a lot of communications.
	So here we're going to implement a promise maker,
	and a promise maker will return a set of five functions: "when", "fail", "fulfill", "smash" and "status",
	you could pass anyone or any fraction of these functions to someone else, so for example:
	you might have a service, and I want to return something to you immediately,
	so I give you back an object containing a "when" and a "fail" method,
	you can then pass to "when" functions that you want to be called when the thing is fulfill,
	and you can also pass functions to "fail" for the case where a failure comes back,
	and it'll just sit-on all those things until it knows what the disposition is,
	and then the creator of the service might hang on to the "fulfill" and "smash" methods,
	"fulfill" he'll call and pass a value in, when he knows what the value finally is,
	and that's the thing that will get delivered to the functions,
	and if it turns out that it's going to be an error, at this point it's too late to throw an exception,
	because that was a long time ago and the other guy is not in the call stack anymore,
	so instead you "smash" the promise, you break the promise and that will cause all of his "fail" methods now to run.
	The way these things work is:
	They depend on the "vouch" and "resolve" methods which are private to "make_promise" but which again it closes over,
	so they'll always have access to those functions and the state that they refer to.
*/
function make_promise() {
	var status = 'unresolved',
		outcome,
		waiting = [],
		dreading = [];
		
	function vouch(deed, func) {
		switch (status) {
			case 'unresolved':
				(deed === 'fulfilled' ? waiting : dreading).push(func);
				break;
			case deed:
				func(outcome);
				break;
		}
	}
	function resolve(deed, value) {
		if (status !== 'unresolved') {
			throw new Error('The promise has already been resolved: ' + status);
		}
		status = deed;
		outcome = value;
		(deed === 'fulfilled' ? waiting : dreading).forEach(function (func) {
			try {
				func(outcome);
			} catch (ignore) {}
		});
		waiting = null;
		dreading = null;
	}
	return {
		when: function (func) {
			vouch('fulfilled', func);
		},
		fail: function (func) {
			vouch('smashed', func);
		},
		fulfill: function (value) {
			resolve('fulfilled', value);
		},
		smash: function (string) {
			resolve('smashed', string);
		},
		status: function () {
			return status;
		}
	};
}
/*
	Let's look at the implementation:
	We've got "status" which initially is 'unresolved' and eventually could be 'fulfilled' or 'failed',
	we've got the "outcome" so when we know what the value is, we'll stick it in there,
	we've got the "waiting" list of functions that we're registered with "when",
	and we've got the "dreading" list for the functions that we're registered with "fail".
	Let's look at the implementations of "vouch" and "resolve":
	then vouch will take a "deed" and a function, and the it'll look at the "status",
	and if the "status" is still 'unresolved', then it will put it on one of those lists,
	and which list it'll put it on will depend on what the "deed" is,
	but if the current state of promise matches the "deed", then we can execute it immediately.
	The other piece of this is "resolve":
	If the "status" is already been 'resolved', then we throw an error, because we can only do it once,
	otherwise we'll go through and using one of the nice things in ES5 now, we've got a "forEach" method,
	so we'll figure out which of those two arrays of functions we've got,
	and we'll say for each one of those functions, call this function,
	and this function will go and call each of those with the value,
	and we had to wrap it in tray-catch because if any of those functions should throw,
	we don't want that to interfere with the other functions getting a chance to run.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (sealer/unsealer)    **/
/*
	Sometimes we'd like to be able to pass secret information around through the application,
	so let' say that, I give to you a secret envelope, and I tell you give it to the cashier and the cashier will take care of you,
	I want you to be able to take that envelope to the cashier and get reimbursed,
	and I like you to be able to give that envelope to someone else and allow them to be reimbursed,
	but I don't want you to be able to open it yourself,
	and I don't want you to be able to to tamper with it,
	and I want the cashier to be able to verify that in-fact it is the original untampered-with thing.
	We could do that really easily in JavaScript it turns out.
	Now it sounds like something you need public key cryptography to do,
	but that doesn't really work inside of an application, but turned out there's a much simpler solution.
	The way it works is:
	I've got a sealer maker which will return a pair of functions, a sealer and an unsealer, and they have to be used in the pairs,
	so I will keep the sealer, I will give the unsealer to the cashier,
	then I can call the sealer with the value that I want to give to you,
	and it will return to me a box, which I can then give to you, and the box is useless to you,
	except that, if you can give it to someone whose got an unsealer, they can reclaim the original object.
	One thing: this function is a tiny bit harder to write than it should be,
	because in JavaScript object keys have to be strings, they can't be objects,
	if they could be objects, this function would be totally trivial, as it is, it's just slightly trivial.
*/
function make_sealer() {
	var boxes = [], values = [];
	return {
		sealer: function (value) {
			//               0
			var box, i = boxes.length;
			box = {};
			boxes[i] = box; // boxes = [{}]
			values[i] = value; // value = ['salam']
			return box; // {}
		},
		unsealer: function (box) {
			return values[boxes.indexOf(box)]; // 'salam'
		}
	};
}
var t = make_sealer();
t.sealer('hello');   // returns an empty object.
t.unsealer('hello'); // returns undefined.
/*
	So what I'll do is:
	I will create the box, the secret container which is just an empty object,
	it's really just a token, I'm not actually giving you a real box, bit it acts like a box,
	and I'll store in my "boxes" array, and right next to it I will store in my "values" array the value that it represents,
	and then return the box to you, so that was really easy,
	and then the "unsealer" uses the new "indexOf" method that we have in arrays,
	and goes looking for that box in the list of boxes,
	and if it finds it, then it returns the corresponding value, and we've got it,
	and if something goes wrong, if you pull the substitution and gave an object that was not sealed,
	you get "undefined" back, which is how it should be.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Another Closure example (memoizer)    **/
/*
	Here's another thing we can do:
	I want to have a "memoizer" which will remember the result of previous callings of a function,
	particularly the recursive functions, so that we can avoid doing some work.
	For example:
	"factorial" can be giving a recursive definition,
	in which it's the product of the value and of calling "factorial" on the value diminished by 1,
	and so if you're computing a table of factorials,
	you can spend a lot of time going over the same ground over and over and over again,
	and this function will prevent that:
*/
function memoizer(memo, formula) {
	var recur = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = formula(recur, n);
			memo[n] = result;
		}
		return result;
	};
	return recur;
};
var factorial = memoizer([1, 1], function (recur, n) {
	return n * recur(n -1);
});
var fibonacci = memoizer([0, 1], function (recur, n) {
	return recur(n -1) + recur(n -2);
});
/*
	So what I'm going to pass to the "memoizer" is an array containing some of the values that we're going to remember,
	so the results for factorial of 0 and factorial of 1 will be 1 and 1,
	so we'll pass that in to get started,
	and then we'll also pass in a function which defines what a factorial step is,
	and in this case it's multiplying and times the recurrence mines 1,
	so when we go up to the "memoizer", it takes that "memo" array and it takes the "formula" that we just passed in,
	and it will create a recurrence function which is the thing that we call for each iteration,
	which will first look to see if we already have the result that we need in the "memo" array,
	and if it does then we're done,
	and if not then we will call the "formula" passing in itself, it's on recurrence function so that it can do the next step.
	Where this is a big win, is in computing fibonacci,
	because fibonacci recurs on 2 legs at the same time so it gets explosive,
	if you do a fibonacci of 40, let's say it's in the trillions of iterations, this gets it down into the tens,
	so even though the program look a little bit more complicated, it's hugely more efficient,
	and again this is happening because of Closure,
	because the "recur" function closes over the "memo" array and over the "formula" that we're recurring on.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/