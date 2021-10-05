var Minizip = require('minizip-asm.js'); // npm i minizip-asm.js
var fs = require('fs');
 
var text = Buffer.from('Abc~~~');

var mz = new Minizip();
mz.append('haha/abc.txt', text, {password: '123'});
fs.writeFileSync('abc.zip', Buffer.from(mz.zip()));