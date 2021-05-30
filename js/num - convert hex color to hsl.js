function hex2hsl(c='#ffffff') {
	let [r,g,b] = [c.slice(1,3), c.slice(3,5), c.slice(5,8)].map(i=>parseInt(i,16)/255);
	let [n,x] = [Math.min(r,g,b), Math.max(r,g,b)];
	let [h,s,l] = [0, 0, (x+n)/2];
	
	if (x !== n) {
		let d = x-n;
		s = l > 0.5 ? d/(2-x-n) : d/(x+n);
		h =
			x === r ? (g-b) / d+(g<b?6:0) :
			x === g ? (b-r) / d+2 :
			x === b ? (r-g) / d+4 : h;
		h /= 6;
	}
	
	return [h*360, s*100, l*100];
}