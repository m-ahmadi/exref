const pg = require('pg');

(async function () {
	const client = new pg.Client();
	await client.connect();

	const res = await client.query('SELECT NOW() as now').catch(console.log) ;
  console.log( res.rows[0] );
	
	await client.end();
})()