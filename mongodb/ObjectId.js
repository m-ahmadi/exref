var ObjectID = require('mongodb').ObjectID;

new ObjectID(id)
// creates a new ObjectID instance.
// id: string | number. can be a 24 byte hex string, 12 byte binary string or a number.

var id;
id = new ObjectID()                           // default algorithm
id = new ObjectID("aaaaaaaaaaaa")             // 12 byte string
id = new ObjectID("616161616161616161616161") // 24 byte hex string representation of a 12 byte string
id = new ObjectID(5000)                       // seconds timestamp, with rest of the bytes zeroed out
id.generationTime                             // generation time this instance
id.getTimestamp()                             // generation date (accurate up to the second)
id.toHexString()                              // 24 byte hex string representation
id.generate(time)                             // generate a 12 byte id buffer used in ObjectID's
id.equals(otherID)                            // compares equality of this ObjectID with otherID

// static methods
id = ObjectID.createFromHexString("616161616161616161616161") // 24 byte hex string representation of a 12 byte string
id = ObjectID.createFromTime(5000)            // seconds timestamp, with rest of the bytes zeroed out
id = ObjectID.createPk()                      // default algorithm (deprecated)
ObjectID.isValid()                            // checks if a value is a valid bson ObjectID

// convert buffer to string representation to create new ObjectID
var buffer = new Buffer("aaaaaaaaaaaa").toString()
new ObjectID(buffer).toHexString()
