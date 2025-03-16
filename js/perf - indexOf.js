str = [...Array(2_000_000)].map(() => String.fromCharCode(Math.random()*127)).join('');

console.time();
r = [ str.indexOf('\n'), str.lastIndexOf('\n') ];
console.timeEnd(); // 0.362ms

console.time();
var [start, end] = [-1, -1];
for (let i=0,len=str.length; i<len; i++) {
	if (str[i] === '\n') {
		if (start === -1) { start = i; continue; }
		if (end < i) end = i
	}
}
console.timeEnd(); // 1.178s
