// https://developer.mozilla.org/en-US/docs/Web/API/URL

new URL(url='', ?base='')
URL {
	hash:         ''
	host:         ''
	hostname:     ''
	href:         ''
	origin:       ''
	password:     ''
	pathname:     ''
	port:         ''
	protocol:     ''
	search:       ''
	searchParams: URLSearchParams
	username:     ''
	
	toString()
	toJSON()
}

URL.createObjectURL(object=File|Blob|MediaSource): ''
URL.revokeObjectURL('')

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

new URL('http://google.com')

// base urls
new URL('bar',  'http://foo.com/')     // http://foo.com/bar
new URL('/bar', 'http://foo.com')      // http://foo.com/bar
new URL('/bar', 'http://foo.com/bar')  // http://foo.com/bar
new URL('/bar', 'https://abc.com/x/y') // https://abc.com/bar

new URL('http://www.foo.com', )                 // http://www.foo.com/
new URL('http://www.bar.com', 'http://foo.com') // http://www.bar.com/

new URL('/bar', '') // TypeError invalid url: ''
new URL('/bar')     // TypeError invalid url: '/bar'

new URL('//foo.com', 'https://example.com') // http://foo.com


// set params on a url
var u = new URL('http://example.com');
u.searchParams.set('foo', 32);
''+u; // 'http://example.com/?foo=32'

var u = new URL('http://example.com');
u.search = new URLSearchParams({foo: 32, bar: 7});
''+u; // 'http://example.com/?foo=32&bar=7'
