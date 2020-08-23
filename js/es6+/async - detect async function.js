myfn.constructor.name === 'AsyncFunction'

myfn[Symbol.toStringTag] === 'AsyncFunction'

String(myfn.constructor) === 'function AsyncFunction() { [native code] }'

/^async/.test(''+myfn)

const AsyncFunction = (async ()=>{}).constructor;
myfn instanceof AsyncFunction === true

// node v10+
const util = require('util');
util.types.isAsyncFunction(async function () {});

// detect in transpiled code
const value = myfn();
value && typeof value.then === 'function';

myfn() instanceof Promise;