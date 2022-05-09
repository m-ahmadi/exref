let r = await (await fetch('http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/46348559193224090/20220221')).json();
r = r.staticThreshold;

var StaticTreshholdData = [
//            max         min	        (yesterday)
	[1,         22390.00,   20270.00],
// time       max         min	
	[63129,     21570.00,   19530.00]
//            PSGelStaMax PSGelStaMin
];


//              date   max            min
r = r.map(i => [i.dEven, i.psGelStaMax, i.psGelStaMin]);

let [yesterday, today] = r;

[
	{
		dEven:       20220502
		hEven:       1
		insCode:     "0"
		psGelStaMax: 13060
		psGelStaMin: 11820
	},
	
	{...}
]

