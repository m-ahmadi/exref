Math.random(); // float between 0 (inclusive) and 1 (exclusive)

function randFloat(min=0, max=1) {
	return Math.random() * (max - min) + min; // min: inclusive,  max: exclusive
}

function randInt(min=0, max=1, inclusiveMax=false) {
	[min, max] = [Math.ceil(min), Math.floor(max)];
	return Math.floor( Math.random() * (max - min) ) + min;     // min: inclusive,  max: exclusive
	return Math.floor( Math.random() * (max - min + 1) ) + min; // min: inclusive,  max: inclusive
	
	return Math.floor( Math.random() * (max - min + (inclusiveMax?1:0)) ) + min;
}

let randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);

// using Math.round() for rounding instead of ceil and floor, will give you a non-uniform distribution