/*
	Number	String	Date	RegExp	Object	Array	Class		Set		Map		ArrayBuffer		TypedArray	DataView
	✅			✅			✅		✅			✅			✅		✅			❌		❌		❌						❌					❌
*/

function dequal(foo, bar) {
	if (foo === bar) return true;
	
	const has = Object.prototype.hasOwnProperty;
	let ctor, len;
	
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len = foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

dequal(1, 1)                 // true
dequal({}, {})               // true
dequal('foo', 'foo')         // true
dequal([1, 2, 3], [1, 2, 3]) // true
dequal(dequal, dequal)       // true
dequal(/foo/, /foo/)         // true
dequal(null, null)           // true
dequal(NaN, NaN)             // true
dequal([], [])               // true
dequal(
  [{ a:1 }, [{ b:{ c:[1] } }]],
  [{ a:1 }, [{ b:{ c:[1] } }]]
) // true
 
dequal(1, '1')               // false
dequal(null, undefined)      // false
dequal({ a:1, b:[2,3] }, { a:1, b:[2,5] }) // false
dequal(/foo/i, /bar/g)       // false