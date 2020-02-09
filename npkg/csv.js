const csv = require('csv');
const { parse, generate, stringify, transform } = require('csv');

/* full install
npm install csv --save

will install:
	csv-parse
	csv-stringify
	csv-generate
	stream-transform
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// csv-parse
// npm install csv-parse --save
const parse = require('csv-parse');
const parseSync = require('csv-parse/lib/sync');

// async await
const parse = require('util').promisify(parse);
(async function () {
	var res = await parse('1,2,3\n4,5,6');
	console.log(res);
})()

// sync
var parsed = parseSync('1,2,3\n4,5,6');

// callback
var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
parse(input, {comment: '#'}, function (err, output) {
	console.log(output);
})

// stream
var parse = require('csv-parse')
var output = []

// 1. create parser
var parser = parse( { delimiter: ':' } ) 

// 2. add event handlers (readable stream api)
parser.on('readable', function () { 
  var record
  while ( record = parser.read() ) {
    output.push(record)
  }
})
parser.on('error', function (err) {
  console.error(err.message)
})
parser.on('end', function () {
  console.log(output)
})

// 3. write data to the stream
parser.write("root:x:0:0:root:/root:/bin/bash\n")
parser.write("someone:x:1022:1022::/home/someone:/bin/bash\n")

// 4. close the readable stream
parser.end()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@