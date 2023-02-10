# https://docs.python.org/3/library/operator.html#mapping-operators-to-functions

+ - * / %        # arithmeic
**               # ... exponentiation
//               # ... floor division
@                # ... matrix multiplication
= : :=           # assignment
+= -= *= /= %=   # ...
**= //= @=       # ...
&= |= ^= >>= <<= # ... logical: and, or, xor, right-shift, left-shift
== != > < >= <=  # comparison
and or not       # logical
in               # containment
is               # identity (check if operands point to same memory location)
& | ^ ~ << >>    # bitwise

[]  # index/literal
{}  # 
()  # 
:=  # walrus
del # deletion

# unary
- # numeric negation
+ # unary plus (unchanged numeric argument)
~ # bitwise invert  i.e. ~x == -(x+1)

# keword
def del class with if elif else and or not in is for while pass break continue return lambda
async await assert except finally global nonlocal raise try yield
import from as

# bitwise
&  # and
|  # or
^  # xor
~  # not (invert all bits)
<< # zero fill left  shift
>> # signed    right shift