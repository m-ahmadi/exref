console.log(...data)
// log
var log = console.log;

log('something', 'somthing else')
/* string substitutions:
%o or %O	 object
%d or %i	 integer
%s         string
%f         floating-point

%c         apply css to output (only some props: background border color padding ...)
*/
log('output an object %o dude', { a: 1, b: 2 })
log('output a number %i dude', 42)
log('output a string %s dude', 'oh baby')
log('foo %.2d', 1.1) // foo 01
log('foo %.2f', 1.1) // foo 1.10
for (let i=0; i<4; i++) console[i%2?'warn' :'error'](i)

console.warn()
console.info()
console.table()
console.dir()
console.trace() // outputs stack trace
console.clear()

console.group('a')
	console.log('1')
	console.group('a1')
		console.log('1')
	console.groupEnd()
	console.group('a2')
		console.log('1')
	console.groupEnd()
console.groupEnd()

console.time(label='default')
for (let i=0; i<100000; i++) {}
console.timeEnd(label='default')