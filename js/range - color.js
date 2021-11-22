function colorRange(a='ff0000', b='0000ff', steps=3) {//a=[255,0,0], b=[0,0,255]
	[a,b] = [a,b].map(h=>  h.match(/[0-9a-fA-F]{2}/g).map(i=>parseInt(i,16)) );
	let stepFactor = 1 / (steps - 1);
	let { round } = Math;
	let res = [];
	
	for (let i=0; i<steps; i++) {
		let factor = stepFactor * i;
		let step = a.map((n,j)=> round( n+factor * (b[j]-n) ));
		res.push(step);
	}
	
	return res;
}

colorRange('ff0000', '0000ff', 3) // [ [255,0,0], [128,0,128], [0,0,255] ]