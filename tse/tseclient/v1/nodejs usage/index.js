const rq = require('./request');
const compress = require('./compress');
const xmljs = require('xml-js');

(async function () {
	let axiosRes;
	
	axiosRes = await rq.LastPossibleDeven().catch(console.log);
	axiosRes = await rq.InstrumentAndShare(0, 0).catch(console.log);
	axiosRes = await rq.DecompressAndGetInsturmentClosingPrice( compress(insCodes) ).catch(console.log);

	const response = xmljs.xml2js(axiosRes.data);
	const data = response.elements[0].elements[0].elements[0].elements[0].elements[0].text;

	// data ready
})();