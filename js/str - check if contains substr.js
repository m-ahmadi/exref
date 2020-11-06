var string = 'salam olaghe aziz halet chetore';
var word1 = 'chetore';
var word2 = '/chetore/';
var word3 = /chetore/;

// indexOf
string.indexOf(word1) !== -1;

// regex 
word3.test(string);

// search
string.search(word2);

// match 
string.match(word2);

//	includes ES6
string.includes(word1);
