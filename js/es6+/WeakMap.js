WeakMap(?iterable=[
	[ {} | WeakMap, any ],
	...
])

// key must be obj, val can be any

WeakMap.prototype.delete(key)
WeakMap.prototype.get(key)
WeakMap.prototype.has(key)
WeakMap.prototype.set(key, value)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var wm = new WeakMap();
var k1 = {};
var k2 = [];
var k3 = ()=>null;
var k4 = new WeakMap();
var k5 = new Map();
var k6 = new Set();

wm.set(k1, 1)
wm.set(k2, 2)
wm.set(k3, 3)
wm.set(k4, 3)
wm.set(k5, 4)
wm.set(k6, 5)
wm.set(window, 6)

wm.get(k1)     // 1
wm.get(k2)     // 2
wm.get(k3)     // 3
wm.get(k4)     // 4
wm.get(k5)     // 5
wm.get(k6)     // 6
wm.get(window) // 4

// TypeError: Invalid value used as weak map key
wm.set(42, 2)   
wm.set(null, 2)
wm.set('no', 2)
wm.set(true, 2)

wm.has(k1)   // true
wm.delete(k1) 
wm.has(k1)   // false