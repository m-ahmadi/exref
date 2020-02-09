db.collection.insert()
db.collection.insertOne()
db.collection.insertMany()

db.users.inserOne(          // collection
	{						// document
		name: "sue",
		age: 26,
		status: "pending"
	}
);

db.users.insertMany([
	{a : 1},
	{a : 2},
	{a : 3}
]);