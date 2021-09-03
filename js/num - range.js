// step
function range(start=0, stop=0, step=1) {
	let r = [];
	for (let i=start; i<=stop; i+=step) r.push(i);
	return r;
}

// random
var r1030 = [...Array(20)].map(_=> Math.floor(Math.random()*21)+10);
var r6080 = [...Array(20)].map(_=> Math.floor(Math.random()*21)+60);