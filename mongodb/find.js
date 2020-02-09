db.collection.find()

db.users.find(					// collection
	{ age: {$gt: 18} },			// query criteria
	{ name: 1, address: 1 }		// projection
)


db.users.find({a: 2})
db.users.find({$or: [{a: 2}, {a: 3}]})
db.users.find({a: {$lt: 5}})
db.users.find({"b.c": 4}) // b is {}
db.users.find({b: 4}) // b is [], 4 is in arr
db.users.find().sort({c: 1}) // sort by prop: c (asc)
db.users.find().sort({c: -1}) // sort by prop: c (desc)
db.users.find().count()
db.users.find().limit(4)
db.users.find().limit(4).sort({c: 1})
db.users.find().forEach(i => i.c)

find().pretty()