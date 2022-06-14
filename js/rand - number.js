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

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// standard normal distribution

// box-muller transform
function randn() {
	let [u, v] = [0, 0];
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
//minmax([...Array(1000)].map(randn)) // [-3.126482221938456, 3.0262664871559735]

function randn() {/*between 0 and 1 inclusive*/
	let [u, v] = [0, 0];
	while(u === 0) u = Math.random();
	while(v === 0) v = Math.random();
	let num = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
	num = num / 10 + 0.5;                   // translate to 0 -> 1
	if (num > 1 || num < 0) return randn(); // resample between 0 and 1
	return num;
}

function randn(min, max, skew) {/*between min max with skew*/
	let [u, v] = [0, 0];
	while(u === 0) u = Math.random();
	while(v === 0) v = Math.random();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2 * Math.PI * v);

	num = num / 10 + 0.5; // translate to 0 -> 1
	if (num > 1 || num < 0) {
		num = randn(min, max, skew); // resample between 0 and 1 if out of range
	} else {
		num = Math.pow(num, skew);   // skew
		num *= max - min;            // stretch to fill range
		num += min;                  // offset to min
	}
	return num;
}

// central limit theorem
function randn() {
	let r = 0;
	for (let i=0; i<6; i++) r += Math.random();
	return r / 6;
}
function randn(start, end) {
	return Math.floor(start + gaussianRand() * (end - start + 1));
}

function randn(mu=0, sigma=1, nsamples=6){
	let r = 0;
	for (let i=0; i<nsamples; i++) r += Math.random();
	return sigma * (r - nsamples / 2) / (nsamples / 2) + mu;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@