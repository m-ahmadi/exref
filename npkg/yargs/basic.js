#!/usr/bin/env node

/*
	require('yargs').argv will use the process.argv array to construct the argv object.
	The rest of these methods below come in just before the terminating .argv.
*/
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015') // A message to print at the end of the usage instructions, e.g.
    .argv;

// or:
var y = require('yargs');
y.usage('Usage: $0 <command> [options]')
y.command('count', 'Count the lines in a file')
y.example('$0 count -f foo.js', 'count the lines in the given file')
y.alias('f', 'file')
y.nargs('f', 1)
y.describe('f', 'Load a file')
y.demandOption(['f'])
y.help('h')
y.alias('h', 'help')
y.epilog('copyright 2015')
y.argv; // done


var argv = yargs.argv;
argv._; // non-hyphenated options go to argv._