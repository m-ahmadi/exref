'' + 42        // "42"
42 + ''        // "42"
(''+42)        // "42"
+'42';         // 42
+'3' + (+'4'); // 7

/*
	== and != operators, do type coercion before comparison.
	Since they want to compare two value of the same type,
	they try to make the two value the same by converting one to the other.
	So, If you compare a number to a string,
	before the comparison can happen,
	either number has to be changed to string,
	or string has to be changed to number.
	
	It's technically okey to use == != operators in cases that you're sure you have two value of the same type,
	e.g. 2 + 2 == 4
*/
'' == '0'            // false
0  == ''             // true
0  == '0'            // true
false == 'false'     // false
false == '0'         // true
false == undefined   // false
false == null        // false
null  == undefined   // true
' \t\r\n ' == 0      // true