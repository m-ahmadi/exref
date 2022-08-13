await new Promise(r => setTimeout(r, 2000));

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
	console.log('wait for 2 seconds...');
	await sleep(2000);
	console.log('2 secconds passed');
	
	for (let i = 0; i < 6; i++) {
		if (i > 2) await sleep(2000);
		console.log(i);
	}
}

foo();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// a usage with initializing multiple promises at once
var ms = () => console.log((performance.now()-t).toFixed(0), 'ms');
var arr = [1,2,3,4];
async function asink(n) { return new Promise(r => setTimeout(r, n*500, n)) }

// instead of begining at same time
t = performance.now();
await Promise.allSettled( arr.map(asink) );
ms(); // 2


// put delay between each execution
t = performance.now();
var proms = [];
for (const i of arr) {
	await new Promise(r => setTimeout(r, 1000)); // w8
	proms.push( asink(i) );
}
ms(); // 4
await Promise.allSettled(proms);
ms(); // 6
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@