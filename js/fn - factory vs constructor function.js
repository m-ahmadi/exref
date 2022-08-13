//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* constructor functions or class in es6
	
	used with the `new` keyword.
	PascalCase naming convention.
	`this` keyword inside the function refers to the instance to be created after `new` call.
	if not called with `new`, `this` will bind to global (or undefined in strict mode) if no context is provided with call/apply. 
	no private members.
*/
function Person(parFromNewCall) {
	// this === instance
	this.pubMem;
	this.allPubMem;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* factory functions
	
	regular functions that contractually suppose to return an object every time you call them.
	contractual naming convention. (eg: PascalCased name of the class prefixed with new: newPascalCase)
	private members.
	more flexible method chaining, ability to differntiate between base/derived/invoked instances.
	more flexible setuping.
	more straighforward inheritance handling with Object.create()
*/
function newPerson() {
	let inst = {} | Object.create();
	
	let privateVar;
	function privateFn() {}
	
	inst.pubVar;
	inst.pubMeth = () => {};
	return inst;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@