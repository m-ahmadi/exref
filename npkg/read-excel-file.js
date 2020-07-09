const readXlsxFile = require('read-excel-file/node');

readXlsxFile('file.xlsx').then(rows => {
	/*
		`rows` is an array of rows
		each row being an array of cells

		[ [1, 2], [3, 4], [5, 6] ]

		1 2
		3 4
		5 6
	*/
});

const opts = {
	sheet:     sheetIndex=1 | 'sheet name', // reads first sheet by default (1-indexed)
	schema:    {},
	getSheets: false
};

readXlsxFile(file, opts).then(rows => );
const rows = await readXlsxFile(file, opts);


readXlsxFile(file, {getSheets: true}).then(sheets => {
	sheets // [{ name: 'Sheet1' }, { name: 'Sheet2' }]
});