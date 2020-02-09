/* can be used for:
	string
	boolean
	array
*/
'abc'.length          // 3
true.constructor.name // 'Boolean'
[].constructor.name   // 'Array'

/* cannot be used for:
	number:       SyntaxError
	object:       SyntaxError
	null:         no wrapper, no member at all, TypeError
	undefined:    no wrapper, no member at all, TypeError
*/
525.toString()              // SyntaxError: Invalid or unexpected token
(525).toString()            // '525'

{}.constructor.name         // SyntaxError: Unexpected token .
({}).constructor.name       // 'Object'

null.constructor.name       // TypeError:   Cannot read property 'constructor' of null
undefined.constructor.name 	// TypeError:   Cannot read property 'constructor' of undefined