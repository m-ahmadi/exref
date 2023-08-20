const isBrowser =
	typeof window !== 'undefined' &&
	typeof window.document !== 'undefined';

const isBrowserNonESM = (function () {
	return typeof window !== 'undefined' && this === window
})();

const isNode =
	typeof process !== 'undefined' &&
	process.versions &&
	process.versions.node;

const isNodeNonESM = (function () {
	return typeof global !== 'undefined' && this === global
})();

const isWebWorker =
	typeof self === 'object' &&
	self.constructor &&
	self.constructor.name === 'DedicatedWorkerGlobalScope';

const isJsDom =
	(typeof window !== 'undefined' && window.name === 'nodejs') ||
	(typeof navigator !== 'undefined' &&
		(navigator.userAgent.includes('Node.js') ||
			navigator.userAgent.includes('jsdom')));

const isDeno =
	typeof Deno !== 'undefined' &&
	typeof Deno.version !== 'undefined' &&
	typeof Deno.version.deno !== 'undefined';
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other bad node detections

// lil bit better (detects node versions >= 3.0.0)
typeof process !== 'undefined' && (process.release.name.search(/node|io.js/) !== -1)

// a bit better
typeof process === 'object' && process.toString() === '[object process]'

// better
typeof window === 'undefined'

// worst - this detects CommonJS support, which browsers may support (ie: requirejs):
typeof module !== 'undefined' && module.exports
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@