// لیست تمام نماد ها
Instrument(length?, int DEven): InstrumentResult

// لیست تمام نمادها و اطلاعات تعداد سهم هاشون
InstrumentAndShare(length?, int DEven, long LastID): InstrumentAndShareResult

// تاریخ آخرین روز معامله
LastPossibleDeven(length?): LastPossibleDevenResult // 20190730;20190730

// دریافت اطلاعات یک نماد
DecompressAndGetInsturmentClosingPrice(length?, string insCodes): DecompressAndGetInsturmentClosingPriceResult

// DEven آخرین روزی که سهم در آن روز معامله شده است

var LPDResult  = LastPossibleDeven(length?); // 20190730;20190730
if (LPDResult == '*') {
	'بروز رسانی اطلاعات در حد فاصل ساعت هشت صبح تا یک بعد از ظهر روزهای شنبه تا چهارشنبه امکان پذیر نمی باشد.'
	'جهت ساخت فایلها با اطلاعات فعلی از دکمه تعبیه شده در پایین صفحه استفاده کنید.'
}