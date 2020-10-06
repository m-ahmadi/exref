// better
const isNode    = (function(){return typeof global!=='undefined'&&this===global})();
const isBrowser = (function(){return typeof window!=='undefined'&&this===window})();

// simple
const isNode    = typeof process !== 'undefined' && process.versions && typeof process.versions.node !== 'undefined';
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

// webworker
typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other bad node detections

// lil bit better (detects node versions >= 3.0.0)
typeof process !== 'undefined' && (process.release.name.search(/node|io.js/) !== -1)

// a bit better
typeof process === 'object' && process.toString() === '[object process]'

// better
typeof window === 'undefined'

// worst - this detects CommonJS support, which browsers may support (ie: requirejs):
typeof module !== 'undefined' && module.exports
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@