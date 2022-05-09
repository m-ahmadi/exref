let r = await (await fetch('http://cdn.tsetmc.com/api/BestLimits/46348559193224090/20220221')).json();
r = r.bestLimitsHistory;
r = r.filter(i=> i.hEven >= 121100 && i.hEven <= 121200 && i.number === 1);

// bid ask  volume|count|price
var BestLimitData = [
// time    row    aC    aV      aP        bP        bV         bC
	[63129,  1,     1,    500,    20270,    20270,    419274,    91],
];


//              time     row          aC           aV           aP           bP       bV          bC
r = r.map(i => [i.hEven, i.number,    i.zOrdMeDem, i.qTitMeDem, i.pMeDem,    i.pMeOf, i.qTitMeOf, i.zOrdMeOf]);


{
	dEven:     0,
	hEven:     121116,
	idn:       0,
	insCode:   null,
	number:    1,
	pMeDem:    10290,
	pMeOf:     10300,
	qTitMeDem: 120644,
	qTitMeOf:  26812,
	refID:     9801369576,
	zOrdMeDem: 38,
	zOrdMeOf:  3,
}