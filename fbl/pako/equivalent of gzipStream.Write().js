const zlib = require('zlib');
const pako = require('pako');
const cc = str => [...str].map(c => c.charCodeAt(0) & 255);

// c# GZipStream.Write()
gzipStream.Write("a")                 // [31, 139, 8, 0, 0, 0, 0, 0, 4, 0, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]

// problem:
pako.gzip("a")                        // [31, 139, 8, 0, 0, 0, 0, 0, 0, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0] Uint8Array(21)
pako.gzip([97])                       // same...
pako.gzip(new Uint8Array([97]))       // same...
pako.gzip(cc("a"))                    // same...

zlib.gzipSync("a")                    // [31, 139, 8, 0, 0, 0, 0, 0, 0, 10, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0] Buffer(21)
zlib.gzipSync(new Uint8Array([97]))   // same...

// different options
zlib.gzipSync("a", {level: 1})        // [31, 139, 8, 0, 0, 0, 0, 0, 4, 10, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
zlib.gzipSync("a", {level: 9})        // [31, 139, 8, 0, 0, 0, 0, 0, 2, 10, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
zlib.gzipSync("a", {strategy: 2|3})   // [31, 139, 8, 0, 0, 0, 0, 0, 4, 10, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]

pako.gzip("a", {level: 1})            // [31, 139, 8, 0, 0, 0, 0, 0, 4, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
pako.gzip("a", {level: 9})            // [31, 139, 8, 0, 0, 0, 0, 0, 2, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
pako.gzip("a", {strategy: 2|3})       // [31, 139, 8, 0, 0, 0, 0, 0, 4, 3, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]
	
	
	
// solution:
pako.gzip("a", {strategy: 2, header:{os: 0}})
pako.gzip("a", {strategy: 3, header:{os: 0}})

pako.gzip("a", {strategy: 2, header:{}})
pako.gzip("a", {strategy: 3, header:{}})

// [31, 139, 8, 0, 0, 0, 0, 0, 4, 0, 75, 4, 0, 67, 190, 183, 232, 1, 0, 0, 0]