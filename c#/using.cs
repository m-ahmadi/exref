/*
using keyword has three uses:
	statement:         defines a scope at the end of which an object will be disposed.
	directive:         creates an alias for a namespace or imports types defined in other namespaces.
	static directive:  imports the members of a single class.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// using directive
// imports types defined in other namespaces.
// it doesn't import namespaces defined in other namespaces.

using System;
using System.Web.Services.Protocols;

var x = new System.SomeClass();
var x = new SomeClass();