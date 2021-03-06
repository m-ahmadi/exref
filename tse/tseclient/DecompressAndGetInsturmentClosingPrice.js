var res = DecompressAndGetInsturmentClosingPrice(length?, string insCodes);   // csv data

// written to %appdata%\TseClient 2.0\Files\Instruments\<InsCode>.csv
// this returns all the data of an instrument
// the data includes trading-less days as well (even if you uncheck daysWithoutTrade in settings)
// it's in the process of generating files that trading-less days are filtered.

var instrumentsStrArray = res.split('@') // string[]
var instrumentsStrArrayArray = instrumentsStrArray.map( i => i.split(';') ) // string[][]

// only first (requested one instrument data):
var firstInstrument = instrumentsStrArray[0].split(';').map(eachRow); // if (instrumentsStrArray[0]) !== undefined

// all (requested multiple instruments data):
var instrumentsObjArrayArray = instrumentsStrArray.map(i => {
	// if i is not empty
	var instrumentStrArray = i.split(';');
	return instrumentStrArray.map(eachRow); // return array of obj (each arr: one instrument, each obj: one col-cell of data)
});

function eachRow(row) {
	var row = row.split(',');
	return {
		InsCode        : row[0], // int64
		DEven          : row[1], // int32 (the rest are all decimal)
		PClosing       : row[2],
		PDrCotVal      : row[3],
		ZTotTran       : row[4],
		QTotTran5J     : row[5],
		QTotCap        : row[6],
		PriceMin       : row[7],
		PriceMax       : row[8],
		PriceYesterday : row[9],
		PriceFirst     : row[10]
	};
}

if (res === '*')
	'بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.'
	'جهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.'

// structure of response data:
/*
	'instrument_data@instrument_data@instrument_data'
	'1,2,3;4,5,6@1,2,3;4,5,6@1,2,3;4,5,6'

	separator chars:
		@    instrument
		;    row
		,    cell
*/
// rows of first instrument
res.split('@')[0].split(';')               // [ '123', '456']
// cells of first instrument
res.split('@')[0].split(';')[0].split(',') // [ '1', '2', '3', '4', '5', '6']

// more examples:
res.split('@') // string[]
[
	'1,2,3;4,5,6',
	'1,2,3;4,5,6',
	'1,2,3;4,5,6'
]
res.split('@').map(i => i.split(';')) // string[][]
[
	['1,2,3', '4,5,6'],
	['1,2,3', '4,5,6'],
	['1,2,3', '4,5,6']
]
res.split('@').map(i => i.split(';').map(i => i.split(','))) // string[][][]
[
	[  ['1', '2', '3'], ['4', '5', '6']  ],
	[  ['1', '2', '3'], ['4', '5', '6']  ],
	[  ['1', '2', '3'], ['4', '5', '6']  ],
]