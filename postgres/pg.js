const pg = require('pg'); // npm install pg
const client = new pg.Client();

const config = {
	name:    '',
	text:    '',
	values:  [],
	rowMode: 'array',
	types: {
		getTypeParser: () => val => val,
	},
};

client.query(config=''|{}, values=[], ?callback=(err,res)=>)

(async function () {
	await client.connect();
	
	// text-only query
	const res = await client.query('SELECT NOW() as now').catch(console.log);
	console.log(res.rows[0]);
	
	// parameterized query
	const res = await client.query('SELECT $1::text as message', ['Hello world!']);
	console.log(res.rows[0].message); // Hello world!
	
	
	const query = {
		text: 'INSERT INTO users(name, email) VALUES($1, $2)',
		values: ['brianc', 'brian.m.carlson@gmail.com'],
	};
	const res = await client.query(query);
	
	
	
	await client.end();
})();


// connecting
const pg = require('pg');
// pools and clients use environment variables for connection information

const pool = new pg.Pool(); // reading env vars
const res = await pool.query('SELECT NOW()');
await pool.end();

const client = new pg.Client(); // reading env vars
await client.connect();
const res = await client.query('SELECT NOW()');
await client.end();

/*
PGHOST=database.server.com
PGUSER=dbuser
PGPASSWORD=secretpassword
PGDATABASE=mydb
PGPORT=3211

node script.js

default values for the environment variables used:
	PGHOST='localhost'
	PGUSER=process.env.USER
	PGPASSWORD=null
	PGDATABASE=process.env.USER
	PGPORT=5432
*/