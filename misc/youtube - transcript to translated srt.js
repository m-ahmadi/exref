// https://translate.google.com/

str = `00:00
The second law of thermodynamics tells us that everything in the universe tends towards
00:04
disorder. And in complex systems, chaos is the norm. So you'd naturally expect the universe
00:11
to be messy. And yet, we can observe occasions of spontaneous order, the synchronization
00:18
of metronomes, the perfectly timed orbits of moons, the simultaneous flashes of fireflies,`;

texts = str.split('\n').filter((v,i)=> i%2===1) 
out = []

a = document.querySelectorAll('textarea')[0]
for (let text of texts) {
	a.value = text;
	a.dispatchEvent(new Event('input',{bubbles:true}));
	
	await new Promise(r => setTimeout(r, 2000));
	
	out.push(
		[...document.querySelectorAll('.dePhmb span[jsname="W297wb"]')].map(i=>i.innerText).join('')
	)
}

times = str.split('\n').filter((v,i)=> i%2===0)
times = times.map((v,i,a) => `00:${v} --> 00:${a[i+1]}`)
out.map((v,i) => [ ''+(i+1), times[i], v, ''].join('\n') ).flat().join('\n')