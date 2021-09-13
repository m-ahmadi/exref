// map range [a,...,b] to [c,...,d]

function scale(nums=[], newbound=[0,1]) {
	let [a,b] = [Math.min(...nums), Math.max(...nums)];
	if (a === b) for (let i=17, j=1e-17; i>0; i--, j=parseFloat('1e-'+i)) if (b+j > a) { b+=j; break; }
	let [c,d] = newbound;
	return nums.map(x => (x-a) * (d-c) / (b-a) + c);
//return nums.map(x => (x-a) / (b-a) * (d-c) + c);
//return nums.map(x => (d-c) * (x-a) / (b-a) + c);
}

// one number at a time
let nmap = (x,a,b,c,d) => (x-a) * (d-c) / (b-a) + c;
Number.prototype.map = function (a,b,c,d) {
  return (this-a) * (d-c) / (b-a) + c;
}