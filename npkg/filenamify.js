const filenamify = require('filenamify');
 
filenamify('<foo/bar>');
//=> 'foo!bar'
 
filenamify('foo:"bar"', {replacement: '@'});
//=> 'foo@bar'