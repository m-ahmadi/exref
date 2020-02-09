// falsy values:
false
null
undefined
''
0
NaN
// truthy values:
true
'false'
// everything else

switch ( expression ) {
	case expression:
		statements;
		break;
	default:
		statements;
		break;
}

while ( expression ) {
	
}

for ( initialization; condition; increment ) {
/*	do the initialization
	evaluate the condition (test the loop variable against a completion criterion)
	if the condition is omitted
		assume a condition of true
	if the condition is falsy
		break the loop
	execute the block
	execute the increment
	repeat the loop with the condition    */
}

for ( variable in object ) {
	if ( object.hasOwnProperty( variable ) ) {
		
	}
}

do {
	
} while ( expression );

try {
	
} catch ( variable ) {
	
}

throw expression;

return expression;

return
expression; // error
