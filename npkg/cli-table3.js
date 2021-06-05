var Table = require('cli-table3');

// horizontal table
var table = new Table({head:['h1','h2'], colWidths:[100,200]});
table.push(
	['First value', 'Second value'],
	['First value', 'Second value']
);
console.log(table.toString());

// vertical table
var table = new Table();
table.push({'key1':'foo'}, {'key2':'bar'});
console.log(table.toString());

// cross table
var table = new Table({head: ['','h1','h2']});
table.push(
    {'h3': ['foo','bar'] },
		{'h4': ['oof', rab'] }
);
 
console.log(table.toString());