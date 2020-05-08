import rq from './request.v2.js';
import Instrument from './struct/Instrument.js';
const { stringify: strify, parse } = JSON;

let instruments, shares;
let prices;

async function init() {
	// prices = await $.get('data/ذوب.csv');
	// instruments = await $.get('data/instruments.csv');
	instruments = localStorage.getItem('sigman.instruments');
	shares = localStorage.getItem('sigman.shares');
	
	if (!instruments) {
		const res = await rq.InstrumentAndShare(0, 0);
		// TODO: check against bad requests
		const splitted = res.split('@');
		instruments = splitted[0];
		shares = splitted[1];
		localStorage.setItem('sigman.instruments', instruments);
		localStorage.setItem('sigman.shares', shares);
	}
	
	/* if (lastUpdate === 'never') {
		Promise.all([writeFile(insFile, ''), writeFile(sharesFile, '')]);
		lastDeven = 0;
		lastId = 0;
	} else {
		currentInstruments = await getInstruments();
		currentShares = await getShares(true);
		const insDevens = Object.keys(currentInstruments).map( k => parseInt(currentInstruments[k].match(/\b\d{8}\b/)[0]) );
		const shareIds = currentShares.map( i => parseInt(i.Idn) );
		lastDeven = Math.max.apply(Math, insDevens);
		lastId    = Math.max.apply(Math, shareIds);
	} */
}

function getInstruments(struct=false, arr=false) {
	const rows = instruments.split(';');
	const res = arr ? [] : {};
	for (const row of rows) {
		const item = struct ? new Instrument(row) : row;
		if (arr) {
			res.push(item);
		} else {
			res[ row.match(/^\d+\b/)[0] ] = item;
		}
	}
	return res;
}

function getPrices() {
	return csvParse(prices).slice(1).map(rowToObj);
}

export default { init, getInstruments, getPrices }