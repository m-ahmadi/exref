// node
var protobuf = require('protobufjs');         // static code + reflection + .proto parser
var protobuf = require('protobufjs/light');   // static code + reflection
var protobuf = require('protobufjs/minimal'); // static code only

// browser
// https://cdn.jsdelivr.net/npm/protobufjs/
// <script src="https://cdn.jsdelivr.net/npm/protobufjs@7.5.3/dist/protobuf.min.js"></script>

// api docs
// https://protobufjs.github.io/protobuf.js/


/* full vs light vs minimal
A          B C D E F  G     H
--------------------------------------------------------------------------------
full       x √ √ √ √  78    (bad cuz must parse everytime)
light      √ √ x x √  66    (best)
minimal    √ x x x √  20    (bad cuz no reflection + bad if compiled code size >= light build size)

	A: build
	B: compile step
	C: parsing overhead
	D: network overhead
	E: easily editing .proto files
	F: has reflection?
	G: size of build in KB
	H: imo

example of why not use minimal build for a large .proto file
A  B  C  D    E
------------------
50 91 66 -    157
50 -  20 3280 3300

	A: size of .proto file
	B: size of not-static compiled .proto
	C: size of statically compiled .proto
	D: size of corresponding library for compiled output
	E: total size of imports
	note: all sizes are in KB (kilo byte)

https://github.com/protobufjs/protobuf.js/tree/master/cli#reflection-vs-static-code
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// load & parse .proto - requires full build
var filename = './file.proto';
var root = protobuf.loadSync(filename);
var root = await protobuf.load(filename);
protobuf.load(filename, function (err, root) {});

// load compiled .proto - compiled into json descriptor (pbjs -t json) - light build is enough
var jsonDescriptor = require('./compiled.json');
var root = protobuf.Root.fromJSON(jsonDescriptor);

// load compiled .proto - compiled into js code (pbjs -t json-module) - light build is enough
protobuf.roots // {}
var root = require('./compiled.js');
protobuf.roots // {default: Root}

// load compiled .proto - compiled into static js code (pbjs -t static-module) - minimal build is enough
protobuf.roots // {}
var root = require('./compiled.js');
protobuf.roots // {default: {...}}

// misc
var json = root.toJSON();

// message stuff
var Message = root.ProtoOAMyMessage; // msg
var Message = root.lookup('ProtoOAMyMessage'); // find msg

// message payload
var payload = {foo: 1, bar: 2}; // msg payload
var err = Message.verify(payload); // msg payload verify

// message instance
var message = Message.create(payload); // msg instance
var message = Message.fromObject(payload);

// encode message instance
var messageEncoded = Message.encode(message); // msg encode
var messageEncoded = Message.encode(payload); // ...

// encode message instance - prepend one byte containing the length of message
var messageEncodedDelimited = Message.encodeDelimited(payload);

// encoded message instance to buffer
var buffer = messageEncoded.finish();
var buffer = messageEncodedDelimited.finish();

// convert message to plain object (with conversion options)
var object = Message.toObject(message, {
	enums: String,  // enums as string names
	longs: String,  // longs as strings (requires long.js)
	bytes: String,  // bytes as base64 encoded strings
	defaults: true, // includes default values
	arrays: true,   // populates empty arrays (repeated fields) even if defaults=false
	objects: true,  // populates empty objects (map fields) even if defaults=false
	oneofs: true    // includes virtual oneof fields set to the present field's name
});

// error checking
try {
	var messageDecoded = Message.decode(buffer);
} catch (e) {
	if (e instanceof protobuf.util.ProtocolError) {
		// e.instance holds the so far decoded message with missing required fields
	} else {
		// wire format is invalid
	}
}

// write .proto definitions in javascript
var { Root, Type, Field } = protobuf;
var Message = new Type('Message').add(new Field('age', 36, 'string'));
var root = new Root().define('awesomepackage').add(AwesomeMessage);
