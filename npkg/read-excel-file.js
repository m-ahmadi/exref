const readXlsxFile = require('read-excel-file/node');

readXlsxFile('D://stockwork/signal-status.xlsx').then(rows => {
	/*
		`rows` is an array of rows
		each row being an array of cells

		[ [1, 2], [3, 4], [5, 6] ]

		1 2
		3 4
		5 6
	*/
});