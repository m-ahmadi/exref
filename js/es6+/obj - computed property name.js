function fn () {}

var obj = {
	foo: 'bar',
	[ 'baz_' + fn() ]: 42,
	[ true ? 'javad' : 'golid']: 'ghandi',
	[ true || 'khaje' ]: 'nezam',
	[ false || 'khaje' ]: 'nezam',
};
obj // {foo: 'bar', baz_undefined: 42, javad: 'ghandi', true: 'nezam', khaje: 'nezam'}

// es5:
var obj = {
	foo: 'bar'
};
obj[ 'baz' + fn() ] = 42;
