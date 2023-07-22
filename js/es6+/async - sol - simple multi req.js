// simple

let urls = [...Array(5)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));

let proms = await Promise.allSettled( urls.map(i => fetch(i)) );

while (proms.some(i=>i.reason)) {
	let ers = proms.map((v,i)=> v.reason && i).filter(i=>i>-1);
	(await Promise.allSettled( ers.map(i=> fetch(urls[i]) ) ))
		.forEach((v,i) => proms[ ers[i] ] = v);
}

let posts = await Promise.all( proms.map(i=> i.value.json()) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// wait after each request

let wait = 1000;

let urls = [...Array(5)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));

let qu = async a => { let p=[]; for (let i of a) await new Promise(r=>setTimeout(r,wait)), p.push(fetch(i)); return p; };

let proms = await Promise.allSettled( await qu(urls) );

while (proms.some(i=>i.reason || i.value.status !== 200)) {
	let ers = proms.map((v,i)=> v.reason || v.value.status !== 200 ? i : -1).filter(i=>i>-1);
	(await Promise.allSettled( await qu(ers.map(i=> urls[i])) ))
		.forEach((v,i) => proms[ ers[i] ] = v);
}

let posts = await Promise.all( proms.map(i=> i.value.json()) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// split into batches (wait after each request + wait after each batch)

sleep = ms => new Promise(r=> setTimeout(r,ms));
splitArr = (a,size) => a.map((v,i)=> i % size === 0 ? a.slice(i, i+size) : undefined).filter(i=>i);

let urls = [...Array(60)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));

let qu = async a => {let p=[]; for (let i of a) await sleep(300), p.push(fetch(i)); return p};

let batches = splitArr(urls, 10);

let proms = [];

for (let batch of batches) {
	proms.push(await qu(batch));
	await sleep(5000);
}
proms = proms.flat();
proms = await Promise.all(proms);


while (proms.some(i=> i.status !== 200)) {
	let ers = proms.map((v,i)=> v.status !== 200 ? i : -1).filter(i=>i>-1);
	
	await sleep(5000);
	
	(await Promise.allSettled( await qu(ers.map(i=> urls[i])) ))
			.forEach((v,i) => proms[ers[i]] = v.value);
}

let posts = await Promise.all( proms.map(i=> i.json()) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// infinite retry until all done
// (turn network off mid-operation to see)
WAIT_AFTER_EACH_REQUEST = 100;
WAIT_AFTER_EACH_RETRY_PASS = 2000;
sleep = ms => new Promise(r=> setTimeout(r,ms));

let urls = [...Array(50)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));
let remains = new Map(urls.map(i => [i, undefined]));
let tot = remains.size;
let posts = [];

while (remains.size > 0) {
	for (let url of remains.keys()) {
		let err = 0;
		let spoil = () => err = 1;
		
		let r = await fetch(url).catch(spoil);
		if (err) continue;
		
		post = await r.json().catch(spoil);
		if (err) continue;
		
		remains.delete(url);
		posts.push(post);
		
		console.clear();
		console.log(tot-remains.size+'/'+tot);
		
		await sleep(WAIT_AFTER_EACH_REQUEST);
	}
	await sleep(WAIT_AFTER_EACH_RETRY_PASS);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// infinite retry until all done - wait til all settled at each retry pass
WAIT_AFTER_EACH_REQUEST = 100;
sleep = ms => new Promise(r=> setTimeout(r,ms));

let urls = [...Array(50)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));
let remains = new Map(urls.map(i=> [i, undefined]));
let tot = remains.size;
let posts = [];

while (remains.size > 0) {
	let proms = [];
	
	for (let url of remains.keys()) {
		let prom = fetch(url).then(resp => {
			if (resp.status === 200) {
				remains.delete(url);
				resp.json().then(post => {
					posts.push(post);
				});
			} else if (resp.status === 404) {
				remains.delete(url);
			}
			console.clear();
			console.log(tot-remains.size+'/'+tot);
		}).catch(()=> undefined);
		
		proms.push(prom);
		await sleep(WAIT_AFTER_EACH_REQUEST);
	}
	await Promise.allSettled(proms);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@