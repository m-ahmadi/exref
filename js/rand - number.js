// float between 0 and 1
Math.random();  

// float between min and max
function randFloat(min=0, max=10) {
	return Math.random() * (max - min) + min;
}

// int between min and max
function randInt(min=0, max=10, inclusive=true) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor( Math.random() * (max - min) ) + min;
	return Math.floor( Math.random() * (max - min + 1) ) + min; // inclusive (including max)
	
	return Math.floor( Math.random() * (max - min + (inclusive?1:0)) ) + min;
}

// using Math.round() for rounding instead of ceil and floor, will give you a non-uniform distribution