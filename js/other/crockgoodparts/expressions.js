// Expression forms:
literal
name
( expression )
prefix			operator 		expression
expression		infix operator 	expression
expression  ?	expression  : 	expression
expression 		invocation
expression 		refinement
new 			expression 		invocation
delete 			expression 		refinement

// Simple expressions:
'abc'
12
true
false
null
undefined
Infinity
new expression()
delete expression[]
delete expression.
( expression )
++expression
expression + anotherExpression
expression ? anotherExpression : yetAnotherExpression
expression()
expression.
expression[]

// Operator precedence:
.  []  ()                      //  Refinement and invocation
delete  new  typeof  +  -  !   //  Unary operators
*  /  %                       ///  Multiplication, division, modulo
+  -                           //  Addition/concatenation, subtraction
>=  <=  >  <                   //  Inequality
===  !==                       //  Equality
&&                             //  Logical and
||                             //  Logical or
?:                             //  Ternary

// prefix operator:
typeof  // type of
+       // to number
-       // negate
!       // logical not

// infix operator:
*  /  %  +  -  >=  <=  >  <  ===  !===  ||  &&
// refinement:
.name
[ expression ]