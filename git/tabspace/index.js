#!/usr/bin/env node
const fs = require('fs');
const args = process.argv;
const ferom = args[args.indexOf('--from')+1];
const to    = args[args.indexOf('--to')+1];
const leading = args.includes('--leading');
const input = fs.readFileSync(0).toString();
let output = '';
if (leading) {
	const lfstr = input.match(/\r\n/g) !== null ? input.replace(/\r\n/g, '\n') : input;
	const leads = /^\s*(\b|\B)/;
	output = lfstr
		.split('\n')
		.map(line => {
			const whites = line.match(leads);
			if (whites) {
				const newWhites = whites[0].replace(new RegExp(ferom, 'g'), to);
				return line.replace(leads, newWhites);
			} else {
				return line;
			}
		})
		.join('\n');
} else {
	output = input.replace(new RegExp(ferom, 'g'), to);
}
console.log(output);