// https://nanoreview.net/en/phone-list/all-xiaomi
// https://nanoreview.net/en/phone-list/all-samsung

itms = [...document.querySelectorAll('.table-list tbody tr > td:nth-child(2) a')]
	.map(i=> [i.innerText, i.href]);

for (let [i, [name, link]] of itms.entries()) {
	let text = await (await fetch (link)).text();
	
	let _document = new DOMParser().parseFromString(text, mimeType='text/html');
	
	let mainScore = _document.querySelector('.score-bar-result-square-dark').innerText;
	itms[i].push(+mainScore);
	
	let catsAndScores = [..._document.querySelectorAll('.card-block.bb-light.pb.flex.flex-wrap')].map(i=> {
		let child1 = i.children[0];
		let child2 = i.children[1];
		if (!child2) return;
		let score = child1.innerText;
		let category = child2.children[0].innerText;
		return [category, +score];
	}).filter(i=>i);
	
	itms[i].push(catsAndScores);
}

cats = itms.map(i=> i[3].map(i=>i[0]).join(' - '));
allGood = !cats.some(i => i !== cats[0]);
if (!allGood) throw Error('order of categories is not the same in all pages');

headers = ['model','score',  'prf','cam','bat','dsp',  'snd','con','sft','diz',  'link'];
rows = itms.map(([name, link, score, catsAndScores]) => {
	let [dsp,diz,prf,sft,bat,cam,con,snd] = catsAndScores.map(i=>i[1]);
	return [name, score,  prf,cam,bat,dsp,  snd,con,sft,diz,  link];
});
csv = [headers, ...rows].map(i=>i.join(',')).join('\n');
console.log(csv);
