// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// exported values can be: function/object/class/generator/primitive (string/number/boolean/symbol/bigint/undefined/null).
// exported modules are in strict mode whether you declare them as such or not.
// default export: (only one per script, no semicolon needed unless it's an expression, can be used as fallback value)
export default function () {}
export default function namedFn() {}
export default { my: 'obj' }
export default const obj = { my: 'obj' };
export default class {}
export default class NamedClass{}
export default function* () {}
export default [1, 2];
export default 'myString';
export default let str = 'myString';
export default 1234;
export default var num = 1234;
export default true;
export default const bool = true;
export default expression;
export default 2 + 2;
export { name1 as default } // exports value of name1 in default import, not an object. name1 cannot be a literal value.

// named export (export several values, import is done with the same name)
export function namedFn() {}
export const obj = { my: 'obj' };
export class NamedClass {}
export function* namedFn() {}
export const arr = [1, 2];
export const str = 'myString';
export const number = 1234;
export const myBool =  true;
export expression;
export 2 + 2;
export { name1, name2 };
export let name1 = '', name2 = ''; // also var, const
export { variable1 as name1, variable2 as name2 }; // exports value of variable1 under the name: name1

// aggregate
export * from 'module.js';
export { name1, name2 } from 'module.js';
export { import1 as name1, import2 as name2 } from 'module.js';
// aggregate - default export
export bar from 'bar.js';                // invalid
export { default as bar } from 'bar.js'; // ok (re-export default export of 'bar.js' as named export)
export { default } from 'bar.js';        // ok (re-export default export of 'bar.js' as default export)
export { default, name2 } from 'bar.js'; // ok (↑... + named export the named export of 'bar.js')
// aggregate - example:
// shapes.js:
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
// main.js:
import { Square, Circle, Triangle } from './modules/shapes.js'; // use this instead of following:
import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';