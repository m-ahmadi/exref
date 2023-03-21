// https://translate.google.com/

str = `00:00
The second law of thermodynamics tells us that everything in the universe tends towards
00:04
disorder. And in complex systems, chaos is the norm. So you'd naturally expect the universe
00:11
to be messy. And yet, we can observe occasions of spontaneous order, the synchronization
00:18
of metronomes, the perfectly timed orbits of moons, the simultaneous flashes of fireflies,`;

texts = str.split('\n').filter((v,i)=> i%2===1);
out = [];

a = document.querySelectorAll('textarea')[0];
for (let text of texts) {
	a.value = text;
	a.dispatchEvent(new Event('input',{bubbles:true}));
	
	await new Promise(r => setTimeout(r, 2000));
	
	out.push(
		[...document.querySelectorAll('span[jsname="W297wb"]')].map(i=>i.innerText).join('')
	);
}

times = str.split('\n').filter((v,i)=> i%2===0);
times = times.map((v,i,a) => `00:${v} --> 00:${a[i+1]}`);
res = out.map((v,i) => [ ''+(i+1), times[i], v, ''].join('\n') ).flat().join('\n');
console.log(res);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// bad
// translate whole text once, then split into chunks with length equal to pre-translation
str = `0:00
- This generation console buyers
0:01
are being faced with the choice
0:03
that they've never really had to make before.
0:05
It used to be that a new console launched
0:07
and it had these capabilities and that was it.
0:10
But now the Xbox Series X and Series S are launching
0:14
with distinctly different prices and capabilities.
0:17
And the choice between them is not necessarily a simple one.
0:21
This one's 4K and ray tracing, and this one's 1440p,
0:26
but then there's no 1440p TV's
0:29`;

texts = str.split('\n').filter((v,i)=> i%2===1);

fullText = texts.join(' ');
fullTextT; // translate `fullText`

lens = texts.map(i=>i.length);

textsT = [];
let i0=0, i1=0, prev=0;
for (let len of lens) {
	i0 = prev;
	i1 = prev + len;
	let lastValidIdx = fullTextT.length - 2;
	while (fullTextT[i1-1] !== ' ' && i1 <= lastValidIdx) i1++;
	let line = fullTextT.slice(i0, i1);
	textsT.push(line.trim());
	prev = i1;
}

times = str.split('\n').filter((v,i)=> i%2===0);
times = times.map((v,i,a) => `00:${v} --> 00:${a[i+1]}`);
res = textsT.map((v,i) => [ ''+(i+1), times[i], v, ''].join('\n') ).flat().join('\n');
console.log(res);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
