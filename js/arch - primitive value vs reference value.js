/*
	There are 2 value types in JavaScript:
		Primitive values
		Reference values
	
	Primitive values are:
		Data that are stored on the stack.
		Stored directly in the location that they are accessed.
		Immutable, meaning they can't change.
		
	Reference values are:
		Objects that are stored in the heap.
		A pointer to a location in memory where the object is stored.
*/

// immutability:
var a = "salam";
a.length // 5
a.length = 11
a.length // 5