Array.prototype.toString.call(v) === '[object Object]'

// accept functions as objects
v !== null && (typeof v === 'object' || typeof v === 'function')

// don't accept arrays
v !== null && typeof v === 'object' && Array.prototype.toString.call(v) !== '[object Array]' // !$.isArray(foo)

typeof {}     // 'object'
typeof null   // 'object'
null === null // true