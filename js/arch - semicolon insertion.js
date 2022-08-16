return
{
	ok: false
};

// After automatic semicolon insertion:

return; // semicolon insertion
{
	ok: false
};
//------------------------------------------------------------------------------
//	What happens to the stuff after return

{
	ok: false
};

/*
	Curly brace can mean start an object literal,
	Or it could mean a block,
	Since we don't have block scope in JS,
	having an empty block is not useful
*/

ok: false

/*	
	ok looks like an statement label
	false will evaluate to false because of epxression statements,
	but false doesn't have a semicolon after it,
	So another semicolon insertion happens:
*/

ok: false;

/*
	The semicolon after culry is not going to be an issue either,
	because empty statment allows you to have as many semicolon as you want.
*/

;

/*
	As a result of all that, we have some unreachable code,
	But JS doesn't care, So there's nothing in the language or in the grammer that says,
	there is any problem with unreachable code
*/
{ // unreachable statment
	ok: false;
};