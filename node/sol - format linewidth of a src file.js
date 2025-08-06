const fs = require('fs');
const [PATH, LINEWIDTH=80] = process.argv.slice(2);
const input = fs.readFileSync(PATH, 'utf8');
const lfstr = input.match(/\r\n/g) !== null ? input.replace(/\r\n/g, '\n') : input;
const lines = lfstr.split('\n');
for (const [i, line] of lines.entries()) {
	if (line === '') continue;
	if (line.length > LINEWIDTH) {
		const thisLineExtras = line.slice(LINEWIDTH);
		let [j, nextLine] = [i, ''];
		while (nextLine === '') {
			j++;
			if (j >= lines.length) { lines.push(''); break; }
			nextLine = lines[j];
		}
		lines[i] = line.slice(0, LINEWIDTH);
		lines[j] = thisLineExtras + nextLine;
	}
}
const output = lines.join('\n').replace(/\n/g, '\r\n');
fs.writeFileSync(PATH, output);


/* usage (overwrites file with new content)

node script.js foo.txt
for /r %i in (*.txt) do @node script.js "%i"

*/
