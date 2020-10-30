dayDiff(new Date(2020,2,27), new Date(2020,3,27)) // 31
dayDiff(new Date(2020,2,27), new Date(2020,2,25)) // -2

function dayDiff(date1, date2) {
	const ts1 = +date1;
	const ts2 = +date2;
//const diffTime = Math.abs(ts2 - ts1); // positive-only
	const diffTime = ts2 - ts1; // eg: 2678400000 milliseconds
	const msPerDay = (1000 * 60 * 60 * 24);
	const diffDays = Math.ceil(diffTime / msPerDay);
	return diffDays;
}