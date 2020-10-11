#!/usr/bin/env node
var program = require('commander');

program.version(versionStr, flagStr, descStr); /*
if version method is set, when called, program prints the version number and exit.
versionStr:
	required
	string to be printed when called with version flags
flagStr
	optional
	flags which when called with, prints versionStr
	default: '-V, --version'
descStr
	optional
	description string to appear on help
	default: 'output the version number'  */

program.version('0.0.1', '-V, --version', 'output the version number'); // default values
program.version('0.0.1', '-v, --version');
program.version(''+JSON.parse(require('fs').readFileSync(require('path').join(__dirname, 'package.json'), 'utf8')).version, '-v, --version');

program.parse(process.argv);