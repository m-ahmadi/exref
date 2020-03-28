// float between 0 and 1
Math.random();  

// float between min and max
function randFloat(min, max) {
	return Math.random() * (max - min) + min;
}

// int between min and max
function randInt(min, max) {
	return Math.floor( Math.random() * (max-min) ) + min;
	return Math.floor( Math.random() * (max-min+1) ) + min; // inclusive (including max)
}
function randIntWithGuard(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return ...
}

// using Math.round() for rounding instead of ceil and floor, will give you a non-uniform distribution