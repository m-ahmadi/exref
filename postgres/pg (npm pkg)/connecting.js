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