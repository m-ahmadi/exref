new URLSearchParams(?init='' | {} | [])

URLSearchParams {
	append(name, value)
	delete(name)
	entries()
	forEach(callback)
	get(name)
	getAll(name)
	has(name)
	keys()
	set(name, value)
	sort()
	toString()
	values()
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var p = new URLSearchParams({a:'x', b:'y'})
p.toString() // 'a=x&b=y'
''+p         // ...
p+''         // ...

var p = new URLSearchParams({name:'woody', topic:'api'})
p.has('topic')                // true
p.get('topic')                // 'api'
p.getAll('topic')             // ['api']
p.get('foo')                  // null
p.append('topic', 'webdev')   // 'name=woody&topic=api&topic=webdev'
p.set('topic', 'More webdev') // 'name=woody&topic=More+webdev'
p.delete('topic')             // 'name=woody'

// will remove leading ? if present
new URLSearchParams('?query=value') +'' // 'query=value'

// can directly be used in `for of`
// both equal:
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}

// does not parse full urls
var p = new URLSearchParams('http://example.com/search?query=%40')
p.has('query') // false 
p.get('query') // null
// instead:
var url = new URL('http://example.com/search?query=%40')
var p = new URLSearchParams(url.search)
p.has('query') // true
p.get('query') // '@'