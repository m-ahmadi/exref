var MongoClient = require('mongodb').MongoClient; // npm i mongodb

// collations are like tables
// documents are like rows in tables

(async () => {
  var client = new MongoClient('mongodb://localhost:27017', {useUnifiedTopology: true});
	await client.connect().catch(err => console.log(err));
	console.log('connected');
	
	var db = client.db('mydb'); // creates db if doesn't exist
	
	var col = db.collection('find'); // creates collection if doesn't exist
	var res = await col.insertMany([{a:1}, {a:1}, {a:1}]);
	var found = await col.find({a:1}).limit(2).toArray();
	
	var col2 = db.collection('users');
	await col2.insertOne({a:1, b:'2'});
	await col2.insertMany([{a:43, b:56}, {a:32, b:42}]);
	await col2.updateMany(/*where*/{a: 1}, {$set: {b: 3}});
	
	var all = await col2.find({}).toArray();
	var found = await col2.find({b: '2'}).toArray();
	
	await col2.deleteMany({a: 1}); // removes all with a===1
	
  client.close();
})();