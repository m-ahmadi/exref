db.collection.remove()
db.collection.deleteOne()
db.collection.deleteMany()

db.users.deleteMany(        // collection
	{ status: "reject" }    // delete filter
);

db.users.remove({a: 2})
db.users.remove({a: 2}, {justOne: true})
db.users.deleteOne({a : 3});