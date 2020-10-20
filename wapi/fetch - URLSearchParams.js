// pass query strings
const url = new URL('some/url')
const params = {a:'x', b:'y'}  // or  [ ['a','x'], ['b','y'] ]
url.search = new URLSearchParams(params).toString()
fetch(url).then()

// shorthand
fetch( 'http://foo.com?' + new URLSearchParams({a:'x', b:'y'}) )

// another way
const url = new URL('some/url')
const params = {a:'x', b:'y'}
Object.keys(params).forEach( key => url.searchParams.append(key, params[key]) )
fetch(url).then()