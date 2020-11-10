/*
objectStore is like a table
stroage up to 50-80% of free disk space

---------------------------------------------------
           total % of disk    allowed per domain
---------------------------------------------------
chrome:    80%                75% of total
firefox    50% ?              2 GB
safar:     50% ?              1 GB

*/

// check total and used space
var quota = await navigator.storage.estimate();
quota.quote // total space
quote.used  // used  space
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic
let db;
const request = indexedDB.open('dbName', 1);

request.onsuccess = function (event) {
	db = event.target.result;
};

request.onerror = function (event) {
	console.error('Database error: ' + event.target.errorCode);
};

request.onupgradeneeded = function (event) {
	db = event.target.result;
	const store = db.createObjectStore('name', { keyPath: 'myKey' });
	store.createIndex('name', 'name', { unique: false });
	store.createIndex('email', 'email', { unique: true });
	store.transaction.oncomplete = function (event) {
		const transaction = db.transaction('customers', 'readwrite');
		const store = transaction.objectStore('customers');
		
		store.add({ ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' });
		store.add({ ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' });
		
		transaction.oncomplete = function () {
			console.log('stored.');
		};
		transaction.onerror = function (event) {
			console.log('error storing: ' + event.target.errorCode);
		};
	};
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// read data
let db;
const request = indexedDB.open('dbName', 1);

request.onsuccess = function (event) {
	db = event.target.result;
	
	const transaction = db.transaction('customers');
	const objectStore = transaction.objectStore('customers');
	const request = objectStore.get('444-44-4444');
	request.onsuccess = function (event) {
		console.log('SSN 444-44-4444: ' + request.result.name);
	};

	// short:
	db.transaction('customers').objectStore('customers').get('444-44-4444').onsuccess = function (event) {
		console.log('SSN 444-44-4444:' + event.target.result.name);
	};
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// delete data
let db;
const request = indexedDB.open('dbName', 1);

request.onsuccess = function (event) {
	db = event.target.result;
	
	var request = db.transaction('customers', 'readwrite')
		.objectStore('customers')
		.delete('444-44-4444');
	request.onsuccess = function(event) {
		console.log('deleted.');
	};
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBFactory
indexedDB.databases().then(console.log) // [ {name, version}, {}, ... ]
//----------------------------------------------------------------------
// IDBFactory.open()
const request = indexedDB.open(name, version?) /* IDBOpenDBRequest
	creates database if doesn't exist.
	triggers `onupgradeneeded` if database doesn't exist or version is new.
	version must be integer. decimal numbers are rounded to lower iteger (2.4 => 2) */

// events:
request.onsuccess = function (event) {
	// called if `onupgradeneeded` exits successfully.
	event.target.result // IDBDatabase
};    
request.onerror = function (e) {
	e.target.errorCode
};
request.onupgradeneeded = function (e) {
	// called when you create a new database or increase the version number of an existing database.
	event.target.result // IDBDatabase
};    
request.blocked
request.versionchange
//----------------------------------------------------------------------
// IDBFactory.deleteDatabase()
const req = indexedDB.deleteDatabase(name);
req.onsuccess = function (e) { console.log('deleted.') };
req.onerror   = function (e) { console.log('couldn\'t delete.') };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBDatabase
let db;
db.close()
db.createObjectStore()
db.deleteObjectStore()
db.transaction()

db.onerror = function (event) {};
db.onversionchange = function (event) {}; // fires when `onupgradeneeded` fires.
const objectStore = db.createObjectStore('storeName', { keyPath: 'myKey' });
const transaction = db.transaction('storeName', 'readwrite');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBDatabase.createObjectStore()
db.createObjectStore(name, options?): IDBObjectStore
// options:
{ keyPath: '',    autoIncrement: false } // any value. must provide key when adding a new value.
{ keyPath: '',    autoIncrement: true }  // any value. auto-generated key. different keys can be used.
{ keyPath: 'key', autoIncrement: false } // only objects. objects must have a property with the same name as keyPath.
{ keyPath: 'key', autoIncrement: true }  // only objects. auto-generated keys are stored in object's prop with the same name as keyPath.
	// if prop already exists, prop value is used as key rather than generating a new key.
	
const store = db.createObjectStore('name');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBDatabase.transaction()
db.transaction(storeNames: string[] | string, mode?= 'readonly'): IDBTransaction
// modes:
'readonly' // default
'readwrite' // use only when necessary (only one readwrite transaction for an object store)
'readwriteflush'
'versionchange'
const trans = db.transaction('storeName' | db.objectStoreNames); // specify only what you need.
const store = trans.objectStore('storeName');

// props: (all read-only)
trans.db
trans.error
trans.mode
trans.objectStoreNames

// methods:
trans.abort()
trans.objectStore()
trans.commit()

// events:
trans.oncomplete = function(event) {};
trans.onerror    = function(event) {};
trans.onabort    = function(event) {};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBObjectStore 
const store = db.createObjectStore('storeName');

store.transaction.oncomplete = function (event) {
	// called when objectStore creation is done.
	const store = db.transaction('storeName', 'readwrite').objectStore('customers');
};

store.indexNames    // read-only
store.keyPath       // read-only
store.name
store.transaction   // read-only
store.autoIncrement // read-only

store.add(): IDBRequest // all the unspecified ones return IDBRequest
store.clear()
store.count()
store.createIndex(): IDBIndex
store.delete()
store.deleteIndex(): void
store.get()
store.getKey()
store.getAll()
store.getAllKeys()
store.index(): void
store.openCursor()
store.openKeyCursor()
store.put()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// IDBObjectStore.createIndex()
// only on object stores that holds objects, not primitives.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another basic example:
let db;
let dbReq = indexedDB.open('myDatabase', 1);
dbReq.onupgradeneeded = function(event) {
  db = event.target.result;
  let notes = db.createObjectStore('notes', { autoIncrement: true });
}
dbReq.onsuccess = function(event) {
  db = event.target.result;
	addStickyNote(db, 'Sloths are awesome!');
  addStickyNote(db, 'Order more hibiscus tea');
  addStickyNote(db, 'And Green Sheen shampoo, the best for sloth fur algae grooming!');
}
dbReq.onerror = function(event) {
  console.error('error opening database: ' + event.target.errorCode);
}
function addStickyNote(db, message) {
  const tx = db.transaction(['notes'], 'readwrite');
  const store = tx.objectStore('notes');
  store.add({ text: message, timestamp: Date.now() });
  tx.oncomplete = function() { console.log('stored note!') };
  tx.onerror = function (event) {
    console.log('error storing note: ' + event.target.errorCode);
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// browser support
window.indexedDB      = window.indexedDB      || window.mozIndexedDB         || window.webkitIndexedDB  || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: 'readwrite'};
window.IDBKeyRange    = window.IDBKeyRange    || window.webkitIDBKeyRange    || window.msIDBKeyRange;

if (!window.indexedDB) console.log('browser doesn't support a stable version of IndexedDB.');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@