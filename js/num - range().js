function range(start=0, stop=0, step=1) {
	let r = [];
	for (let i=start; i<=stop; i+=step) r.push(i);
	return r;
}