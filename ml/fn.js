sigmoid = x => 1 / (1 + Math.pow(Math.E, -x));


function computeClassWeight(y=[]) {
	// y = [...Array(2000)].map((_,i)=> i<500?1:0);
	let count = y.reduce((r,v) => (r.set(v, (r.get(v) || 0) + 1), r), new Map());
	count = [...count].map(i=> i[1]);
	
	let nClasses = count.length;
	let nSamples = y.length;
	
	let a = count.map(i=> nSamples / (nClasses * i));
	let o = Object.fromEntries(a.entries());
	
	return o;
}