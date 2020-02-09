const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/myproject";
const log = console.log;

q();

MongoClient.connect(url, (err, db) => {
	log("Connected successfully to server");
	let collection = db.collection("documents");
	doo(collection, () => db.close());
});

function doo(c, cb) {
	c.insertMany([{a : 1}, {a : 2}, {a : 3}], (err, res) => {
		log("Inserted 3 documents into the collection");
		log(res);
		cb();
	});
	
	c.find({}).toArray((err, docs) => {
		log("Found the following records");
		log(docs);
		cb();
	});
}


// put together fast
const o = {
	find(c, p, cb)   {
		c.find(p).toArray( (e, r) => cb(r) );
	},
	insert(c, p, cb) {
		c.insert( p, (e, r) => cb(r) );
	},
	update(c, p, cb) {
		c.update( p, (e, r) => cb(r) );
	},
	remove(c, p, cb) {
		c.deleteOne( p, (e, r) => cb(r) );
	}
};
function q(k, par, cb) {
	MongoClient.connect(url, (err, db) => {
		let collection = db.collection("widgets");
		o[k](collection, par, (r) => {
			cb(r);
			db.close();
		});
	});
}
q("find", {}, r => log(r));