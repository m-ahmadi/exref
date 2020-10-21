. ?. , ; ?: () []
+ - / * % ** ++ --
< > <= >= == != === !==
! && || ??
& | ~ ^ >> << >>>
=    += -+ **= *= /= %=    <<= >>= >>>=    &= ^= |=    &&= ||= ??=
=>
/./
new typeof in of instanceof delete async await void yield yield*

function function* class var let const import export from as
if else for break continue while do switch case try catch throw throws return debugger with
true false NaN Infinity null [number string int short char byte float double long boolean]
super static this prototype [enum abstract interface extends implements private public protected]
[package native transient volatile final finally goto synchronized default]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// arithmetic
+
-
/
*
%   // remainder
**  // exponentiation
++n // unary increment (prefix)
n++ // ...             (postfix)
--n // unary decrement (prefix)
n-- // ...             (postfix)
-n  // unary negation
+n  // unary plus
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// comparison
>
<
>=
<=
==
!=
===
!==
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// logical
&&
||
!
?? // nullish coalescing
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// bitwise
&
|
^   // xor
~   // not
<<  // left shift
>>  // right shift
>>> // sign-propagating right shift
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// assignment
=
+=   // arithmetic...
-=
*=
/=
%=
**=
&=   // bitwise...
|=
^=
<<= 
>>=
>>>= 
&&=  // logical...
||=
??=
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// misc

''+''      // string concat
,          // comma (runs series of expressions in order, and returns result of last one)

?:         // unary
delete     // ...
typeof     // ...
void       // ... (evaluates expression and returns undefined)

in         // relational
instanceof // ...
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// precedence (high to low)
()
. [] new(...) f() ?.
new()
++n --n
! ~ + - ++ -- typeof void delete await
**
* / %
+ -
<< >> >>>
< > <= >= in instanceof
== != === !==
&
^
|
&&
||
??
?:
=    += -+ **= *= /= %=    <<= >>= >>>=    &= ^= |=    &&= ||= ??=
yield yield*
,

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@