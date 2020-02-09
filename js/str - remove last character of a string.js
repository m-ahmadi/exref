var str = '12345.00';
str = str.substring(0, str.length - 1);

// better
var str = '12345.00';
str = str.slice(0, -1);