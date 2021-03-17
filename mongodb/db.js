// http://mongodb.github.io/node-mongodb-native/3.6/api/Db.html

db.<method>(..., ?callback=(err,result)=>): <Promise> if !callback

db.addUser(username, password, options)
db.admin()
db.aggregate(pipeline, options)
db.collection(name, options)
db.collections(options)
db.command(command, options)
db.createCollection(name, options)
db.createIndex(name, fieldOrSpec, options)
db.dropCollection(name, options)
db.dropDatabase(options)
db.ensureIndex(name, fieldOrSpec, options)
db.executeDbAdminCommand(command, options)
db.indexInformation(name, options)
db.listCollections(filter, options)
db.profilingLevel(options)
db.removeUser(username, options)
db.renameCollection(fromCollection, toCollection, options)
db.setProfilingLevel(level, options)
db.stats(options)
db.unref()
db.watch(pipeline, options)


db.createCollection(name='', option={
	capped:              false,
	autoIndexId:         false,
	size:                0,
	max:                 0,
	storageEngine:       document,
	validator:           document,
	validationLevel:     '',
	validationAction:    '',
	indexOptionDefaults: document,
	viewOn:              '',
	pipeline:            pipeline,
	collation:           document
})