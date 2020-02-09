//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// logical and: &&
expr1 && expr2 /*
returns expr1 if it can be converted to false; otherwise, returns expr2.
thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

the && operator produces the value of its first operand if the first operand is falsy.
otherwise, it produces the value of the second operand.  */
'' && 2  // false
'1' && 2 // 2

// simulating if statements
a === 0 && (a=7) // same as
if (a === 0) a = 7;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// logical or: ||
expr1 || expr2 /*
returns expr1 if it can be converted to true; otherwise, returns expr2.
thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

the || operator produces the value of its first operand if the first operand is truthy.
otherwise, it produces the value of the second operand.  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// logical not: !
!expr
// returns false if its single operand can be converted to true; otherwise, returns true.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@