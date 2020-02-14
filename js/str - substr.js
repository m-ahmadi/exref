// base on index of characters
str.slice( begin [, end ] ) // use this
str.substring( from [, to ] )
str.substr( start [, length ] )

var str = '123456';
str.slice(2)        '3456'
str.slice(2, 5)     '345'

str.substring(2)    '3456'
str.substring(2, 5) '345'

str.substr(2)       '3456'
str.substr(2, 2)    '34'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// base on string pattern
str.match(regexp)

var str = `
abc,123456
efg,789012
ijk,345678
`;

str.match(/abc.*$/m)[0]  'abc,123456'
str.match(/ijk.*$/m)[0]  'ijk,345678'
str.match(/34/g)         ['34', '34']
str.match(/v/g)          null
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
slice vs substring vs substr:

they all:
	if start equals stop, return an empty string
	if stop is omitted, extract characters to the end of string.
	if either argument is greater than string's length, string's length will be used instead.

distinctions of substring():
	if start > stop, then substring will swap those 2 arguments.
	if either argument is negative or NaN, it's treated as if it were 0.

distinctions of slice():
	if start > stop, slice() will return an empty string.
	if start is negative: sets char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
	if stop is negative:
		sets stop to: string.length – Math.abs(stop) (original value),
		except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.
*/