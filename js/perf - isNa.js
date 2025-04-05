isNa1 = x => x === undefined || x === null || Number.isNaN(x);
isNa2 = x => !Number.isFinite(x) && x !== Infinity;

y = [undefined, null, NaN, Infinity, Math.random(), Math.round(Math.random()*1e3)];
yLen = y.length;
a = [...Array(10_000_000)].map(() => y[Math.round(Math.random()*yLen)]);

assess = fn => {
	var r = [...Array(100)].map(t => (t=performance.now(), a.filter(fn), performance.now()-t));
	return r.reduce((r,i)=>r+=i) / r.length;
};

assess(isNa1); // 482.67
assess(isNa2); // 531.26
