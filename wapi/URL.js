window.URL | webkitURL
new URL("http://google.com")

// returns a URL object (just like window.location object)
{
	hash: "",
	host: "google.com",
	hostname: "google.com",
	href: "http://google.com/",
	origin: "http://google.com",
	password: "",
	pathname: "/",
	port: "",
	protocol: "http:",
	// etc...
}

URL.createObjectURL()
URL.revokeObjectURL()

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