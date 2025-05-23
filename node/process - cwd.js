process.cwd()
// returns current working directory of the node.js process
// (the directory from which you invoked the node command)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// cwd does not change when a required module is being executed:
// cd home/htdocs/try/ && node a.js
// a.js
console.log( process.cwd() ) // home/htdocs/try
require('./b.js')
console.log('see?')          // see?
// b.js
console.log( process.cwd() ) // home/htdocs/try
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// changing cwd
process.cwd()         // 'C:\\Program Files\\nodejs'
process.chdir('../')
process.cwd()         // 'C:\\Program Files'
process.chdir('d:')
process.cwd()         // 'D:\\'
process.chdir('test')
process.cwd()         // 'D:\\test'

// change cwd to script's dir
process.chdir(__dirname)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// process.cwd() vs __dirname
process.cwd()
// directory from which node was invoked.
// equal to '.' (except in require() calls, since path inside require is always relative to the file calling it)
// does not change in different modules

__dirname
// directory of current module
// changes in different modules

// home/a.js
console.log(__dirname) // home/
require('./etc/b')
// home/etc/b.js
console.log(__dirname) // home/etc/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// cwd can be changed by required scripts

// index.js
process.cwd(); // 'E:\xampp\htdocs\foo'
require('./another')();
process.cwd(); // 'E:\xampp\htdocs'

// another.js
module.exports = () => {
	process.chdir('../');
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
