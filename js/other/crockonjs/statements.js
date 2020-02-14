// We have familiar set of statements in this language, most of them work similarly as other languages.
expression
if
switch
while
do
for
break
continue
return
try
throw
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Break statement  **/
// Statements can have labels.
// Break statements can refer to those labels.
loop: for (;;) {
	...
		if (...) {
			break loop;
		}
	...
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** For statement **/
// Iterate through all of the elements of an array:
for (i = 0; i < array.length; i += 1) {
	// within the loop:
	// "i" is the index of the current member.
	// "array[i]" is the current element.
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** For in statement **/
// iterate through all the members of an object:
for (name in object) {
	if ( object.hasOwnProperty(name) ) {
		// within the loop:
		// "name" is the key of current member.
		// "object[name]" is the current value.
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Switch statement **/
// Multiway branch.
// The switch value does not need to be a number, it can be a string.
// The case values van be expressions.
// Danger: Cases fall through to the next case unless a disruptive statement like "break" ends the case.
switch (expression) {
	case ';':
	case ',':
	case '.':
		punctuation();
		break;
	default:
		noneOfTheAbove();
}
// You have to explicitly break or disrupt somehow after each case, otherwise you'll fall into the next case.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Throw statement **/
// There's an "Error" constructor that you can use to make exception objects,
// or you can just throw an object literal, it does the same thing.
throw new Error(reason);
throw {
	name: exceptionName,
	message: reason
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Try statement **/
// Because we don't have exception classes, there's only 1 catch clause in a try block
// so it'll catch everything that comes through, but then you can look at it, and decide what to do about it.
try {
	// ...
} catch (e) {
	switch (e.name) {
		case 'Error':
			// ...
			break;
		default:
			throw e;
	}
}
// The JavasScript engine itself can throw a number of exception types:
'Error'
'EvalError'
'RangeErrot'
'SyntaxError'
'TypeError'
'URIError'
// They tend to not happen very much, the language tends to be too permissive,
// so it doesn't throw exceptions very often.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** With statement **/
// Intended as a convenient short-hand.
// Ambiguous.
// Error-prone.
// Don't use it.
with (o) {
	foo = koda;
}
// It will do one of the following statements:
o.foo = koda;
o.foo = o.koda;
foo = koda;
foo = o.koda;
// Can you guess which one it's going to do?
// It's a trick question! it can do any of them!
// and there's no way you can tell from reading the program which it's going to do,
// which one it'll do, will be based on the composition of "o",
// which is something you cannot determine by reading the program.
// This is what it's going to do:
if ('foo' in o) {
	o.foo = 'koda' in foo ? o.koda : koda;
} else {
	foo = 'koda' in foo ? o.koda : koda;
}
// Don't go anywhere near this statement.
// It does not do what you want, it fails very commonly, it was well-intended but it's unnecessary,
// there no code that you can't write better without it, also ES5 'strict' does not remove many things from the language,
// but it does remove this, if you ask someone who's writing a JavasScript engine, "What feature do you hate the most?",
// it's this and "eval", and the reason is: simply by being in the language, even if you're not using it,
// it forces all programs to be slower.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@