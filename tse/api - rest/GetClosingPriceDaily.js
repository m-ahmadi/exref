var r = await (await fetch('http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/46348559193224090/20220221')).json();
r = r.closingPriceDaily;

var date  = r.dEven;
var open  = r.priceFirst;
var high  = r.priceMax;
var low   = r.priceMin;
var last  = r.pDrCotVal;
var close = r.pClosing;
var vol   = r.qTotTran5J;
var count = r.zTotTran;
var yesterday = r.priceYesterday;

{
	dEven:          20220221,
	hEven:          123001,
	iClose:         false,
	id:             0,
	insCode:        "46348559193224090",
	last:           false,
	pClosing:       10360,
	pDrCotVal:      10300,
	priceChange:    -190, // pDrCotVal - priceYesterday
	priceFirst:     10490,
	priceMax:       10490,
	priceMin:       10260,
	priceYesterday: 10490,
	qTotCap:        423369359080,
	qTotTran5J:     40848872,
	yClose:         true,
	zTotTran:       6366,
}
