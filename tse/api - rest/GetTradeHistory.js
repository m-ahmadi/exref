let r = await (await fetch('http://cdn.tsetmc.com/api/Trade/GetTradeHistory/46348559193224090/20220221/true')).json();
r = r.tradeHistory;

var IntraTradeData = [
//  count    time         volume    price     discarded
	['754',    '09:01:06',  '500',   '19530',   0],
];


//              count    time     volume      price    discarded
r = r.map(i => [i.nTran, i.hEven, i.qTitTran, i.pTran, i.canceled]);

{
	canceled:     0,
	dEven:        0,
	hEven:        90018,
	iAnuTran:     0,
	iSensVarP:    "\u0000",
	insCode:      null,
	nTran:        11,
	pPbSeaCotJ:   0,
	pPhSeaCotJ:   0,
	pTran:        10490,
	qTitNgJ:      0,
	qTitTran:     60,
	xqVarPJDrPRf: 0,
}