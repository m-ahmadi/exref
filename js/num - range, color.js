function colorRange(a=[255,0,0], b=[0,0,255], steps=3) {
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

colorRange([255,0,0], [0,0,255], 3) // [ [255,0,0], [128,0,128], [0,0,255] ]