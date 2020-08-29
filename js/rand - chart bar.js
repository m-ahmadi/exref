function randomBars(len=400) {
	const bars = [100];
	const randInt = (min, max) => Math.floor( Math.random() * (Math.floor(max)-Math.ceil(min)) ) + Math.ceil(min);
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