db.users.find().help()                                                         // show DBCursor help
db.users.bulkWrite( operations, <optional params> )                            // bulk execute write operations, optional parameters are: w, wtimeout, j
db.users.count( query = {}, <optional params> )                                // count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
db.users.countDocuments( query = {}, <optional params> )                       // count the number of documents that matches the query, optional parameters are: limit, skip, hint, maxTimeMS
db.users.estimatedDocumentCount( <optional params> )                           // estimate the document count using collection metadata, optional parameters are: maxTimeMS
db.users.copyTo(newColl)                                                       // duplicates collection by copying all documents to newColl; no indexes are copied.
db.users.convertToCapped(maxBytes)                                             // calls {convertToCapped:'users', size:maxBytes}} command
db.users.createIndex(keypattern[,options])
db.users.createIndexes([keypatterns], <options>)
db.users.dataSize()
db.users.deleteOne( filter, <optional params> )                                // delete first matching document, optional parameters are: w, wtimeout, j
db.users.deleteMany( filter, <optional params> )                               // delete all matching documents, optional parameters are: w, wtimeout, j
db.users.distinct( key, query, <optional params> )                             // e.g. db.users.distinct( 'x' ), optional parameters are: maxTimeMS
db.users.drop() drop the collection
db.users.dropIndex(index)                                                      // e.g. db.users.dropIndex( "indexName" ) or db.users.dropIndex( { "indexKey" : 1 } )
db.users.dropIndexes()
db.users.ensureIndex(keypattern[,options])                                     // DEPRECATED, use createIndex() instead
db.users.explain().help()                                                      // show explain help
db.users.reIndex()
db.users.find([query],[fields])                                                // query is an optional query filter. fields is optional set of fields to return. e.g. db.users.find( {x:77} , {name:1, x:1} )
db.users.find(...).count()
db.users.find(...).limit(n)
db.users.find(...).skip(n)
db.users.find(...).sort(...)
db.users.findOne([query], [fields], [options], [readConcern])
db.users.findOneAndDelete( filter, <optional params> )                         // delete first matching document, optional parameters are: projection, sort, maxTimeMS
db.users.findOneAndReplace( filter, replacement, <optional params> )           // replace first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
db.users.findOneAndUpdate( filter, update, <optional params> )                 // update first matching document, optional parameters are: projection, sort, maxTimeMS, upsert, returnNewDocument
db.users.getDB() get DB object associated with collection
db.users.getPlanCache() get query plan cache associated with collection
db.users.getIndexes()
db.users.group( { key : ..., initial: ..., reduce : ...[, cond: ...] } )
db.users.insert(obj)
db.users.insertOne( obj, <optional params> )                                   // insert a document, optional parameters are: w, wtimeout, j
db.users.insertMany( [objects], <optional params> )                            // insert multiple documents, optional parameters are: w, wtimeout, j
db.users.mapReduce( mapFunction , reduceFunction , <optional params> )
db.users.aggregate( [pipeline], <optional params> )                            // performs an aggregation on a collection; returns a cursor
db.users.remove(query)
db.users.replaceOne( filter, replacement, <optional params> )                  // replace the first matching document, optional parameters are: upsert, w, wtimeout, j
db.users.renameCollection( newName , <dropTarget> ) renames the collection.
db.users.runCommand( name , <options> ) runs a db command with the given name where the first param is the collection name
db.users.save(obj)
db.users.stats({scale: N, indexDetails: true/false, indexDetailsKey: <index key>, indexDetailsName: <index name>})
db.users.storageSize()                                                         // includes free space allocated to this collection
db.users.totalIndexSize()                                                      // size in bytes of all the indexes
db.users.totalSize()                                                           // storage allocated for all data and indexes
db.users.update( query, object[, upsert_bool, multi_bool] )                    // instead of two flags, you can pass an object with fields: upsert, multi
db.users.updateOne( filter, update, <optional params> )                        // update the first matching document, optional parameters are: upsert, w, wtimeout, j
db.users.updateMany( filter, update, <optional params> )                       // update all matching documents, optional parameters are: upsert, w, wtimeout, j
db.users.validate( <full> )                                                    // SLOW
db.users.getShardVersion()                                                     // only for use with sharding
db.users.getShardDistribution()                                                // prints statistics about data distribution in the cluster
db.users.getSplitKeysForChunks( <maxChunkSize> )                               // calculates split points over all chunks and returns splitter function
db.users.getWriteConcern()                                                     // returns the write concern used for any operations on this collection, inherited from server/db if set
db.users.setWriteConcern( <write concern doc> )                                // sets the write concern for writes to the collection
db.users.unsetWriteConcern( <write concern doc> )                              // unsets the write concern for writes to the collection
db.users.latencyStats()                                                        // display operation latency histograms for this collection