// both functions have the same result:

function e(filename) {
	return filename.split('.').pop();
}

function e2(f) {
	return f.substring(f.lastIndexOf('.')+1, f.length) || f;
}

e('')                          // ''
e('name')                      // 'name'
e('a')                         // 'a'
e('name.txt')                  // 'txt'
e('a.b')                       // 'b'
e('.htpasswd')                 // 'htpasswd'
e('.hidden')                   // 'hidden'
e('name.with.many.dots.myext') // 'myext'
e('a.b.c.d')                   // 'd'
e('.a.b')                      // 'b'
e('a..b')                      // 'b'
e(null)                        // TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// both functions have the same result:

function e(f) {
	return f.slice( (f.lastIndexOf('.') - 1 >>> 0) + 2 );
}

function e(f) {
	return f.slice( (Math.max(0, f.lastIndexOf('.')) || Infinity) + 1 );
}

e('')                          // ''
e('name')                      // ''
e('a')                         // ''
e('name.txt')                  // 'txt'
e('a.b')                       // 'b'
e('.htpasswd')                 // ''
e('.hidden')                   // ''
e('name.with.many.dots.myext') // 'myext'
e('a.b.c.d')                   // 'd'
e('.a.b')                      // 'b'
e('a..b')                      // 'b'
e(null)                        // TypeError