const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// these are settings not covered by the connection uri string.
const options = {
	poolSize: 5,
	ssl: false,
	sslValidate: false,
	sslCA: null,
	sslCert: null,
	sslKey: null,
	sslPass: null,
	autoReconnect: true,
	noDelay: true,
	keepAlive: 30000,
	connectTimeoutMS: 30000,
	socketTimeoutMS: 360000,
	reconnectTries: 30,
	reconnectInterval: 1000,
	ha: true,
	haInterval: 10000 || 5000,
	replicaSet: null,
	// ... many more
	// http://mongodb.github.io/node-mongodb-native/3.2/reference/connecting/connection-settings/
};

(async function() {
  const client = new MongoClient(url, options);
	await client.connect();
  client.close();
})();