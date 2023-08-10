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

function randCandles(len=100, {open=70,high=120,low=80,close=100}={}) {
	let r = [{open,high,low,close}];
	let randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
	let f = (n,p) => n*p+n; 
	for (let i=0; i<len; i++) {
		let d = new Date();
		d.setDate(d.getDate()-len+i);
		let time = [d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>(i=''+i, i.length>1?i:'0'+i)).join('-');
		if (i===0) { r[i].time=time; continue; }
		let prev = r[i-1].close;
		let [min, max] = [f(prev,-.05), f(prev,.05)];
		let [n, k] = [randInt(min, max), 2];
		while (n===prev) { n=randInt(min,max+k); k*=2; }
		r.push({
			time,
			open:  randInt(f(n,-.1), f(n,.1)),
			high:  randInt(f(n,-.01), f(n,.1)),
			low:   randInt(f(n,-.1), f(n,-.01)),
			close: n,
		});
	}
	return r;
}
