var argv = require('minimist')( process.argv.slice(2) );
// or
var parseArgs = require('minimist');
var argv = parseArgs( process.argv.slice(2) );

console.dir(argv);