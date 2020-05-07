const { readFileSync, writeFileSync } = require('fs');
const { join, dirname } = require('path');

const depGraph = getDependencyGraph('./js/main.js');

// bfs
function getDependencyGraph(entry, files, result=[]) {
	if (entry) files = [entry = join(entry)];
	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const matchesIterator = content.matchAll(/import.+from\s+'(.+)'/g);
		let matches = [];
		for (const match of matchesIterator) {
			const groups = match.slice(1).map( i => join(dirname(file), i) );
			matches.push(...groups);
		}
		if (matches.length) {
			result.push(...matches);
			getDependencyGraph(undefined, matches, result);
		}
	}
	if (entry) return [entry, ...new Set(result)].map(i => i.replace(/\\/g, '/')).reverse();
}

// dfs
function getDependencyGraph(entry, files, result=[]) {
	if (entry) files = [entry = join(entry)];
	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const matches = content.matchAll(/import.+from\s+'(.+)'/g);
		for (const match of matches) {
			const groups = match.slice(1);
			const groupsJoined = groups.map( i => join(dirname(file), i) );
			result.push(...groupsJoined);
			if (groups.length) getDependencyGraph(undefined, groupsJoined, result);
		}
	}
	if (entry) return [entry, ...new Set(result)];
}