// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

async function* foo() {
	yield 1;
	yield 2;
}
for await (const num of foo()) console.log(num);



function* f () {
	const url = 'https://jsonplaceholder.typicode.com/users/';
	yield fetch(url+1);
	yield fetch(url+2);
	yield fetch(url+3);
}
for await (const r of f()) {
	const user = await r.json();
	console.log(user.name);
}



async function* asyncGenerator() {
	let i = 0;
	while (i < 3) {
		await new Promise(r => setTimeout(r, 1000));
		yield i++;
	}
}
for await (let num of asyncGenerator()) console.log(num);



function* generator() {
	yield 0;
	yield 1;
	yield Promise.resolve(2);
	yield Promise.resolve(3);
	yield 4;
}
for await (let num of generator()) console.log(num);
