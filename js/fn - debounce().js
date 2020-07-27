function debounce(fn, wait) {
	let timeout
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(this, args), wait);
	};
}

var foo = debounce(i => console.log(i), 0);

[...Array(1000)].forEach((v,i)=> foo(i) ) // only prints 999

// you can't return a value from debounced functions (use callbacks)
function foo(a,b) { return a+b }
_foo = debounce(foo, 0)
_foo(2,2) // undefined