var v = {
	'20201102': [1,2,3,4,5,6,7,8,9],
	'20201104': [1,2,3,4,5,6,7,8,9],
	'20201107': [1,2,3,4,5,6,7,8,9],
	'20201108': [1,2,3,4,5,6,7,8,9],
	'20201109': [1,2,3,4,5,6,7,8,9],
	'20201110': [1,2,3,4,5,6,7,8,9],
	'20201111': [1,2,3,4,5,6,7,8,9]
};
var ids = [...new Array(2000)].map(() => Math.ceil(Math.random()*1e17)+'');


// read
var o;
(async () => {
	await localforage.clear();
	for (let id of ids) await localforage.setItem(id, {...v});
	
	o = {};
	console.time('a');
	for (let id of ids) o[id] = await localforage.getItem(id);
	console.timeEnd('a'); // 700 ms
	
	o = {};
	console.time('b');
	await localforage.iterate((value, key) => (o[key] = value, undefined));
	console.timeEnd('b'); // 110
	
	o = {};
	console.time('c');
	await localforage.iterate((value, key) => {
		if (ids.indexOf(key) !== -1) o[key] = value;
	});
	console.timeEnd('c'); // 140 ms
})();

// write
(async () => {
	await localforage.clear();
	
	console.time('a');
	for (let id of ids) await localforage.setItem(id, {...v});
	console.timeEnd('a'); // 4000 ms
	
	await localforage.clear();
	
	var o = ids.reduce((o,k)=> (o[k] = {...v}, o), {});
	console.time('b');
	await localforage.setItem('entire', o);
	console.timeEnd('b'); // 13 ms
})();

// read - filter whole obj
(async () => {
	await localforage.clear();
	var src = ids.reduce((o,k)=> (o[k] = {...v}, o), {});
	await localforage.setItem('entire', src);
	
	console.time('a');
	var o = {};
	await localforage.iterate((value, key) => {
		if (key === 'entire') {
			for (let i of ids) o[i] = value[i];
		}
	});
	console.timeEnd('a'); // 20 ms
	
	console.time('b');
	var o = await localforage.getItem('entire');
	console.timeEnd('b'); // 6 ms
})();