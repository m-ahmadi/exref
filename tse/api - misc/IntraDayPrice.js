/*
2min candles of intraday progress of `last` price and `volume` (of last day)

http://www.tsetmc.com/tsev2/chart/data/IntraDayPrice.aspx?
	i=<InsCode>
	
	return: text/csv
*/

var str = await fetch('http://www.tsetmc.com/tsev2/chart/data/IntraDayPrice.aspx?i=46348559193224090').then(async r => await r.text());
var rows = str.split(';').map(i=> i.split(','));

var cols = ['time', 'open', 'high', 'low', 'close', 'volume'];