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

if (!today) console.log('specified YYYYMMDD has not yet occurred');

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

// another way but only for current day (request size 65x larger than above rest-api)
let text = await (await fetch('http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=46348559193224090')).text();
let s = text.split("PClosing='',")[1].split("Title='")[0];
let min = +s.split("PSGelStaMin='")[1].split("',")[0];
let max = +s.split("PSGelStaMax='")[1].split("',")[0];