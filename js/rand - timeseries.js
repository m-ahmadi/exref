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

function randCandles(len=100, {open=90,high=110,low=80,close=100}={}) {
	let r = [{open,high,low,close}];
	let randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
	let fmt = Intl.DateTimeFormat('en-ca').format;
	let p = (n,p) => n*p+n;
	let d = new Date();
	d.setDate(d.getDate()-len);
	for (let i=0; i<len; i++) {
		let time = fmt(d.setDate(d.getDate()+1));
		if (i===0) { r[i].time=time; continue; }
		let prev = r[i-1];
		let vlt = randInt(3,7) * 0.01;
		let [min, max] = [p(prev.close,-vlt), p(prev.close,vlt)];
		let [n, k] = [randInt(min, max), 2];
		while (n===prev.close) { n=randInt(min,max+k); k*=2; }
		let open = randInt(p(prev.close,-.001), p(prev.close,.001));
		let high = randInt(p(n,-.01), p(n,.1));
		let low  = randInt(p(n,-.1),  p(n,-.01));
		let close = n;
		r.push({time, open, high, low, close});
	}
	return r;
}

function randCandles_(numCandles, initialPrice=100, volatility=0.01, minPrice=1) {/*ai generated*/
	const candles = [];
	
	let price = initialPrice;
	
	const round = n => +n.toFixed(4);
	const fmt = Intl.DateTimeFormat('en-ca').format;
	const d = new Date();
	d.setDate(d.getDate() - numCandles);
	
	for (let i=0; i<numCandles; i++) {
		// open price is close of previous candle (or initial price for first candle)
		const open = price;
		
		// random price movement: simulate volatility
		const move = (Math.random() - 0.5) * volatility * open;
		const high = open + Math.abs(move) * (Math.random() * 2 + 1); // high is above open
		const low = open - Math.abs(move) * (Math.random() * 2 + 1);  // low  is below open
		
		// ensure high and low are valid (low < high)
		const actualHigh = Math.max(high, low);
		const actualLow = Math.min(high, low);
		
		// close is somewhere between low and high
		const close = actualLow + Math.random() * (actualHigh - actualLow);
		
		// update price for next candle
		price = close;
		
		// ensure price doesn't go below minimum
		if (price < minPrice) price = minPrice;
		
		candles.push({
			time: fmt(d.setDate(d.getDate()+1)),
			open: round(open),
			high: round(actualHigh),
			low: round(actualLow),
			close: round(close),
		});
	}
	
	return candles;
}
