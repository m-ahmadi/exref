//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.).
	This technique creates a closure around the entire contents of the file which, perhaps most importantly,
	creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
	
	Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable.
	This is often used, for example, in jQuery plugins.
	jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict().
	If this has been done, your code can still use $ employing this closure technique, as follows:
*/
(function ($) {
	/* jQuery plugin code referencing $ */
}(jQuery));
