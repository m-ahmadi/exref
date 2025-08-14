// docs
// https://protobufjs.github.io/protobuf.js/

// node
var protobuf = require('protobufjs');         // static code + reflection + .proto parser
var protobuf = require('protobufjs/light');   // static code + reflection
var protobuf = require('protobufjs/minimal'); // static code only

// browser
// https://cdn.jsdelivr.net/npm/protobufjs/
// <script src="https://cdn.jsdelivr.net/npm/protobufjs@7.5.3/dist/protobuf.min.js"></script>

Message

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var root = protobuf.loadSync('./file.proto');
var json = root.toJSON();

var Message = root.lookup('ProtoOAMyMessage');
var Message = root.ProtoOAMyMessage;
var payload = {foo:1, bar:2};
var messageEncoded = Message.encode(payload).finish();

