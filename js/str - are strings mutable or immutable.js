var s = 'abbdef';
s[2] = 'c';

s
'abbdef'

/*
	any operations on strings (trim, slice, etc) actually create new strings.
	
	Strings are assigned by value and not by reference and are passed as such. (primitive value types)
	Thus, strings are not just immutable, they are values.
*/