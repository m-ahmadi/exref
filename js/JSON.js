JSON.stringify(value, ?replacer= (k,v)=> | [''|0,...], ?space=''|0)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// basic
JSON.stringify({a:1,b:2})                 // '{"a":1,"b":2}'
JSON.stringify({a:1,b:2}, null, 2)        // '{\n  "a": 1,\n  "b": 2\n}'
JSON.stringify({})                        // '{}'
JSON.stringify(true)                      // 'true'
JSON.stringify('foo')                     // '"foo"'
JSON.stringify([1,'false',false])         // '[1,"false",false]'
JSON.stringify({x:5})                     // '{"x":5}'
JSON.stringify(new Date(2006,0,2,15,4,5)) // '"2006-01-02T15:04:05.000Z"'
JSON.stringify({x:5,y:6})                 // '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]) // '[1,"false",false]'

// Infinity and NaN will change to null
JSON.stringify({a:Infinity}) // '{"a":null}'
JSON.stringify({a:NaN})      // '{"a":null}'

// undefined, Function, Symbol are not valid JSON values (omitted if in object, changed to null if in array)
JSON.stringify({a:undefined})    // '{}'
JSON.stringify({a:function(){}}) // '{}'
JSON.stringify({a:()=>0})        // '{}'
JSON.stringify({a:Symbol('')})   // '{}'
JSON.stringify([undefined, function(){}, Symbol('')]) // '[null,null,null]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') })          // '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' })                          // '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]) // '{}'

JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
	if (typeof k === 'symbol') {
		return 'a symbol';
	}
});
// '{}'

// Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'