var valid = ( new Date(timestamp) ).getTime() > 0;

var valid = (new Date('2012-08-09')).getTime() > 0; // true
var valid = (new Date('abc')).getTime() > 0;        // false