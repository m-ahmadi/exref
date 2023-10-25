// install:  https://github.com/exceljs/exceljs#importing
// https://cdn.jsdelivr.net/npm/exceljs/
'exceljs.min.js'                  // browser
var ExcelJS = require('exceljs'); // node

// api:  https://github.com/exceljs/exceljs#interface
var workbook = new ExcelJS.Workbook()
workbook.creator        =  ''
workbook.lastModifiedBy =   ''
workbook.created        =  Date
workbook.modified       =  Date
workbook.lastPrinted    =  Date
workbook.views          =  []
workbook.properties.date1904           = boolean // use 1904 date system
workbook.calcProperties.fullCalcOnLoad = boolean // force workbook calculation on load
workbook.worksheets     = []

paperSizes = {
	'Letter':           undefined,
	'Legal':            5,
	'Executive':        7,
	'A3':               8, 
	'A4':               9,
	'A5':               11,
	'B5 (JIS)':         13,
	'Envelope #10':     20,
	'Envelope DL':      27,
	'Envelope C5':      28,
	'Envelope B5':      34,
	'Envelope Monarch': 37,
	'Double Japan Postcard Rotated': 82,
	'16K 197x273 mm':   119,
}
workbook.addWorksheet(name='', ?opts={
	properties:   {
		tabColor:         undefined | {argb:'FFC0000'},
		outlineLevelCol:  0,
		outlineLevelRow:  0,
		defaultRowHeight: 15,
		defaultColWidth:  undefined | 0,
		dyDescent:        55,
	},
	views: [{
		state:             'normal|frozen|split',
		rightToLeft:       false,
		activeCell:        undefined,
		showRuler:         true,
		showRowColHeaders: true,
		showGridLines:     true,
		zoomScale:         100,
		zoomScaleNormal:   100,
		style:             undefined | 'pageBreakPreview|pageLayout',
		xSplit:            0,                   // if state == 'frozen|split'
		ySplit:            0,                   // ...
		topLeftCell:       undefined|'special', // ...
		activePane:        undefined,           // if state == 'split'
	}, ...],
	headerFooter: {
		differentFirst:   false,
		differentOddEven: false,
		oddHeader:        null,
		oddFooter:        null,
		evenHeader:       null,
		evenFooter:       null,
		firstHeader:      null,
		firstFooter:      null,
	},
	pageSetup:    {
		margins:            int,
		orientation:        'portrait|landscape',
		horizontalDpi:      4294967295,
		verticalDpi:        4294967295,
		fitToPage:          boolean,
		pageOrder:          'downThenOver|overThenDown',
		blackAndWhite:      false,
		draft:              false,
		cellComments:       'None|atEnd|asDisplayed',
		errors:             'displayed|dash|blank|NA',
		scale:              100,
		fitToWidth:         1,
		fitToHeight:        1,
		paperSize:          paperSizes['Letter']
		showRowColHeaders:  false,
		showGridLines:      false,
		firstPageNumber:    int,
		horizontalCentered: false,
		verticalCentered:   false,
		
	}
})
workbook.eachSheet(iterator=(sheet, sheetId)=>)
workbook.getWorksheet(nameOrId)
workbook.removeWorksheet(nameOrId)

var worksheet = await workbook.csv.readFile(filename, ?options={
	// https://github.com/exceljs/exceljs#reading-csv
 dateFormats:[''], map:()=>, sheetName:'', parserOptions:{},
})
var worksheet = await workbook.csv.read(stream)
csvWriteOpts = {
	// https://github.com/exceljs/exceljs#writing-csv
	dateFormat:       '',
	dateUTC:          boolean,
	encoding:         '',
	includeEmptyRows: boolean,
	map:              ()=>,
	sheetName:        boolean,
	sheetId:          '',
	formatterOptions: {},
}
await workbook.csv.write(stream, ?options=csvWriteOpts)
await workbook.csv.writeFile(filename, ?options=csvWriteOpts)
var buffer = await workbook.csv.writeBuffer()

xlsxReadOpts = {ignoreNodes:['',..]} // https://github.com/exceljs/exceljs#reading-xlsx
await workbook.xlsx.read(stream, ?options=xlsxReadOpts)
await workbook.xlsx.readFile(filename, ?options=xlsxReadOpts)
await workbook.xlsx.load(dataBuffer, ?options=xlsxReadOpts)
await workbook.xlsx.write(stream)
await workbook.xlsx.writeFile(filename)
var buffer = await workbook.xlsx.writeBuffer()

var worksheet = workbook.getWorksheet('Sheet1') | workbook.worksheets[0] | ...
worksheet.autoFilter = ''
worksheet.state      = 'visible|hidden|veryHidden'
worksheet.addTable(options={
	// https://github.com/exceljs/exceljs#table-properties
	name:        undefined, // required
	displayName: 'name',
	ref:         0,         // required
	headerRow:   true,
	totalsRow:   false,
	style: {
		theme:             'TableStyleMedium2|TableStyle[Shade][Number]' | null,
			'Light, 1-21'
			'Medium, 1-28'
			'Dark, 1-11'
		showFirstColumn:   false,
		showLastColumn:    false,
		showRowStripes:    false,
		showColumnStripes: false,
	},
	columns: [
		{
			name:              undefined, // required
			filterButton:      false,
			totalsRowLabel:    'Total',
			totalsRowFunction: 'none|average|countNums|count|max|min|stdDev|var|sum|custom',
			totalsRowFormula:  '',
		},
		...
	],
	rows: [],
})

var table = worksheet.getTable(name)
table.ref = ''
table.addColumn(column, headers, index)
table.addRow(row, atIndex)
table.commit()
table.removeColumns(startIndex, count)
table.removeRows(startIndex, count)

var column = table.getColumn(index)
column.name              = ''
column.filterButton      = boolean
column.style             = {}
column.totalsRowLabel    = ''
column.totalsRowFunction = ''
column.totalsRowFormula  = ''
column.totalsRowResult   = 0

var cell = worksheet.getCell(ref)

cell|row|column.
	numFmt    = ''
	font = {
		name:      'Arial|Calibri|...',
		family:    1|2|3, // Serif, Sans Serif, Mono or else 'unkown'
		scheme:    'minor|major|none',
		charset:   1,
		size:      9,
		color:     {argb:'FFFF0000'},
		bold:      boolean,
		italic:    false,
		underline: 'single|double',
		strike:    false,
		outline:   false,
		vertAlign: 'superscript|subscript',
		
	}
	alignment = {
		horizontal:   'left|center|right|fill|justify|centerContinuous|distributed',
		vertical:     'top|middle|bottom|distributed|justify',
		wrapText:     true,
		shrinkToFit:  true,
		indent:       0,
		readingOrder: 'ltr|rtl',
		textRotation: 0 | 'vertical',
	}
	border = {
		top|left|bottom|right: {
			style: 'thin|dotted|dashDot|hair|dashDotDot|slantDashDot|mediumDashed|mediumDashDotDot|mediumDashDot|medium|double|thick',
			color: {argb}
		},
		diagonal: {up:true, down:true, style, color},
	}
	fill = {
		type:     'pattern|gradient',
		// if type == 'pattern'
		pattern:  'none|solid|darkGray|mediumGray|lightGray|gray125|gray0625|darkHorizontal|darkVertical|darkDown|darkUp|darkGrid|darkTrellis|lightHorizontal|lightVertical|lightDown|lightUp|lightGrid|lightTrellis',
		fgColor:  'black',
		bgColor:  'white',
		// if type == 'gradient'
		degree:   'angle|path',
		center:   {left:0, top:0},
		stops:    [{position:0, color:{argb}}, ...],
	}

worksheet.addConditionalFormatting(opts) // https://github.com/exceljs/exceljs#conditional-formatting
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('old.xlsx');
var worksheet = workbook.getWorksheet(1)
var row = worksheet.getRow(5);
row.getCell(1).value = 5;
row.commit();
await workbook.xlsx.writeFile('new.xlsx');


// insert table
var workbook = new ExcelJS.Workbook();
var worksheet = workbook.addWorksheet('Sheet1');
worksheet.addTable({
	name: 'MyTable',
	ref: 'A1',
	headerRow: true,
	totalsRow: true,
	style: {
		theme: 'TableStyleDark3',
		showRowStripes: true,
	},
	columns: [
		{name: 'Date', totalsRowLabel: 'Totals:', filterButton: true},
		{name: 'Amount', totalsRowFunction: 'sum', filterButton: false},
	],
	rows: [
		[new Date('2019-07-20'), 70.10],
		[new Date('2019-07-21'), 70.60],
		[new Date('2019-07-22'), 70.10],
	],
});
await workbook.xlsx.writeFile('new.xlsx');


// write file in browser:  https://github.com/exceljs/exceljs#browser
var buffer = await workbook.xlsx.writeBuffer();
downloadBin('file.xlsx', buffer);
function downloadBin(filename, buffer) {
	let a = document.createElement('a');
	let fileNew = new Blob([buffer], {type: 'application/octet-stream'});
	a.href = URL.createObjectURL(fileNew);
	a.download = filename; a.click(); a.remove();
}


// set workbook properties
workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);


// set workbook views (controls how many separate windows will open)
workbook.views = [{x:0, y:0, width:10000, height:20000, firstSheet:0, activeTab:1, visibility:'visible'}];

