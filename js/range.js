// step
function range(start=0, stop=0, step=1) {
	let r = [];
	for (let i=start; i<=stop; i+=step) r.push(i);
	return r;
}

// step - py
function range(...a) {
	let start, stop, step;
	let r = [];
	if (a.length < 2) {
		[stop=0, start=0, step=1] = a;
	} else {
		[start=0, stop=0, step=1] = a;
	}
	for (let i=start; i<stop; i+=step) r.push(i);
	return r;
}

// random
var r1030 = [...Array(20)].map(_=> Math.floor(Math.random()*21)+10);
var r6080 = [...Array(20)].map(_=> Math.floor(Math.random()*21)+60);