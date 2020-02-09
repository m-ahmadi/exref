str.split([separator[, limit]])

var str = 'The quick brown fox jumps over the lazy dog.';

str.split(' ')    // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

str.split(' ', 4) // ["The", "quick", "brown", "fox"]

str.split()       // don't do this