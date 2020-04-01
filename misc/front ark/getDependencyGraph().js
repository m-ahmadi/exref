const { readFileSync, writeFileSync } = require('fs');
const { join, parse } = require('path');

const depGraph = getDependencyGraph('./js/main.js');

function getDependencyGraph(entry, files, result=[]) {
	if (entry) files = [entry = join(entry)];
	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const matches = content.matchAll(/import.+from\s+'(.+)'/g);
		for (const match of matches) {
			const groups = match.slice(1);
			const groupsJoined = groups.map( i => join(parse(file).dir, i) );
			result.push(...groupsJoined);
			if (groups.length) getDependencyGraph(undefined, groupsJoined, result);
		}
	}
	return [entry, ...new Set(result)];
}