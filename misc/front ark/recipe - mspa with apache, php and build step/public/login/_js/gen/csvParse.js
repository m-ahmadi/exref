export default function (str, parseRows=false) {
	let res = [];
	if (!str) return res;
	
	const lfstr = str.match(/\r\n/g) !== null ? str.replace(/\r\n/g, '\n') : str;
	const rdystr = lfstr.endsWith('\n') ? lfstr.slice(0, -1) : lfstr;
	
	res = rdystr.split('\n');
	
	if (parseRows) {
		res = res.map(i => i.indexOf(',') !== -1 ? i.split(',') : i);
	}
	
	return res;
}