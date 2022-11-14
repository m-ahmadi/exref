exec = require('child_process').execSync;
fs = require('fs');
[write, del] = [fs.writeFileSync, fs.unlinkSync];

a = [
	[0,    0,   960, 520],
	[960,  0,   480, 520],
	[1440, 0,   480, 520],
	
	[0,    520, 960, 520],
	[960,  520, 480, 520],
	[1440, 520, 480, 520],
];

handles = exec('cmdow /t /b').toString().trim().split('\r\n').map(i=>i.split(' ').map(i=>i.trim())[0]);

next = ((l=a.length,i=-1)=> _=>(i++, i=i>=l?0:i, i))();

s1 = '';
s2 = '';

handles.forEach((handle, i) => {
	let [x, y, w, h] = a[next()];
	s1 += `cmdow ${handle} /siz ${w} ${h}\r\n`;
	s2 += `cmdow ${handle} /mov ${x} ${y}\r\n`;
});


s = `@echo off

cmdow /tv

${s1}
${s2}`;

write('r.cmd', s);
exec('r.cmd');
del('r.cmd');
