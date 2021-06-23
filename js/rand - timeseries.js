function randomBars(len=400, seed=100) {
	const bars = [seed];
	const randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
	for (let i=1; i<len; i+=1) {
		const prev = bars[i-1];
		const r = prev * 0.05;
		let value = randInt(prev-r, prev+r);
		
		let k = 2;
		while (value === prev) {
			value = randInt(prev-r, prev+r*k);
			k *=2;
		}
		bars.push(value);
	}
	return bars;
}