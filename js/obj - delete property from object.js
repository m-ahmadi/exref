// Fast 	but		key remains on its place in the hashmap
object.name = undefined
object[expression] = undefined

// Slow		but		deletes the key from the hashmap.
delete object.name
delete object[expression]

