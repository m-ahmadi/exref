/*
http://www.tsetmc.com/tsev2/data/instinfofast.aspx?
	i=<InsCode>
	c=<CSecVal>    eg: c="37 " | c="57 " | c="57+"
	
	return: text/html
*/

var str = await fetch('http://www.tsetmc.com/tsev2/data/instinfofast.aspx?i=46348559193224090&c=57+').then(async r => await r.text());
var groups = str.split(';');

groups[0].split(',')
groups[1] && groups[1].split(',')
groups[2].split(',').map(i=>i.split('@'))
groups[3].split(',')
groups[4].split(',')
groups[5]
groups[6]
groups[7].split('@')
groups[8]

var cols = [
	[ 'price',      ['time_formatted', 'state_raw', 'last', 'close', 'open', 'yesterday', 'high', 'low', 'count', 'volume', 'value', 'state_parsed?', 'date', 'time_of_last'] ]
	[ 'index',      ['datetime','state','n','html','n','n','n','n','state','n','n','n','state','n','n','n']                                                                   ]
	[ 'askbid',     [ ['askcount','askvol','askprice','bidprice','bidvol','bidcount'],   [], [], [], []                                                                       ],
	[ '???',        ['n','n','n']                                                                                                                                             ],
	[ 'clienttype', ['pbvol','lbvol','','psvol','lsvol','pbcount','lbcount','','pscount','lscount']                                                                           ],
	[ '',           ''                                                                                                                                                        ],
	[ '',           ''                                                                                                                                                        ],
	[ '',           '1@0'                                                                                                                                                     ],
	[ '',           ''                                                                                                                                                        ],
];