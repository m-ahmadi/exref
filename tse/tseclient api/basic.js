// لیست تمام نماد ها
Instrument(length?, int DEven): InstrumentResult

// لیست تمام نمادها و اطلاعات تعداد سهم هاشون
InstrumentAndShare(length?, int DEven, long LastID): InstrumentAndShareResult

// تاریخ آخرین روز معامله
LastPossibleDeven(length?): LastPossibleDevenResult // 20190730;20190730

// دریافت اطلاعات یک نماد
DecompressAndGetInsturmentClosingPrice(length?, string insCodes): DecompressAndGetInsturmentClosingPriceResult

// DEven آخرین روزی که سهم در آن روز معامله شده است
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Instrument
var I_result = Instrument(length?, int DEven)

var Instruments = I_result.split(';').map(i => {
	var row = i.split(',');
	return {
		InsCode      : row[0],  // int64
			// کد داخلی نماد 
			// در تمام اطلاعات از این کد برای شناسایی نماد استفاده می شود
			// این کد برای هر نماد یکتا بوده و درهنگام اضافه شدن هر نماد جدید به بورس در بانک اطلاعاتی وب سایت شرکت مدیریت فناوری بورس ساخته می شود
		InstrumentID : row[1],  // string کد 12 رقمي لاتين نماد
		LatinSymbol  : row[2],  // string
		LatinName    : row[3],  // string
		CompanyCode  : row[4],  // string
		Symbol       : row[5],  // string
		Name         : row[6],  // string
		CIsin        : row[7],  // string کد 12 رقمي شرکت
		DEven        : row[8],  // int32 	تاريخ - نمادهايي که در آخرين روز معاملاتي وجود نداشته باشند داراي تاريخ قديمي بوده و قابل شناسايي هستند
		Flow         : row[9],  // byte بازار
			// 0    عمومي - مشترک بين بورس و فرابورس
			// 1    بورس
			// 2    فرابورس
			// 3    آتی
			// 4    پایه فرابورس
			// 5    پایه فرابورس - منتشر نمی شود
			// 6    بورس انرژی
			// 7    بورس کالا
		LSoc30       : row[10], // string نام 30 رقمي فارسي شرکت
		CGdSVal      : row[11], // string نوع نماد يکي از مقادير: A - I - O
		CGrValCot    : row[12], // string کد گروه نماد
		YMarNSC      : row[13], // string کد بازار
			// NO     Normal market
			// OL     Odd-lot market
			// BK     Block market
			// BY     Buying-in market
			// ID     Index market
			// UI     instruments
		CComVal      : row[14], // string کد تابلو
		CSecVal      : row[15], // string کد گروه صنعت
		CSoSecVal    : row[16], // string کد زير گروه صنعت
		YVal         : row[17]  // string نوع نماد
		[
			[ 67,  'شاخص',                        'شاخص قيمت' ],
			[ 68,  'شاخص',                        'شاخص' ],
			[ 208, 'اوراق مشاركت',                   'اوراق صكوك' ],
			[ 300, 'سهام عادی',                      'سهام' ],
			[ 305, 'صندوق سرمايه گذاري',               'صندوق سرمايه گذاري در سهام بورس' ],
			[ 309, 'تست پایه',                       'تست پایه' ],
			[ 321, 'اختیار فولاد هرمزگان',                '' ],
			[ 322, 'اختیار خ اخزا ( اسناد خزانه داری اسلامی )', '' ],
			[ 323, 'اختیارف اخزا ( اسناد خزانه داری اسلامی )', '' ],
			[ 400, 'حق تقدم',                         'حق تقدم سهم' ],
			[ 69,  'شاخص',                         'شاخص فرابورس' ],
			[ 70,  'اوراق مشاركت',                    'صکوک اختصاصی' ],
			[ 303, 'سهام عادی',                       'اتیسی' ],
			[ 305, 'صندوق سرمايه گذاري',                'صندوق سرمايه گذاري در سهام بورس' ],
			[ 306, 'اوراق مشاركت',                    'اوراق مشارکت اتیسی' ],
			[ 307, 'سهام عادی',                       'تسهیلات فرابورس' ],
			[ 313, 'سهام عادی',                       'شرکتهای کوچک و متوسط' ],
			[ 403, 'حق تقدم',                         'حق تقدم اتیسی' ],
			[ 601, 'اختیار فروش تبعی ( ذوب آهن اصفهان)',     '' ],
			[ 706, 'اوراق مشاركت',                    'صکوک اختصاصی' ],
			[ 903, 'دارایی فکری',                      'دارایی فکری' ],
			[ 301, 'اوراق مشاركت',                    'اوراق مشارکت' ],
			[ 304, 'سهام عادی',                       'آتی' ],
			[ 311, 'سهام عادی',                       'اختیار خرید' ],
			[ 312, 'سهام عادی',                       'اختیار فروش' ],
			[ 600, 'اختیار',                          'اختیار فروش تبعی' ],
			[ 602, 'اختیار',                          'اختیار فروش تبعی فرابورس' ],
			[ 309, 'سهام عادی',                       'پایه' ],
			[ 404, 'حق تقدم',                         'حق تقدم پایه' ],
			[ 207, 'اوراق مشاركت',                    'اوراق مشارکت ارز صادراتی' ],
			[ 200, 'اوراق مشاركت',                    'اوراق مشارکت انرژی' ],
			[ 315, 'صندوق سرمايه گذاري',                'صندوق سرمایه گذاری قابل معامله انرژی' ],
			[ 801, 'سلف بورس انرژی',                   '' ],
			[ 802, 'سلف بورس انرژی',                   '' ],
			[ 803, 'سلف بورس انرژی',                   '' ],
			[ 804, 'سلف بورس انرژی',                   '' ],
			[ 901, 'انرژی',                           '' ],
			[ 902, 'انرژی',                           '' ],
			[ 308, 'اوراق مشاركت',                     'اوراق مشارکت کالا' ],
			[ 701, 'کالا',                             'گواهی سپرده کالایی' ]
		]
	};
});

const YValTypeOccurrence = [
	[300, 'سهام عادی', 'سهام', 534],
	[400, 'حق تقدم', 'حق تقدم سهم', 474],
	[303, 'سهام عادی', 'اتیسی', 434],
	[309, 'سهام عادی', 'پایه', 264],
	[306, 'اوراق مشاركت', 'اوراق مشارکت اتیسی', 212],
	[404, 'حق تقدم', 'حق تقدم پایه', 120],
	[403, 'حق تقدم', 'حق تقدم اتیسی', 79],
	[68, 'شاخص', 'شاخص', 61],
	[305, 'صندوق سرمايه گذاري', 'صندوق سرمايه گذاري در سهام بورس', 40],
	[307, 'سهام عادی', 'تسهیلات فرابورس', 39],
	[69, 'شاخص', 'شاخص فرابورس', 38],
	[208, 'اوراق مشاركت', 'اوراق صكوك', 23],
	[903, 'دارایی فکری', 'دارایی فکری', 17],
	[706, 'اوراق مشاركت', 'صکوک اختصاصی', 16],
	[313, 'سهام عادی', 'شرکتهای کوچک و متوسط', 11],
	[70, 'اوراق مشاركت', 'صکوک اختصاصی', 6],
	[321, 'اختیار فولاد هرمزگان', '', 5],
	[322, 'اختیار خ اخزا ( اسناد خزانه داری اسلامی )', '', 5],
	[323, 'اختیارف اخزا ( اسناد خزانه داری اسلامی )', '', 5],
	[67, 'شاخص', 'شاخص قيمت', 2],
	[601, 'اختیار فروش تبعی ( ذوب آهن اصفهان)', '', 1],
	[200, 'اوراق مشاركت', 'اوراق مشارکت انرژی', 0],
	[207, 'اوراق مشاركت', 'اوراق مشارکت ارز صادراتی', 0],
	[301, 'اوراق مشاركت', 'اوراق مشارکت', 0],
	[304, 'سهام عادی', 'آتی', 0],
	[308, 'اوراق مشاركت', 'اوراق مشارکت کالا', 0],
	[311, 'سهام عادی', 'اختیار خرید', 0],
	[312, 'سهام عادی', 'اختیار فروش', 0],
	[315, 'صندوق سرمايه گذاري', 'صندوق سرمایه گذاری قابل معامله انرژی', 0],
	[600, 'اختیار', 'اختیار فروش تبعی', 0],
	[602, 'اختیار', 'اختیار فروش تبعی فرابورس', 0],
	[701, 'کالا', 'گواهی سپرده کالایی', 0],
	[801, 'سلف بورس انرژی', '', 0],
	[802, 'سلف بورس انرژی', '', 0],
	[803, 'سلف بورس انرژی', '', 0],
	[804, 'سلف بورس انرژی', '', 0],
	[901, 'انرژی', '', 0],
	[902, 'انرژی', '', 0]
];

function countOccurrence(types) {
	// instruments: [ Instrument, Instrument, ...]
	Object.keys(types).forEach(k => types[k][2] = 0);
	instruments.forEach(i => types[i.YVal] ? types[i.YVal][2] += 1 : undefined);
	return types;
}
function getUniq() {
	// instruments: [ Instrument, Instrument, ...]
	const arr = [];
	instruments.forEach(i => arr.indexOf(i.YVal) === -1 ? arr.push(i.YVal) : undefined);
	return arr;
}

function convertToLinkedList(types) {
	const l1 = [...new Set(Object.keys(types).map(i => types[i][0]))].map((v,i)=>({id: i+1, node: v, parent: '#'}));
	const l2 = Object.keys(types).map((k,i) => ({
		id: l1.length+i+1,
		parent: l1.find(j=>j.node===types[k][0]).id,
		node: types[k][1]
	}));
	return l1.concat(l2).filter(i => i.node);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// InstrumentAndShare
var firstDEven = '20010321'; // 1380/01/01

var IAS_Result = InstrumentAndShare(length?, int DEven, long LastID=0); // @

// meaning of result:
// first half: نماد ها
// secon half: اطلاعات تعداد سهم نماد ها
var strFirstHalf = IAS_Result.split('@')[0];
var strSecondHalf = IAS_Result.split('@')[1];
var arrFirstHalf = strFirstHalf.split(';');
var arrSecondHalf = strSecondHalf.split(';');

var Instruments = arrFirstHalf.map(i => {
	// InstrumentInfo
	var row = i.split(',');
	return {
		InsCode      : row[0],  // int64
		InstrumentID : row[1],  // string
		LatinSymbol  : row[2],  // string
		LatinName    : row[3],  // string
		CompanyCode  : row[4],  // string
		Symbol       : row[5],  // string
		Name         : row[6],  // string
		CIsin        : row[7],  // string
		DEven        : row[8],  // int32
		Flow         : row[9],  // byte
		LSoc30       : row[10], // string
		CGdSVal      : row[11], // string
		CGrValCot    : row[12], // string
		YMarNSC      : row[13], // string
		CComVal      : row[14], // string
		CSecVal      : row[15], // string
		CSoSecVal    : row[16], // string
		YVal         : row[17]  // string
	};
});

var Shares = arrSecondHalf.map(i => {
	// TseShareInfo
	var row = i.split(',');
	return {
		Idn              : row[0], // int64
		InsCode          : row[1], // int64
		DEven            : row[2], // int32
		NumberOfShareNew : row[3], // decimal
		NumberOfShareOld : row[4]  // decimal
	};
});

if ( firstHalf === '*' ) {
	'بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.'
	'جهت مشاهده لیست فعلی نمادها روی دکمه مرحله بعد کلیک کنید.'
	
} else if (firstHalf) { // not empty
	// process first half
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var DAGICPResult = DecompressAndGetInsturmentClosingPrice(length?, string insCodes);   // csv data
// written to %appdata%\TseClient 2.0\Files\Instruments\<InsCode>.csv
// this returns all the data of an instrument
// the data includes trading-less days as well (even if you uncheck daysWithoutTrade in settings)
// it's in the process of generating files that trading-less days are filtered.

var instrumentsStrArray = DAGICPResult.split('@') // string[]
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
	var cell = row.split(',');
	return {
		InsCode        : cell[0], // int64
		DEven          : cell[1], // int32 (the rest are all decimal)
		PClosing       : cell[2],
		PDrCotVal      : cell[3],
		ZTotTran       : cell[4],
		QTotTran5J     : cell[5],
		QTotCap        : cell[6],
		PriceMin       : cell[7],
		PriceMax       : cell[8],
		PriceYesterday : cell[9],
		PriceFirst     : cell[10]
	};
}

if (DAGICPResult === '*')
	'بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.'
	'جهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.'

//======================================================================================================
// structure of response data:
/*
	'instrument_data@instrument_data@instrument_data'
	'1,2,3;4,5,6@1,2,3;4,5,6@1,2,3;4,5,6'

	separator chars:
		@    instrument
		;    row
		,    cell
*/
var str = DAGICPResult;
// rows of first instrument
str.split('@')[0].split(';')               // [ '123', '456']
// cells of first instrument
str.split('@')[0].split(';')[0].split(',') // [ '1', '2', '3', '4', '5', '6']

// more examples:
str.split('@') // string[]
[
	'1,2,3;4,5,6',
	'1,2,3;4,5,6',
	'1,2,3;4,5,6'
]
str.split('@').map(i => i.split(';')) // string[][]
[
	['1,2,3', '4,5,6'],
	['1,2,3', '4,5,6'],
	['1,2,3', '4,5,6']
]
str.split('@').map(i => i.split(';').map(i => i.split(','))) // string[][][]
[
	[  ['1', '2', '3'], ['4', '5', '6']  ],
	[  ['1', '2', '3'], ['4', '5', '6']  ],
	[  ['1', '2', '3'], ['4', '5', '6']  ],
]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var LPDResult  = LastPossibleDeven(length?); // 20190730;20190730

 if (LPDResult == '*') {
	'بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.'
	'جهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.'
}