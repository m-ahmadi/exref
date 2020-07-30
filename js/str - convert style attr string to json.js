// simple. cannot handle `background: url("http://www.google.com")`
function attr2json(str) {
	const res = {};
	for (const i of str.split(';')) {
		const row = i.split(':');
		const key = row[0].trim();
		const val = row[1].trim();
		if (key && val) res[key] = val;
	}
	return res;
}