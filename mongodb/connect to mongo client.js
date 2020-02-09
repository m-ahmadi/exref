const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
const options = {
	useNewUrlParser: true,
	poolSize: 10,
	ssl: true
};

// static method
MongoClient.connect(url, callback);
MongoClient.connect(url, options, callback);
function callback(err, client) {
	console.log("connected!");
	client.close();
}

// instance
const client = new MongoClient(url, options);
client.connect(function (err) {
  console.log("connected!");
  client.close();
});

// async (best)
(async function () {
  const client = new MongoClient(url);
	await client.connect().catch( err => console.log(err.stack) );
	console.log("connected!");
	
	const db = client.db(dbName);
	const col = db.collection('find');
	const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
	const docs = await col.find({a:1}).limit(2).toArray();
	
  client.close();
})();
