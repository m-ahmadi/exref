// index.mjs
import x from './foo.mjs';
console.log(x);
// foo.mjs
export default 'hello'

// or

// package.json
{ type: "module" }
// index.js
import x from './foo.js';
console.log(x);
// foo.js
export default 'hello'