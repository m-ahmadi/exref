db.collection.update()
db.collection.updateOne() 
db.collection.updateMany()
db.collection.replaceOne()

db.users.updateMany(           // collection
	{ age: {$lt: 18} },          // update filter
	{ $set: {status: 'reject'} } // update action
);

db.users.updateOne(
	{ a : 2 },
	{ $set: {b : 1} }
);

db.users.update({a: 2}, {a: 2, b: 3})             // update whole
db.users.update({a: 2}, { $set: {b: 3} })         // update only
db.users.update({a: 2}, { $inc: {b: 2} })         // inc prop
db.users.update({a: 2}, { $unset: {b: ''} })      // unset prop
db.users.update({a: 3}, {{a: '', b: ''}},         // update whole (insert if not exists)
	{upsert: true})
db.users.update({a: 2}, { $rename: {'b': 'bb'} }) // rename key

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
{
	'_id' : ObjectId('4b2b9f67a1f631733d917a7a'),
	'name' : 'joe',
	'friends' : 32,
	'enemies' : 2
}
var joe = db.users.findOne({'name' : 'joe'});
joe.relationships = {'friends' : joe.friends, 'enemies' : joe.enemies};
joe.username = joe.name;
delete joe.friends;
delete joe.enemies;
delete joe.name;
db.users.update({'name' : 'joe'}, joe);
{
	'_id' : ObjectId('4b2b9f67a1f631733d917a7a'),
	'username' : 'joe',
	'relationships' : {
		'friends' : 32,
		'enemies' : 2
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// modifiers
{
	'_id' : ObjectId('4b253b067525f35f94b60a31'),
	'url' : 'www.example.com',
	'pageviews' : 52
}
db.analytics.update( {'url' : 'www.example.com'}, {'$inc' : {'pageviews' : 1}} )
db.analytics.find()
{
	'_id' : ObjectId('4b253b067525f35f94b60a31'),
	'url' : 'www.example.com',
	'pageviews' : 53
}