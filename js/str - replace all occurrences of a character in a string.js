'foobar'.replace(/foo/g, 'bar')	// g flag to replace all instances

var pattern = 'bar';
new RegExp(pattern, 'g');  // /bar/g

// another way (slower)
'didly doodly doo'.split('d').join('') // "ily ooly oo"