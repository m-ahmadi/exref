fetchResponsePromise = fetch(resource, init);

async function foo() {
	var res = await fetch('https://jsonplaceholder.typicode.com/users');
	return await res.text()
}
foo().then(console.log)

var res = await (await fetch(url)).text()

fetch('some/url/path').then(async res => await res.text() ).then(console.log)
fetch('some/url/path').then(res => res.text().then(console.log) )

new Promise((resolve, reject) => {
	fetch(url).then( async res => resolve(await res.text()) ).catch(err => reject(err))
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
var responsePromise = WindowOrWorkerGlobalScope.fetch(resource=''|URL|Request, ?init={
	method:         'get|post|put|patch|delete|head',
	headers:        Headers | {k:ByteString, ...},
	body:           Blob | BufferSource | FormData | URLSearchParams | USVString | ReadableStream, if method !'get|head'
	mode:           'cors|no-cors|same-origin',
	credentials:    'same-origin|omit|include' | FederatedCredential | PasswordCredential,
	cache:          'default|no-store|reload|no-cache|force-cache|only-if-cached',
	redirect:       'follow|error|manual',
	referrer:       '' | 'about:client',
	referrerPolicy: 'no-referrer|origin|same-origin|strict-origin|unsafe-url| origin-when-cross-origin | strict-origin-when-cross-origin | no-referrer-when-downgrade',
	
	integrity:      '',
	keepalive:      false,
	signal:         AbortSignal,
})

Request implements Body {
	...init
	destination  RequestDestination
	body         Body.body
	bodyUsed     Body.bodyUsed
	clone()
}
Response implements Body {
	headers      Headers
	ok           false (status >=200 & <=299)
	redirected   false
	status       0
	statusText   ''
	trailers     await Headers
	type         'basic|cors|...'
	url          ''
	useFinalURL  false
	body         Body.body
	bodyUsed     Body.bodyUsed
	clone()
	error()
	redirect()
}
mixin Body {
	body          ReadableStream
	bodyUsed      false
	arrayBuffer()
	blob()
	formDate()
	json()
}
Headers {
	append(name, value)
	delete(name)
	entries()
	forEach()
	get(name)
	has(name)
	keys()
	set(name, value)
	values()
}

! = depricated
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// json
const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log( JSON.stringify(myJson) );

fetch('somefile.json').then(async res => {
	const jsonRes = await res.json();
	const str = JSON.stringify(jsonRes);
	console.log(str);
});

fetch('http://example.com/movies.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (myJson) {
		console.log( JSON.stringify(myJson) );
	});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// post:
postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
	// default options are marked with *
	return fetch(url, {
		method: 'POST',             // *GET, POST, PUT, DELETE, etc.
		mode: 'cors',               // no-cors, cors, *same-origin
		cache: 'no-cache',          // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	})
	.then(response => response.json()); // parses JSON response into native JavaScript objects 
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// uploade json:
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// uploade file:
// <input type="file" />
var formData = new FormData();
var fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// uploade multiple files:
// <input type="file" multiple />
var formData = new FormData();
var photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (var i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// request
// instead of passing a path to fetch() call, you can pass an instance of Request()

// basic:
const request = new Request('https://www.mozilla.org/favicon.ico');
const request = new Request('https://example.com', {method: 'POST', body: '{"foo": "bar"}'});
request.url         // 
request.method      // 
request.credentials // 
request.bodyUsed    // 

// supplying it to fetch:
var myInit = {
	method: 'GET',
	headers: new Headers(),
	mode: 'cors',
	cache: 'default'
};
var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest).then(function (response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// headers
var content = 'Hello World';
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

// object literal:
myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately',
});

// querying and retrieving:
myHeaders.has('Content-Type') // true
myHeaders.has('Set-Cookie')   // false
myHeaders.set('Content-Type', 'text/html')
myHeaders.append('X-Custom-Header', 'AnotherValue')
 
myHeaders.get('Content-Length')  // 11
myHeaders.get('X-Custom-Header') // ['ProcessThisImmediately', 'AnotherValue']
 
myHeaders.delete('X-Custom-Header')
myHeaders.get('X-Custom-Header') // [ ]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@