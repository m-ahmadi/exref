/*
npm i dequal

cdn:
	https://cdn.jsdelivr.net/npm/dequal/
	https://cdn.jsdelivr.net/npm/dequal/lite/index.min.js    304 bytes
	https://cdn.jsdelivr.net/npm/dequal/dist/index.min.js    489 bytes
*/

import { dequal } from 'dequal';
 
dequal(1, 1); //=> true
dequal({}, {}); //=> true
dequal('foo', 'foo'); //=> true
dequal([1, 2, 3], [1, 2, 3]); //=> true
dequal(dequal, dequal); //=> true
dequal(/foo/, /foo/); //=> true
dequal(null, null); //=> true
dequal(NaN, NaN); //=> true
dequal([], []); //=> true
dequal(
  [{ a:1 }, [{ b:{ c:[1] } }]],
  [{ a:1 }, [{ b:{ c:[1] } }]]
); //=> true
 
dequal(1, '1'); //=> false
dequal(null, undefined); //=> false
dequal({ a:1, b:[2,3] }, { a:1, b:[2,5] }); //=> false
dequal(/foo/i, /bar/g); //=> false