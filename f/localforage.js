// includes: localforage.js
/* cdn:
	https://cdn.jsdelivr.net/npm/localforage
	https://cdnjs.cloudflare.com/ajax/libs/localforage/1.9.0/localforage.min.js
*/
localforage.method(...): <Promise>  |  localforage.method(..., ?cb)

localforage.getItem(key)
localforage.setItem(key, value)
localforage.removeItem(key)
localforage.clear()
localforage.length()                         : int
localforage.key(keyIndex) // 👎
localforage.keys()                           : ['',...]
localforage.iterate(iterator=(value,key,i)=>): []
localforage.setDriver(driverName) // force usage of driver(s) if available
localforage.setDriver([driverName, nextDriverName])
localforage.config(options={
	driver:      [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
	name:        'localforage',
	size:        4980736,
	storeName:   'keyvaluepairs',
	version:     1.0,
	description: '',
})
localforage.createInstance(options): store
localforage.dropInstance({name: '', storeName: ''})

// possible types that can be stored
String Number Object Array ArrayBuffer Blob
Int8Array     Int16Array         Int32Array
Uint8Array    Uint8ClampedArray
Uint16Array   Uint32Array
Float32Array  Float64Array
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

import * as localforage from 'localforage'; // typescript, webpack, ...
import localforage from 'localforage';      // only if allowSyntheticDefaultImports in `tsconfig.json`

// basic
localforage.getItem('key').then(value =>)           // get item (returns null if key does not exist)
localforage.getItem('key', (err, value) =>)         // get item with callback
localforage.setItem('key', 'value').then(value =>)  // set item
localforage.setItem('key', 'value', (err, value)=>) // set item with callback
localforage.setItem('arr', [1, 'a']).then(value =>) // store non-strings (impossible in localStorage)
localforage.removeItem('key').then(doSomething)     // remove item
localforage.clear().then(doSomething)                // removes every key from database
localforage.length().then(numberOfKeys => )          // get the number of keys in the store
localforage.key(2).then(keyName => )                 // get name of a key from its id
localforage.keys().then(keys => )                    // get the list of all keys in the store

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
}).then(function (result) {
	console.log('iteration completed, last iterated pair: ', result);
});

// catch errors:
localforage.getItem('key').then(doSomething).catch(function (err) {
	console.log(err);
});
localforage.getItem('key').then(doSomething).catch(console.log);
localforage.getItem('key').catch(console.log);

// settings:
localforage.setDriver(localforage.LOCALSTORAGE) // force usage of driver(s) if available

localforage.config(options={ // must be called first thing
	driver:      [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
	name:        'localforage',    // db name
	size:        4980736,          // db size in bytes                             (used only in websql)
	storeName:   'keyvaluepairs',  // store name. alphanumeric chars & underscores (non-alphanumeric chars are converted to underscores)
	version:     1.0,              // db schema version                            (used only in websql & indexeddb)
	description: '',               // db description                               (for developer usage)
	// items set with this method persist after driver changes
})


// instance
var store = localforage.createInstance({name: 'nameHere'});
var otherStore = localforage.createInstance({name: 'otherName'});
store.setItem('key', 'value')
otherStore.setItem('key', 'value2') // does not affect the other

// multiple stores that point to same instance
var table1 = localforage.createInstance({name: 'mydb', storeName: 'tableOne'});
var table2 = localforage.createInstance({name: 'mydb', storeName: 'tableTwo'});