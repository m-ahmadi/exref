/*
@apiExample [{type}] title
	example

example for usage of an api method.
output as a pre-formatted code.
use it for a complete example at the beginning of the description of an endpoint.

type
	optional.
	code language.
	html, css, javascript, js, curl, bash, ...

title
	short title for the example.

example
	detailed example, multilines capable.
*/

/**
	@api {get} /api/example Example
	@apiExample {javascript} JavasScript usage:
(async function () {
  const client = new MongoClient(url);
  await client.connect().catch( err => console.log(err.stack) );
  console.log("connected!");

  const db = client.db(dbName);
  const col = db.collection('find');
  const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
  const docs = await col.find({a:1}).limit(2).toArray();

  client.close();
})();
	@apiExample {curl} Command Line usage:
	curl -i http://localhost/user/4711
	
	@apiGroup Params
 */