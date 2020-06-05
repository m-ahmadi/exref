const downloadCounts = require('npm-download-counts');
const moment = require('moment');

const pkg = 'levelup';
const start = moment().subtract(1, 'months').toDate();
const end = new Date();

(async () => {
	
	const data = await downloadCounts(pkg, start, end);
	data // [ {day: "2020-05-05", count: 45490} {day: "2020-05-06", count: 44973}, ... ]
	
})();