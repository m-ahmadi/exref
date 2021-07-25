const rq = require('./request');
const compress = require('./compress');
const xmljs = require('xml-js');

(async function () {
//const axiosRes = await rq.LastPossibleDeven().catch(console.log);
//const axiosRes = await rq.InstrumentAndShare(0, 0).catch(console.log);
	
	const insCodes = '46348559193224090,20030123,0'; // فولاد
//const insCodes = '46348559193224090,20030123,0;9211775239375291,20030123,0'; // فولاد  ذوب
	const axiosRes = await rq.DecompressAndGetInsturmentClosingPrice( compress(insCodes) ).catch(console.log);

	const response = xmljs.xml2js(axiosRes.data);
	const data = response.elements[0].elements[0].elements[0].elements[0].elements[0].text;
	
	// data ready
	console.log(data);
	
})();