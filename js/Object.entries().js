var keyvalArr = Object.entries(obj) // returns own enumerable string-keyed properties

Object.entries({name:'John', age:30})   // [ ['name','John'], ['age',30] ]
Object.entries({foo:'bar', baz:42})     // [ ['foo', 'bar'], ['baz', 42] ]
Object.entries({0:'a', 1:'b', 2:'c'})   // [ ['0','a'], ['1','b'], ['2','c'] ]      array like object
Object.entries({100:'a', 2:'b', 7:'c'}) // [ ['2','b'], ['7','c'], ['100','a'] ]    array like object with random key ordering
Object.entries('foo')                   // [ ['0','f'], ['1','o'], ['2','o'] ]      non-object coerced to object
Object.entries(100)                     // [ ]                                      empty array for any primitive type (since they don't have any own properties)

var obj = Object.create({}, {baz: {enumerable:false}});
obj.foo = 35;
Object.entries(obj)                     // [ ['foo',35] ]                           only enumerable props show up



