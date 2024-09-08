// https://nodejs.org/docs/latest/api/esm.html

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// enabling
// https://nodejs.org/docs/latest/api/esm.html#enabling

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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import built-in node modules
import { readFile } from 'node:fs';
import { readFileSync } from 'node:fs';
import fs, { readFileSync } from 'node:fs';
import EventEmitter from 'node:events';
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// __filename __dirname
// https://nodejs.org/docs/latest/api/esm.html#no-__filename-or-__dirname

console.log(import.meta.filename);
console.log(import.meta.dirname);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
