WeakSet(?iterable=[{}, ...])

// only holds objects (no other type allowed)

WeakSet.prototype.add()
WeakSet.prototype.delete()
WeakSet.prototype.has()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo)
ws.add(bar)

ws.has(foo) // true
ws.has(bar) // true

ws.delete(foo)
ws.has(foo) // false
ws.has(bar) // true
