// A sequence of 0 or more 16-bit Unicode characters.
// No separate character type
// Characters are represented as string with length of 1.
// String are immutable.
// Similar strings are equal (===).
// String literals can use single or double quotes with \ escapement.
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** Surrogate Characters **/
// UCS-2, not quite UTF-16.
// No awareness of surrogate pairs.
// JavaScript tolerate surrogate characters but has no knowledge of them.
// If you have a string containing 1 surrogate character, JavaScript thinks it's a string with 2 characters on it,
// the count will be wrong, sub-string operation should be done carefully.
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** Multiline string literals **/
// Do not use it.
var long_line_1 = "This is a \
long line";
// ok
var long_line_2 = "This is a \any character here
long line";
// syntax error
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** Convert a number to a string **/
// Use number method (toString).
// Use String function.
str = number.toString();
str = String(number);
// For things that do not have "toString" (null, undefined):
// "String(number)" will work, "number.toString" will throw an exception.
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** Convert a string to a number **/
// Use the Number function.
// Use the + prefix operator.
// Use the "parseInt" function.
// "parseInt" function:
// It will look at each of the characters in a string and stops when it finds a character which is not a digit,
// and then it will return to you the number based on the digits that it found,
// and not tell you about the other stuff that it skipped.
// A problem when parsing dates and times
parseInt('12em', 10) === 12
// Converts the value into a number, It stops at the first non-digit character.
// Common error:
parseInt('08') === 0
parseInt('08', 10) === 8
// When it sees the first 0 it assumes base-8, then it sees the 8,
// 8 is not a based-8 digit, so it stops, so the result is 0.
// Solution: The radix (10) should always be used.
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** String length **/
// Strings are object.
// Object can have properties.
// One of the properties of the string is its length.
// It will tell you the number of 16-bit characters in a string.
// Extended characters are counted as 2.
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** String methods **/
charAt
charCodeAt
compareLocale
concat
indexOf
lastIndexOf
localeCompare
match
replace
search
slice
split
substring
toLocaleLowerCase
toLocaleUpperCase
toLowerCase
toUpperCase
toString
trim // ES5
valueOF
if (String.prototype.trim !== 'function') {
	String.prototype.trim = function () {
		return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1');
	};
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/** supplant **/
// Didn't get into ES5.
if (typeof String.prototype.supplant !== 'function') {
	String.prototype.supplant = function (o) {
		return this.replace(/{([^{}]*)}/, function (a, b) {
			var r = o[b];
			return typeof r === 'string' ? r : a;
		});
	};
}
var template = ''
+	'<table border="{border}">'
+		'<tr>'
+			'<th>Last</th>'
+			'<td>{last}</td'
+		'<tr>'
+		'<tr>'
+			'<th>First</th>'
+			'<td>{first}</td>'
+		'</tr>'
+	'</table>';
var data = {
	first: 'Carl',
	last: 'Hollywood',
	border: 2
};
mydiv.innerHTML = template.supplant(data);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/