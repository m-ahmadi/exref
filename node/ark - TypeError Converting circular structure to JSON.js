// It means that the object you pass in the request has a circular reference, something like:
var a = {};
a.b = a;
// JSON.stringify cannot convert structures like this.