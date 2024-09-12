var resPromise = import(moduleName)
var resPromise = import(moduleName, ?options={with:{}})

// import keyword called as a function dynamically imports a module
// when used this way, it returns a promise

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var module = await import('./my-module.js');
import('./my-module.js').then((module) => {});

// side-effects only
await import('./my-module.js');

// default import (must rename `default` to something else)
const { default: myDefault, foo } = await import('/modules/my-module.js');

// import attributes
import('./data.json', {with: {type: 'json'}});
