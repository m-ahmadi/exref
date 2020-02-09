eval('2 + 2')               // 4
eval( new String('2 + 2') ) // String {"2 + 2"}
eval('2 + 2') === eval('4') // true

// better alternative
Function('2 + 2')()         // undefined
Function('x = 2')()         // x:2
function looseJsonParse(obj){
	return Function('"use strict";return (' + obj + ')')();
}
looseJsonParse('{a:(4-1), b:function(){}, c:new Date()}')


// detect syntax errors when executing eval
try {
	eval(code);
} catch (e) {
	if (e instanceof SyntaxError) {
		alert(e.message);
	}
}