// nullish coalescing operator
// return right-hand operand when left-hand is nullish
leftExpr ?? rightExpr
leftExpr == null || leftExpr == undefined ? rightExpr : leftExpr
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// nullish coalescing assignment
// assign only if left-hand operand is nullish
x ??= y
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// logical operator
var n = age ?? -1; // same as:
var n = age !== null && !== undefined ? age : -1; // -1 if age is null or undefined
(null || undefined) ?? 'foo'; // 'foo'


// nullish coalescing assignment (left-hand side must be nullish)
var a = 0;
var b = null;
a ??= 7;
b ??= 7;
a // 0
b // 7

var o = {x: 7};
o.y ??= 34; // {x: 7, y: 34}
o.x ??= 96; // {x: 7, y: 34}
