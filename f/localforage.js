// includes: localforage.js
// cdn: https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js
localforage.getItem('key').then(value => )           // get item (returns null if key does not exist)
localforage.getItem('key', (err, value) => )         // get item with callback

localforage.setItem('key', 'value').then(value => )  // set item
localforage.setItem('key', 'value', (err, value) =>) // set item with callback
localforage.setItem('arr', [1, 'a']).then(value => ) // store non-strings (impossible in localStorage)

localforage.removeItem('key').then(doSomething)      // remove item

localforage.clear().then(doSomething)                // removes every key from database
localforage.length().then(numberOfKeys => )          // get the number of keys in the store
localforage.key(2).then(keyName => )                 // get name of a key from its id
localforage.keys().then(keys => )                    // get the list of all keys in the store
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// catch errors:
localforage.getItem('key').then(doSomething).catch(function (err) {
	console.log(err);
});
localforage.getItem('key').then(doSomething).catch(console.log);
localforage.getItem('key').catch(console.log);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// settings:
localforage.setDriver(localforage.LOCALSTORAGE) // force usage of driver(s) if available
localforage.setDriver([localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]) // default order
localforage.config(options)
	// set & persist options.
	// must be called before any other localForage calls.
	// items set with this method persist after driver changes
localforage.config({
	// defaults:
	driver: [localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE], // preferred driver(s) to use
	name: 'localforage',        // database name
	size: 4980736,              // database size in bytes (used only in WebSQL)
	storeName: 'keyvaluepairs', // datastore name. alphanumeric chars & underscores. (non-alphanumeric chars are converted to underscores)
	version: 1.0,               // database schema version (used only in WebSQL & IndexedDB)
	description: '',            // database description (for developer usage)
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// iterate:
localforage.iterate(function (value, key, iterationNumber) {
	console.log([key, value]);
}).then(function () {
	console.log('iteration completed');
});

// iterate but exit early:
localforage.iterate(function (value, key, iterationNumber) {
	if (iterationNumber < 3) {
		console.log([key, value]);
	} else {
		return [key, value];
	}
}).then(function(result) {
	console.log('iteration completed, last iterated pair: ', result);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@