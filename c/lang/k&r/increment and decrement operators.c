/*												Increment and Decrement Operators
	++ (increment operator)
	-- (decrement operator)
	
	++ adds      1 to   its operand
	-- subtracts 1 from its operand
	
	++ and -- may be used either as:
		prefix  operators (before the variable: ++n)
		postfix operators (after  the variable: n++)
	
	In both cases, the effect is to increment n (n gets incremented by 1) but,
	++n increments n before its value is       used
	n++ increments n after  its value has been used
	If the value is being used (and not just the effect), ++n and n++ are different.
*/
int n = 5;
x = n++;	// x is 5
x = ++n;	// x is 6
//	In both cases, n becomes 6.

//	In a context where no value is wanted, just the incrementing effect, as in
n++; // n is 6
++n; // n is 6

// The increment and decrement operators can only be applied to variables,
// an expression like this is illegal:
(i+j)++ // illegal