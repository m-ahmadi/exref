var n = age ?? -1; // same as:

var n = age !== null && !== undefined ? age : -1; // -1 if age is null or undefined