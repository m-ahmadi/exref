const assert = require('assert').strict;

deepStrictEqual(actual, expected[, message])
notDeepStrictEqual(actual, expected[, message])

strictEqual(actual, expected[, message])
notStrictEqual(actual, expected[, message])

assert.deepEqual([[[1,2,3]], 4,5], [[[1,2,'3']],4,5]); // AssertionError: Expected inputs to be strictly deep-equal


// legacy
const assert = require('assert');

assert.deepEqual()
assert.equal()
assert.notDeepEqual()
assert.notEqual()