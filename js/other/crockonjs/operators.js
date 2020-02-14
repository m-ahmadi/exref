// Being a C family language, we have all the operators that you'd expect to see in any C family language:
+ - * % / /        // Arithmetic
== != < > <= >=    // Comparison
&& || !            // Logical
& | ^ >> >>> <<    // Bitwise
?:                 // Ternary
// But some of them work a little bit differently.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** + operator **/
// + sign is used for both addition and concatenation.
// This turns out to be a bad mistake.
// This was inspired by Java which also does that, but Java is strongly typed language,
// so you can predict which one it's going to do. JavaScript is a loosely typed language,
// so which it does depends on the types of the values,
// which might not be known to you at the time you're writing the program.
// If both operands are numbers
//     add them
// else
//     convert them both to strings
//     concatenate them
//     '$' + 3 + 4 = '$34'
var op1, op2, result;
op1 = 2;
op2 = 4;
result = op1 + op2; // 6
op1 = '3';
op2 = 5;
result = op1 + op2; // '35'
// If there's any chance that one of the operands is not a number, you have to make sure that it is a number.
// You could use "Number" function, or "parseInt" function, or "+" prefix.
// Unary operator (+) can convert strings to numbers:
+'42'                // 42
Number('42')         // 42
parseInt('42', 10)   // 42
// The problem with using "+" operator is, you're putting a plus next to a plus,
// which could look like the "++" operator, so if there's any potential for that confusion, wrap it in parentheses.
+'3' + +'4'          // 7
+'3' + (+'4')        // 7
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** / operator **/
// You can divide 2 integers and produce a result which is not an integer. Why?
// Because the language doesn't have integers.
// Not only it will not be integers, it will also not be exact.
-10 / 3 = -3.3333333333333335
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** % operator **/
// We have a percent operator.
// It's not the scale-by-100 operator.
// It's not the modulo operator either.
// It's The remainder operator.
// The difference between modulo and remainder operator:
-1 % 8 // modulo: 7
-1 & 8 // remainder: -1
// It might be surprising for people coming from C.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** == !== operators **/
// Equal and not equal operators do type coercion before they compare things for equality,
// and that coercion can cause false-positives:
'' == '0'            // false
0  == ''             // true
0  == '0'            // true
false == 'false'     // false
false == '0'         // true
false == undefined   // false
false == null        // false
null  == undefined   // true
' \t\r\n ' == 0      // true
 // All should produce false, because in every case, what's on the left side is different from what's on the right side.
// It is always better to use "===" and "!==", which do not do type coercion, and will produce false for all of above.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** && operator **/
// Logical and operator (sometime called guard operator).
// If first operand is truthy
//     result is second operand
// else
//     result is first operand
// It can be used to avoid "null" references:
if (a) {
	return a.member;
} else {
	return a;
}
// can be written as:
return a && a.member;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** || operator **/
// The default operator, aka logical "or".
// If first operand is truthy
//     result is first operand
// else
//     result is second operand
// It can be used to fill in default values.
var last = input || nr_items;
// If "input" is truthy, then "last" is "input", otherwise set "last" to "nr_items".
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** ! operator **/
// Logical not operator.
// IF the operand is truthy, the result is "false", otherwise the result is "true".
// !! produces booleans.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Bitwise **/
& | ^ >> >>> <<
// The bitwise operators take your 64-bit floating number,
// convert it to a 32-bit signed integer,
// do the work on them,
// and then turn it back to 64-bit floating.
// So shift will not be faster than multiply.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@