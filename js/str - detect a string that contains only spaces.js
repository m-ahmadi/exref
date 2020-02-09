/*
	To achieve this you can use a Regular Expression to remove all the whitespace in the string.
	If the length of the resulting string is 0, then you can be sure the original only contained whitespace.
*/
var str = "    ";
if (!str.replace(/\s/g, '').length) {
	// string only contained whitespace (ie. spaces, tabs or line breaks)
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The fastest solution would be using the regex prototype function test() and
	looking for any character that is not a space or line break \S :
*/
if ( /\S/.test(str) ) {
	// found something other than a space or line break
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
if ( !str.trim().length ) {
	// seems to me that this would be faster
}