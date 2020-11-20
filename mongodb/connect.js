const MongoClient = require('mongodb').MongoClient;

var client = MongoClient.connect(url='', ?options={}, ?callback=(err,client)=>): <Promise> if !callback

var client = new MongoClient(url='', ?options={});
client.connect(?callback=err=>): <Promise> if !callback


var url = 'mongodb://localhost:27017';

var options = {
	poolSize:          5,
	ssl:               false,
	autoReconnect:     true,
	noDelay:           true,
	keepAlive:         30000,
	connectTimeoutMS:  30000,
	reconnectTries:    30,
	reconnectInterval: 1000,
	ha:                true,
	useNewUrlParser:   true,
	// ... many more
	// http://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html#.connect
};

// example

(async function () {
  const client = new MongoClient(url);
	const client = new MongoClient(url, options);
	
	await client.connect()
	await client.connect().catch( err => console.log(err.stack) );
	console.log('connected!');
	
	const db = client.db('dbname');
	const col = db.collection('find');
	const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
	const docs = await col.find({a:1}).limit(2).toArray();
	
  client.close();
})();