#!/usr/bin/env node
var program = require('commander');
var log = console.log;

program
	.usage('[options] <file ...>')
	.version('0.0.1')
	.option('-d, --debug', 'output extra debugging')
	.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	.option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.debug)     log( program.opts() ); 
if (program.small)     log('- small pizza size');
if (program.pizzaType) log(`- ${program.pizzaType}`);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// single or multiple instance
var program = require('commander'); // single

// multiple
var commander = require('commander');
var program1 = new commander.Command();
var program2 = new commander.Command();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// not chained
var program = require('commander');
program.version('0.0.1')
program.usage('[options] <file ...>')
program.option('-p, --peppers', 'Add peppers')
program.parse(process.argv);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@