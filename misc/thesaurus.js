// https://api-ninjas.com/api/thesaurus

words = ['ready', 'fast', 'soft'];

syns = await getSynonyms(words);
synsUniq = new Set(syns.flat());

async function getSynonyms(words=[]) {
	let r = [];
	for (let word of words) {
		let resp = await fetch('https://api.api-ninjas.com/v1/thesaurus?word='+word);
		let body = await resp.json();
		let {synonyms, antonyms} = body;
		r.push(synonyms);
		await new Promise(r=>setTimeout(r,2000));
	}
	return r;
}
