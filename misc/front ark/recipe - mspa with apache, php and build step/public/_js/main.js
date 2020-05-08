import tse from './tse/tse.js';
import datable from './datable/datable.js';
window.log = console.log;

$(async function () {
	
	await tse.init();
	await datable.init();
	
});