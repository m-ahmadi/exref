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
	let axiosRes;
	
	axiosRes = await rq.LastPossibleDeven().catch(console.log);
	axiosRes = await rq.InstrumentAndShare(0, 0).catch(console.log);
	axiosRes = await rq.ClosingPrices(insCodes).catch(console.log);
	
	const data = axiosRes.data;
	
	// data aready
})();

module.exports = {
	Instrument,
	InstrumentAndShare,
	LastPossibleDeven,
	ClosingPrices
};