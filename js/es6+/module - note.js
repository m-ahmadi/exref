// default import: (person has to have a default export)
import person from './person';
import * as m from './person';

// named import: (person has to have a named export)
import { person } from './person';

// inside a module, top-level value of `this` is undefined
this // undefined

// how to access global object in a cross-environment way (browser & node & web-worker)
globalThis
globalThis === global // true in node
globalThis === window // true in browser
globalThis === self   // true in web-worker
