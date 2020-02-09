// import keyword called as a function dynamically imports a module.
// when used this way, it returns a promise.

import('/modules/my-module.js').then((module) => {
	// do something with the module.
});

// also supports the await keyword.
let module = await import('/modules/my-module.js');