Object.assign(target, ...sources)
// copies enumerable own props of sources objects into target obj and returns target
// DOES NOT create a new object (modifies the target obj)

var o1 = { a: 1 }
var o2 = { b: 2 }
var o3 = { c: 3, }

var o4 = Object.assign(o1, o2, o3)
o4 // {a: 1, b: 2, c: 3}

//------------------------------------------------------------------------------
// make a copy of an object and modify some properties:
var oldObj = { a: 10, b: 20 }

var newObj = Object.assign({}, oldObj, {
	b: 32
})

newObj // {a: 10, b: 32}
oldObj // {a: 10, b: 20}

//------------------------------------------------------------------------------
// later sources overwrite earlier ones.
// (put defaults at first argument)
var defaults = { a: 1, b: 2 }
var options  = { b: 32 }

Object.assign({}, defaults, options) // {a: 1, b: 32}
Object.assign({}, options, defaults) // {b: 2, a: 1}
//------------------------------------------------------------------------------