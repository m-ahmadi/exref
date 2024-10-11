var r = await (await fetch('https://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/46348559193224090/20200721')).json();
r = r.closingPriceHistory.reverse();

[
	{
		id:         0,              // 
		insCode:    null,           // 
		dEven:      0,              // 
		hEven:      122123,         // time
		pClosing:   23730,          // close
		iClose:     false,          // 
		yClose:     false,          // 
		pDrCotVal:  22760,          // last
		zTotTran:   203746,         // count (trades)
		qTotTran5J: 719225075,      // volume
		qTotCap:    17067703835650, // value
	},
	
	{...},
	
	...
]

// make csv
var headers = Object.keys(r[0]);
var rows = r.map(i => headers.map(k => i[k]));
var csv = [headers, ...rows].map(i=>i.join(',')).join('\n');
console.log(csv);
