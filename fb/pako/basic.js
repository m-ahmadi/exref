var pako = require('pako'); // npm install pako --save

pako.gzip(data=Uint8Array|Array|String, ?options={...zlibOptions, to: 'string'}): Uint8Array|Array|String
// https://zlib.net/manual.html#Advanced

pako.gzip('a')  // Uint8Array(21) [31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
pako.gzip([97]) // Uint8Array(21) [31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]

var zip   = pako.gzip('hello');
var unzip = pako.ungzip(zip, {to:'string'});
unzip // 'hello'

// deflate
var input = new Uint8Array(); // fill input data
var output = pako.deflate(input);

// inflate (simple wrapper can throws exception on broken stream)
var compressed = new Uint8Array(); // fill data to uncompress
try {
  var result = pako.inflate(compressed);
} catch (err) {
  console.log(err);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// some example:

// base64 encoded binary data:
var b64Data = 'H4sIAAAAAAAAAwXB2w0AEBAEwFbWl2Y0IW4jQmziPNo3k6TuGK0Tj/ESVRs6yzkuHRnGIqPB92qzhg8yp62UMAAAAA==';

var strData = atob(b64Data);                           // decode base64 (convert ascii to binary)
var charData = [...strData].map(x => x.charCodeAt(0)); // convert binary string to character-number array
var binData = new Uint8Array(charData);                // turn number array into byte-array
var data = pako.inflate(binData);                      // pako magic

var strData = String.fromCharCode.apply(null, new Uint16Array(data)); // convert gunzipped byteArray back to ascii string:

console.log(strData);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@