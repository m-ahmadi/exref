/*
	comma operator runs a series of expressions in order,
	and then returns the result of the last of them.
*/

return myfunc(), myobj.myvar = someobj.prop, myobj

// same as:
myfunc();
myobj.myvar = someobj.prop;
return myobj;