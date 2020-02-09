// hash map:      hash table with key value pairs
// hash function: calculation applied to a key
var arr = new Array(11);

function hash(str) {
	var charSum = [...str].map(i=>i.charCodeAt(0)).reduce((a,c)=>c+a);
	return charSum % arr.length;
}

function insert(str) {
	arr[ hash(str) ] = str;
}

function find(str) {
	return arr[ hash(str) ];
}