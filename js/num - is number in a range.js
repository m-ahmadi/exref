function inRange(n, min, max) {
	return n >= min && n <= max;
}

function inRange(n, min, max) {
	return ( (n-min) * (n-max) <= 0 );
}