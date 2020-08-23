const fs = require('fs');

// if top-level async function rejects, it causes "unhandled rejection" errors.
// catch it if you're not sure if it will reject or not.


// catched

(async function () {
	
	await client.connect();
	
	
})().catch(console.log)

//-------------------------------------------------------------------------------------------------
// uncatched

(async function () {
	
	await client.connect();

	
})()

//-------------------------------------------------------------------------------------------------
// with the top-level await proposal implemented in future

try {
	var text = await main();
	console.log(text);
} catch (e) {
	// 
}