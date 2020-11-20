// https://docs.mongodb.com/manual/reference/method/js-collection/
col.find().help()                                                 // show DBCursor help
col.bulkWrite(operations, <optional params>)                      // bulk execute write operations, optional parameters are: w, wtimeout, j
col.count(query={}, <optional params>)                            // count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
col.countDocuments(query={}, <optional params>)                   // count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
col.estimatedDocumentCount(<optional params>)                     // estimate the document count using collection metadata, optional parameters are: maxTimeMS
col.copyTo(newColl)                                               // duplicates collection by copying all documents to newColl; no indexes are copied.
col.convertToCapped(maxBytes)                                     // calls {convertToCapped:'col', size:maxBytes}} command
col.createIndex(keypattern[,options])
col.createIndexes([keypatterns], <options>)
col.dataSize()
col.deleteOne(filter, <optional params>)                          // delete first matching document, optional parameters are: w, wtimeout, j
col.deleteMany(filter, <optional params>)                         // delete all matching documents, optional parameters are: w, wtimeout, j
col.distinct(key, query, <optional params>)                       // e.g. col.distinct('x'), optional parameters are: maxTimeMS
col.drop() drop the collection
col.dropIndex(index)                                              // e.g. col.dropIndex("indexName") or col.dropIndex({ "indexKey" : 1 })
col.dropIndexes()
col.ensureIndex(keypattern[,options])                             // DEPRECATED, use createIndex() instead
col.explain().help()                                              // show explain help
col.reIndex()
col.find([query],[fields])                                        // query is an optional query filter. fields is optional set of fields to return. e.g. col.find({x:77} , {name:1, x:1})
col.find(...).count()
col.find(...).limit(n)
col.find(...).skip(n)
col.find(...).sort(...)
col.findOne([query], [fields], [options], [readConcern])
col.findOneAndDelete(filter, <optional params>)                   // delete first matching document, optional parameters are: projection, sort, maxTimeMS
col.findOneAndReplace(filter, replacement, <optional params>)     // replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
col.findOneAndUpdate(filter, update, <optional params>)           // update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
col.getDB()                                                       // get DB object associated with collection
col.getPlanCache()                                                // get query plan cache associated with collection
col.getIndexes()
col.group({ key : ..., initial: ..., reduce : ...[, cond: ...] })
col.insert(obj)
col.insertOne(obj, <optional params>)                             // insert a document, optional parameters are: w, wtimeout, j
col.insertMany([objects], <optional params>)                      // insert multiple documents, optional parameters are: w, wtimeout, j
col.mapReduce(mapFunction , reduceFunction , <optional params>)
col.aggregate([pipeline], <optional params>)                      // performs an aggregation on a collection; returns a cursor
col.remove(query)
col.replaceOne(filter, replacement, <optional params>)            // replace the first matching document, optional parameters are: upsert, w, wtimeout, j
col.renameCollection(newName , <dropTarget>)                      // renames the collection.
col.runCommand(name , <options>)                                  // runs a db command with the given name where the first param is the collection name
col.save(obj)
col.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
col.storageSize()                                                 // includes free space allocated to this collection
col.totalIndexSize()                                              // size in bytes of all the indexes
col.totalSize()                                                   // storage allocated for all data and indexes
col.update(query, object[, upsert_bool, multi_bool])              // instead of two flags, you can pass an object with fields: upsert, multi
col.updateOne(filter, update, <optional params>)                  // update the first matching document, optional parameters are: upsert, w, wtimeout, j
col.updateMany(filter, update, <optional params>)                 // update all matching documents, optional parameters are: upsert, w, wtimeout, j
col.validate(<full>)                                              // SLOW
col.getShardVersion()                                             // only for use with sharding
col.getShardDistribution()                                        // prints statistics about data distribution in the cluster
col.getSplitKeysForChunks(<maxChunkSize>)                         // calculates split points over all chunks and returns splitter function
col.getWriteConcern()                                             // returns the write concern used for any operations on this collection, inherited from server/db if set
col.setWriteConcern(<write concern doc>)                          // sets the write concern for writes to the collection
col.unsetWriteConcern(<write concern doc>)                        // unsets the write concern for writes to the collection
col.latencyStats()                                                // display operation latency histograms for this collection



// find
db.col.find(            // collection
	{ age: {$gt: 18} },     // query criteria
	{ name: 1, address: 1 } // projection
)

db.col.find({a: 2})
db.col.find({$or: [{a: 2}, {a: 3}]})
db.col.find({a: {$lt: 5}})
db.col.find({"b.c": 4})     // b is {}
db.col.find({b: 4})         // b is [], 4 is in arr
db.col.find().sort({c: 1})  // sort by prop: c (asc)
db.col.find().sort({c: -1}) // sort by prop: c (desc)
db.col.find().count()
db.col.find().limit(4)
db.col.find().limit(4).sort({c: 1})
db.col.find().forEach(i => i.c)

find().pretty()


// insert
db.col.insert()
db.col.insertOne()
db.col.insertMany()

db.users.inserOne(          // collection
	{						// document
		name: 'sue',
		age: 26,
		status: 'pending'
	}
);

db.users.insertMany([
	{a : 1},
	{a : 2},
	{a : 3}
]);


// delete
db.col.deleteMany({status: 'reject'}); // filter
db.col.remove({a: 2})
db.col.remove({a: 2}, {justOne: true})
db.col.deleteOne({a : 3});