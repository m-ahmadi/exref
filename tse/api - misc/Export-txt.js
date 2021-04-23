/*
http://tsetmc.com/tse/data/Export-txt.aspx?a=InsTrade&
	InsCode=<InsCode>&
	DateFrom=<DEven>&
	DateTo=<DEven>&
	b=0                   1 = less digits <VALUE>
	
	return: text/plain


http://tsetmc.com/tsev2/data/Export-txt.aspx?t=i&
	a=1&           no effect
	b=0&           1 = less digits <VALUE>
	i=<InsCode>
	
	return: text/plain
*/

var str = await fetch('http://tsetmc.com/tsev2/data/Export-txt.aspx?t=i&a=1&b=0&i=46348559193224090').then(async r => await r.text());


var str = await fetch('http://tsetmc.com/tse/data/Export-txt.aspx?a=InsTrade&InsCode=46348559193224090&DateFrom=20000101&DateTo=20210308&b=0').then(async r => await r.text());