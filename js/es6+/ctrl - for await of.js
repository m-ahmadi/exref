for await (variable of iterable) {
  statement
}
// iterates over sync/async iterable


for (let value of iterable) {
	console.log(i);
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