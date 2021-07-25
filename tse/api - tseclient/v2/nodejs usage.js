const axios = require('axios');

function Instrument(DEven) {
	return makeRequest({
		t: 'Instrument',
		a: ''+DEven
	});
}

function InstrumentAndShare(DEven, LastID=0) {
	return makeRequest({
		t: 'InstrumentAndShare',
		a: ''+DEven,
		a2: ''+LastID
	});
}

function LastPossibleDeven() {
	return makeRequest({
		t: 'LastPossibleDeven'
	});
}

function ClosingPrices(insCodes) {
	return makeRequest({
		t: 'ClosingPrices',
		a: ''+insCodes
	});
}

function makeRequest(params) {
	return axios({
		url: 'http://service.tsetmc.com/tsev2/data/TseClient2.aspx',
		method: 'GET',
		params
	});
}

(async function () {
//const axiosRes = await LastPossibleDeven().catch(console.log);
//const axiosRes = await InstrumentAndShare(0, 0).catch(console.log);
	
	const insCodes = '46348559193224090,20030123,0'; // فولاد
//const insCodes = '46348559193224090,20030123,0;9211775239375291,20030123,0'; // فولاد  ذوب
	const axiosRes = await ClosingPrices(insCodes).catch(console.log);
	
	const data = axiosRes.data;
	
	// data aready
	console.log(data);
})();

module.exports = {
	Instrument,
	InstrumentAndShare,
	LastPossibleDeven,
	ClosingPrices
};