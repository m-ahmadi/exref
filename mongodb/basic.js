const MongoClient = require('mongodb').MongoClient;

// collations are like tables
// documents are like rows in tables

(async function() {
  const client = new MongoClient('mongodb://localhost:27017');
	await client.connect().catch( err => console.log(err.stack) );
	
	const db = client.db('mydb');      // creates the database   `mydb` if it doesn't exist?
	const col = db.collection('find'); // creates the collection `find` if it doesn't exist.
	
	const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
	const docs = await col.find({a:1}).limit(2).toArray();
	
	
	db.createCollection("users");	     // creates collection
	
	db.users.insert({
		a: 1,
		b: '2'
	});

	db.users.update({
		{a: 1}, // where
		{$set: {b: 3}}
	});

	db.users.find();

	db.users.find({b: '2'});

	db.users.remove({a: 1});           // removes all with a===1
	
  client.close();
})();