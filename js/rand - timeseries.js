function randomBars(len=400, seed=100) {
	let bars = [seed];
	let randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
	for (let i=1; i<len; i++) {
		let prev = bars[i-1];
		let r = prev * 0.05;
		let val = randInt(prev-r, prev+r);
		let k = 2;
		while (val === prev) {
			val = randInt(prev-r, prev+r*k);
			k *=2;
		}
		bars.push(val);
	}
	return bars;
}