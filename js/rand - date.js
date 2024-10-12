// generate random dates with random minute|second intervals between them
// extra1: set time of starting date to 09:00
// extra2: once reached certain hour of day, move to next day and set time randomly between 09:00 and 12:00
function genSequentialDatesWithRandomIntervals(n=0, startDate, methods=['Minutes', 'Seconds'], increaseBounds=[10,500]) {
	if (!startDate) throw Error('Must provide `startDate`.');
	const d = startDate;
	d.setHours(9); // extra1
	const a = [...Array(n)];
	const maxIdx = methods.length - 1;
	const rand = (min, max) => Math.round(Math.random() * (max - min) + min);
	const dates = a.map(() => {
		const method = methods[rand(0, maxIdx)];
		const increase = rand(...increaseBounds);
		d['set'+method](d['get'+method]() + increase);
		if (d.getHours() > 16) { // extra2
			d.setDate(d.getDate()+1);
			d.setHours(rand(9,12));
		}
		return new Date(+d);
	});
	return dates;
}

genSequentialDatesWithRandomIntervals(5, new Date(2020,0,1)) /*
Wed Jan 01 2020 12:10:00
Wed Jan 01 2020 12:26:00
Thu Jan 02 2020 11:22:00
Thu Jan 02 2020 11:29:10
Thu Jan 02 2020 11:30:06
*/


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
