let r = await (await fetch('http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/46348559193224090/20220221')).json();
r = r.closingPriceDaily;

let date  = r.dEven;
let open  = r.priceFirst;
let high  = r.priceMax;
let low   = r.priceMin;
let last  = r.pDrCotVal;
let close = r.pClosing;
let vol   = r.qTotTran5J;
let count = r.zTotTran;
let yesterday = r.priceYesterday;

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