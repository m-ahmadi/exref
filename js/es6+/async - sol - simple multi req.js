// simple

let urls = [...Array(5)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));

let proms = await Promise.allSettled( urls.map(i => fetch(i)) );

while (proms.some(i=>i.reason)) {
	let errs = proms.map((v,i)=> v.reason && i).filter(i=>i>=0);
	(await Promise.allSettled( errs.map(i=> fetch(urls[i]) ) ))
		.forEach((v,i) => proms[ errs[i] ] = v);
}

let posts = await Promise.all( proms.map(i=> i.value.json()) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// with sleep after each batch

let sleep = 1000;

let urls = [...Array(5)].map((_,i) => 'https://jsonplaceholder.typicode.com/posts/'+(i+1));

let batch = async a => { let p=[]; for (let i of a) await new Promise(r=>setTimeout(r,sleep)), p.push(fetch(i)); return p; };

let proms = await Promise.allSettled( await batch(urls) );

while (proms.some(i=>i.reason)) {
	let errs = proms.map((v,i)=> v.reason && i).filter(i=>i>=0);
	(await Promise.allSettled( await batch(errs.map(i=> urls[i])) ))
		.forEach((v,i) => proms[ errs[i] ] = v);
}

let posts = await Promise.all( proms.map(i=> i.value.json()) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@