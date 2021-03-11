/*
http://www.tsetmc.com/tsev2/data/instinfofast.aspx?
	i=<InsCode>
	c=57+          ???
*/

var str = await fetch('http://www.tsetmc.com/tsev2/data/instinfofast.aspx?i=46348559193224090&c=57+').then(async r => await r.text());
var groups = str.split(';');

var groupCols = [
	['closing', ['time_formatted', 'state_raw', 'last', 'close', 'open', 'high', 'low', 'count', 'volume', 'value', 'state_parsed?', 'date', 'time_int'] ]
	['adj_close',  [] ],
	['askvol',     [] ],
	['askprice',   [] ],
	['bidvol',     [] ],
	['bidprice',   [] ],
];