/*
	There is no limit for the string length (as long as it fits into memory).
	The strings are immutable symbols that are stored at a certain address, and,
	what's actually used as the index for the array is that address (aka pointer, reference) and not the string itself.
	
	MDN is silent on the issue, and so is the spec (ES5, ES6).
	They only state that the property accessor must be a string, without any qualifications, in other words,
	there is no limit as far as the spec is concerned.
	
	How browsers handle it:
	Chrome 40 (Desktop), Chrome 40 (Android 5.1), Firefox 36, Opera 27, and IE9+ can deal with a property name of up to 2^27 characters.
	Safari 8 (OS X Yosemite) can even handle property names of 2^30 characters.
	For all those browsers except IE, the maximum property length is the same as the maximum string length.
	IE9+ can handle a maximum string length of ~2^30 characters, but the limit for object keys is at 2^27 characters, just as in the other browsers.
	The test didn't work in IE8 and Safari on iOS, presumably due to memory issues caused by the test code.
	In a nutshell, it is safe to use long property names, even when taking it to extremes.
	As long as the strings themselves stay within the limits of what browsers can handle, you can use them as property names as well.
*/