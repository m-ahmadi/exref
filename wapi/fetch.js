
// https://developer.mozilla.org/en-US/docs/Web/API/fetch

RequestMethod = 'get|post|put|patch|delete|head'
RequestCredentials = 'same-origin|omit|include' | FederatedCredential | PasswordCredential
RequestCache = 'default|no-store|reload|no-cache|force-cache|only-if-cached'
RequestMode = 'cors|no-cors|same-origin'
RequestRedirect = 'follow|error|manual'
RequestReferrer = '' | 'about:client'
referrerPolicy = 'no-referrer|origin|same-origin|strict-origin|unsafe-url| origin-when-cross-origin | strict-origin-when-cross-origin | no-referrer-when-downgrade'

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
var responsePromise = WindowOrWorkerGlobalScope.fetch(resource=''|URL|Request, ?init={
	method:         RequestMethod,
	headers:        Headers | {k:ByteString, ...},
	body:          	(Blob | ArrayBuffer | TypedArray | DataView | FormData | URLSearchParams | '' | ReadableStream) if method !'get|head',
	mode:           RequestMode,
	credentials:    RequestCredentials,
	cache:          RequestCache,
	redirect:       RequestRedirect,
	referrer:       RequestReferrer,
	referrerPolicy: referrerPolicy,
	integrity:      '',
	keepalive:      false,
	signal:         AbortSignal,
	priority:       'auto|high|low|',
})

// https://developer.mozilla.org/en-US/docs/Web/API/Request
var request = new Request(input=''|Request, ?options={...init}) implements Body
request.body           = ReadableStream|null
request.bodyUsed       = Boolean
request.cache          = RequestCache
request.credentials    = 'omit|same-origin|include'
request.destination    = RequestDestination
request.headers        = Headers
request.integrity      = ''
request.method         = RequestMethod
request.mode           = RequestMode
request.redirect       = RequestRedirect
request.referrer       = RequestReferrer
request.referrerPolicy = referrerPolicy
request.signal         = AbortSignal
request.url            = ''|URL
request.arrayBuffer()
request.blob()
request.clone()
request.formData()
request.json()
request.text()

// https://developer.mozilla.org/en-US/docs/Web/API/Response
Response.error()
Response.redirect()
Response.json()
var response = new Response() implements Body
response.body        = ReadableStream|null
response.bodyUsed    = Boolean
response.headers     = Headers
response.ok          = false (status >=200 & <=299)
response.redirected  = false
response.status      = 0
response.statusText  = ''
response.type        = 'basic|cors|...'
response.url         = ''
response.arrayBuffer()
response.blob()
response.clone()
response.formData()
response.json()
response.text()

// https://developer.mozilla.org/en-US/docs/Web/API/Headers
var headers = new Headers()
headers.append(name, value)
headers.delete(name)
headers.entries()
headers.forEach()
headers.get(name)
headers.getSetCookie(): []
headers.has(name)
headers.keys()
headers.set(name, value)
headers.values()

// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
var abortController = new AbortController()
abortController.abort()
// https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
var abortSignal = AbortController.signal

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
async function foo() {
	var res = await fetch('https://jsonplaceholder.typicode.com/users');
	return await res.text()
}
foo().then(console.log)

// notations
var res = await (await fetch(url)).text()
fetch('some/url/path').then(async res => await res.text() ).then(console.log)
fetch('some/url/path').then(res => res.text().then(console.log) )

// using a Promise
new Promise((resolve, reject) => {
	fetch(url).then( async res => resolve(await res.text()) ).catch(err => reject(err))
});

// fail types
fetch('https://jsonplaceholder.typicode.com/users')
	.then(async response => {
		if (response.ok) {
			var r = await response.json();
			document.write( r.map(i=>i.name).join('<br><br>') )
		} else {
			console.error('response error (not between 200 & 299)');
		}
	})
	.catch(error => {
		console.error('request error', error);
	});

// post
var req = await fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({title:'jj', body:'qq', userId:1}),
	headers: {'Content-type': 'application/json; charset=UTF-8'},
});
await req.json() // {id:101, title:'jj', body:'qq', userId:1} (as if this was posted to database)

// Request
var request = new Request('https://www.mozilla.org/favicon.ico');
var request = new Request('https://example.com', {method: 'POST', body: '{"foo": "bar"}'});
var myRequest = new Request('flowers.jpg', {method:'GET', headers:new Headers(), mode:'cors', cache:'default'});
fetch(myRequest).then(res => myimg.src = URL.createObjectURL(myBlob) )

// response headers
var body = JSON.stringify({username:'john', password:'123', captcha:'9u2yf'});
var resp = await fetch('https://foo.com/login', {method:'POST', credentials:'include', body});
resp.headers.getSetCookie() // in node only, in browser: Refused to get unsafe header "Set-Cookie"
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// URLSearchParams

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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// FormData

// x-www-form-urlencoded
var fd = new FormData()
var data = {'name':'john', 'age':'46'}
Object.keys(data).forEach(k => fd.append(k, data[k]))
var res = await (await fetch('https://httpbin.org/post', {method:'POST', body:fd})).json()
console.log(res.form)

// upload single file: <input type="file" />
var fd = new FormData()
var fileField = document.querySelector('input[type="file"]')
fd.append('username', 'abc123')
fd.append('avatar', fileField.files[0])
await (await fetch('https://example.com/profile/avatar', {method:'PUT', body:fd})).json()

// upload multiple files: <input type="file" multiple />
var fd = new FormData()
var photos = document.querySelector('input[type="file"][multiple]')
fd.append('title', 'My Vegas Vacation')
photos.files.forEach(i => fd.append('photos', i))
await (await fetch('https://example.com/posts', {method:'POST', body:fd})).json()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// json

let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
let json = await response.json();
json.name // 'Leanne Graham'

fetch('https://jsonplaceholder.typicode.com/users/1').then(async res => {
	let json = await res.json();
	console.log(json.name); // 'Leanne Graham'
});

fetch('https://jsonplaceholder.typicode.com/users/1')
	.then(res => res.json())
	.then(json => console.log(json.name));

res = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json();
res.name // 'Leanne Graham'

// post with json body
var body = JSON.stringify({foo: 'bar'});
res = await (await fetch('https://echo.zuplo.io', {method:'POST', body, headers: {'Content-Type':'application/json'}})).json();
res.body // {foo: 'bar'}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Headers

var content = 'Hello World';
var headers = new Headers();
headers.append('Content-Type', 'text/plain');
headers.append('Content-Length', content.length.toString());
headers.append('X-Custom-Header', 'ProcessThisImmediately');

// object literal:
headers = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately',
});

// querying and retrieving:
headers.has('Content-Type') // true
headers.has('Set-Cookie')   // false
headers.set('Content-Type', 'text/html')
headers.append('X-Custom-Header', 'AnotherValue')
 
headers.get('Content-Length')  // 11
headers.get('X-Custom-Header') // ['ProcessThisImmediately', 'AnotherValue']
 
headers.delete('X-Custom-Header')
headers.get('X-Custom-Header') // []
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// blob
fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_100kB.jpg')
	.then(async r => {
		var img = document.createElement('img');
		img.src = URL.createObjectURL( await r.blob() );
		document.body.append(img);
	})
	.catch(error => {
		console.error('failed request', error);
	});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// AbortController

var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).then(async r => {
	console.log( await r.text() );
}).catch(e => {
	console.log(e.message);
	
	// detection
	if (e.name === 'AbortError') // aborted by user
});
controller.abort(); // user aborted the request


// abort multiple fetches
var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).catch(e => console.log(e.message));
fetch('https://jsonplaceholder.typicode.com/todos/2', {signal}).catch(e => console.log(e.message));
controller.abort();


// abort after 1 second (won't abort if request is done under 1 second)
var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).then(async r => {
	console.log(await r.text());
}).catch(e => {
	console.log(e.message);
});
setTimeout(() => controller.abort(), 1000);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@