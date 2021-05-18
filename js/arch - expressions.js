// an expression is any valid unit of code that resolves to a value.
x = 7 // expression with side effects
3 + 4

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 5 categories of expression:

// arithmetic (evaluates to a number)
1
3.14
1e4

// string (evaluates to a character string)
'Fred'
'234'

// logical (evaluates to true or false)
true
false
0 && 1
0 || 1

// primary:
( )
this

// left-hand-side:
new 
super
[...Array(4)] // spread operator
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@