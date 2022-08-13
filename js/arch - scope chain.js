//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Managing Scope
The concept of scope is key to understanding JavaScript not just from a performance
perspective, but also from a functional perspective. Scope has many effects in Java-
Script, from determining what variables a function can access to assigning the value of
this. There are also performance considerations when dealing with JavaScript scopes,
but to understand how speed relates to scope, it’s necessary to understand exactly how
scope works.


Scope Chains and Identifier Resolution
Every function in JavaScript is represented as an object—more specifically, as an instance
of Function. Function objects have properties just like any other object, and these
include both the properties that you can access programmatically and a series of internal
properties that are used by the JavaScript engine but are not accessible through code.
One of these properties is [[Scope]], as defined by ECMA-262, Third Edition.

The internal [[Scope]] property contains a collection of objects representing the scope
in which the function was created. This collection is called the function’s scope chain
and it determines the data that a function can access. Each object in the function’s
scope chain is called a variable object, and each of these contains entries for variables
in the form of key-value pairs. When a function is created, its scope chain is populated
with objects representing the data that is accessible in the scope in which the function
was created. For example, consider the following global function:
function add(num1, num2){
var sum = num1 + num2;
return sum;
}
When the add() function is created, its scope chain is populated with a single variable
object: the global object representing all of the variables that are globally defined. This
global object contains entries for window, navigator, and document, to name a few.
Figure 2-2 shows this relationship (note the global object in this figure shows only a
few of the global variables as an example; there are many others).

The add function’s scope chain is later used when the function is executed. Suppose
that the following code is executed:
var total = add(5, 10);
Executing the add function triggers the creation of an internal object called an execution
context. An execution context defines the environment in which a function is being
executed. Each execution context is unique to one particular execution of the function,
and so multiple calls to the same function result in multiple execution contexts being
created. The execution context is destroyed once the function has been completely
executed.

An execution context has its own scope chain that is used for identifier resolution.
When the execution context is created, its scope chain is initialized with the objects
contained in the executing function’s [[Scope]] property. These values are copied over
into the execution context scope chain in the order in which they appear in the function.
Once this is complete, a new object called the activation object is created for the execution
context. The activation object acts as the variable object for this execution and
contains entries for all local variables, named arguments, the arguments collection, and
this. This object is then pushed to the front of the scope chain. When the execution
context is destroyed, so is the activation object. Figure 2-3 shows the execution context
and its scope chain for the previous example code.

Each time a variable is encountered during the function’s execution, the process of
identifier resolution takes place to determine where to retrieve or store the data. During
this process, the execution context’s scope chain is searched for an identifier with the
same name. The search begins at the front of the scope chain, in the execution function’s
activation object. If found, the variable with the specified identifier is used; if not, the
search continues on to the next object in the scope chain. This process continues until
either the identifier is found or there are no more variable objects to search, in which
case the identifier is deemed to be undefined. The same approach is taken for each
identifier found during the function execution, so in the previous example, this would
happen for sum, num1, and num2. It is this search process that affects performance.

Note that two variables with the same name may exist in different parts
of the scope chain. In that case, the identifier is bound to the variable
that is found first in the scope chain traversal, and the first variable is
said to shadow the second.


Identifier Resolution Performance
Identifier resolution isn’t free, as in fact no computer operation really is without some
sort of performance overhead. The deeper into the execution context’s scope chain an
identifier exists, the slower it is to access for both reads and writes. Consequently, local
variables are always the fastest to access inside of a function, whereas global variables
will generally be the slowest (optimizing JavaScript engines are capable of tuning this
in certain situations). Keep in mind that global variables always exist in the last variable
object of the execution context’s scope chain, so they are always the furthest away to
resolve. Figures 2-4 and 2-5 show the speed of identifier resolution based on their depth
in the scope chain. A depth of 1 indicates a local variable.

The general trend across all browsers is that the deeper into the scope chain an identifier
exists, the slower it will be read from or written to. Browsers with optimizing JavaScript
engines, such as Chrome and Safari 4, don’t have this sort of performance penalty for
accessing out-of-scope identifiers, whereas Internet Explorer, Safari 3.2, and others
show a more drastic effect. It’s worth noting that earlier browsers, such as Internet
Explorer 6 and Firefox 2, had incredibly steep slopes and would not even appear within
the bounds of this graph at the high point if their data had been included.
Given this information, it’s advisable to use local variables whenever possible to improve
performance in browsers without optimizing JavaScript engines. A good rule of
thumb is to always store out-of-scope values in local variables if they are used more
than once within a function. Consider the following example:
function initUI(){
var bd = document.body,
links = document.getElementsByTagName("a"),
i= 0,
len = links.length;
while(i < len){
update(links[i++]);
}
document.getElementById("go-btn").onclick = function(){
start();
};
bd.className = "active";
}
This function contains three references to document, which is a global object. The search
for this variable must go all the way through the scope chain before finally being resolved
in the global variable object. You can mitigate the performance impact of repeated
global variable access by first storing the reference in a local variable and then
using the local variable instead of the global. For example, the previous code can be
rewritten as follows:
function initUI(){
var doc = document,
bd = doc.body,
links = doc.getElementsByTagName("a"),
i= 0,
len = links.length;
while(i < len){
update(links[i++]);
}
doc.getElementById("go-btn").onclick = function(){
start();
};
bd.className = "active";
}
The updated version of initUI() first stores a reference to document in the local doc
variable. Instead of accessing a global variables three times, that number is cut down
to one. Accessing doc instead of document is faster because it’s a local variable. Of course,
this simplistic function won’t show a huge performance improvement, because it’s not
doing that much, but imagine larger functions with dozens of global variables being
accessed repeatedly; that is where the more impressive performance improvements will
be found.
*/



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// breaking the outward scope-chaining (aka: identifier resolution)
var a = (function () {
	var p,
	
	get = function () {
		return p;
	},
	set = function (v) {
		p = v;
	},
	setBadly = function (v) {
		p = v;
		var p; // breaking the outward scope-chaining
		/*
			now "setBadly" won't change the outter p,
			because it found a variable with that name in its own scope,
			so the outward scope-chaning stops.
		*/
	};
	
	return {
		get: get,
		set: set,
		setBadly: setBadly
	};
}());

a.get()				// undefined
a.set(true)
a.get				// true
a.setBadly(false)
a.get()				// true