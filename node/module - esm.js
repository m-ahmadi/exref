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
// dynamic import

// inside cjs
var fs = require('fs');
var fs = await import('fs'); // equivalent to above

// inside mjs
var fs = await import('fs');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// cross-runtime-environment way of writing a module
// (so that it works in both node & browser)

const isNode = detectNodeEnvironmentSomehow();

export let read, write; // available only in node

if (isNode) {
	const { readFileSync, writeFileSync } = await import('node:fs');
	read = p => readFileSync(p, 'utf8');
	write = (p,c) => writeFileSync(p, c);
}

export function add(...n) {// available everywhere
	return n.reduce((r,i),r+=i);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
