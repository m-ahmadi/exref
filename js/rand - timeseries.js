function randomSerie(n=100) {
	let cumsum = 0;
	return [...Array(n)].map(() => Math.random()*(Math.random()<.5?-100:100)).map((v,i,a) => cumsum += i>0 ? v+a[i-1] : 0);
}

function randomSerie(len=400, seed=100) {
	let r = [seed];
	let randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
	for (let i=1; i<len; i++) {
		let prev = r[i-1];
		let p = prev * 0.05;
		let n = randInt(prev-p, prev+p);
		let k = 2;
		while (n===prev) {n = randInt(prev-p, prev+p*k); k*=2;}
		r.push(n);
	}
	return r;
}

function randCandles(size=0, seed=100, dp=2, strtime=true) {
	const res = [];
	
	const d = new Date();
	d.setDate(d.getDate() - size);
	
	// utils
	const round = n => +n.toFixed(dp);
	const rn = (a,b) => Math.floor(Math.random()*(b-a+1))+a; // rand int between min max inclusive
	const p = (n, p) => n * (1 + p); // updated number after a pct change
	const fmt = strtime ? Intl.DateTimeFormat('en-CA').format : n=>n;
	
	let pClose = seed;
	let pVlt = rn(3,6) / 100;
	
	for (let i=0; i<size; i++) {
		const time = fmt(d.setDate(d.getDate() + 1));
		
		// volatility clustering:  70% prev volatility, 30% new randomness
		let vlt = pVlt * .7 + (rn(2,7)/100) * .3;
		pVlt = vlt;
		
		// close around previous close with some volatility
		let close = rn(p(pClose, -vlt), p(pClose,  vlt));
		if (close === pClose) close += rn(-2,2) || 1;
		
		// open around where previously closed
		let open = rn(p(pClose, -.001), p(pClose, .001));
		
		// high/low relative to where opened
		let high = rn(p(open, -.01), p(open,  .05));
		let low  = rn(p(open, -.05), p(open, -.01));
		
		// make sure of high/low validity
		high = Math.max(high, open, close);
		low  = Math.min(low,  open, close);
		
		[open,high,low,close] = [open,high,low,close].map(round);
		
		res.push({time, open, high, low, close});
		pClose = close;
	}
	
	return res;
}
