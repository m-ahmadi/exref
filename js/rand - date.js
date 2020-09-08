// not random
function getDummyDates(n=30) {
	const today = new Date();
	
	const day = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear();
	
	const res = [];
	for (let i=0; i<n; i++) {
		let d = day - i;
		let m = month;
		
		if (d === 0) {
			d = 31;
			m--;
		}
		const v = new Date(year, m, d);
		// const v = (year*10000) + ((m+1)*100) + d;
		res.push(v);
	}
	return res;
}