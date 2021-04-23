var firstDEven = '20010321'; // 1380/01/01

var res = InstrumentAndShare(length?, int DEven, long LastID=0); // @

// meaning of result:
// first half: نماد ها
// secon half: اطلاعات تعداد سهم نماد ها
var strFirstHalf = res.split('@')[0];
var strSecondHalf = res.split('@')[1];
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