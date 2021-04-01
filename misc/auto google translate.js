// https://translate.google.com/

str = `A computer is a machine that can be instructed to carry out sequences of
arithmetic or logical operations automatically via computer programming.
Modern computers have the ability to follow generalized sets of operations, called programs.
These programs enable computers to perform an extremely wide range of tasks.
A "complete" computer including the hardware, the operating system (main software),
and peripheral equipment required and used for "full" operation can be referred to as a computer system.
This term may as well be used for a group of computers that are connected and work together,
in particular a computer network or computer cluster.`;

texts = str.split('\n')

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

out.join('\n')







// do not translate each line separately (did not work)
char='##';
document.querySelector('textarea').value = str.split('\n').filter((v,i)=>i%2===1).slice(0,90).join(char);
document.querySelector('textarea').dispatchEvent(new Event('input',{bubbles:true}));
await new Promise(r=>setTimeout(r,3000));
[...document.querySelectorAll('.dePhmb span[jsname="W297wb"]')].map(i=>i.innerText).join('').split('##')