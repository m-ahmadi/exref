// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
var xhr = new XMLHttpRequest()

xhr.readyState =
	0 // UNSENT            client created, open() not called yet
	1 // OPENED            open() been called
	2 // HEADERS_RECEIVED  send() been called, and headers and status are available
	3 // LOADING           downloading... responseText holds partial data
	4 // DONE              operation is complete

xhr.response        = ArrayBuffer|Blob|Document|{}|''
xhr.responseText    = ''
xhr.responseType    = ''|'arraybuffer|blob|document|json|text'
xhr.responseURL     = String<URL>|null
xhr.responseXML     = Document
xhr.status          = Number<HTTPResponseStatusCode>
xhr.statusText      = String<HTTPResponseStatusCode>
xhr.timeout         = Number<UnsignedLong>
xhr.upload          = XMLHttpRequestUpload
xhr.withCredentials = Boolean

xhr.abort()
xhr.open(method='GET|POST|PUT|DELETE|...', url=URL, ?async=true, ?user=null, ?password=null)
xhr.overrideMimeType(mimeType='')
xhr.send(?body=null|Document|XMLHttpRequestBodyInit)
xhr.setRequestHeader(header='', value='')
var headers = xhr.getAllResponseHeaders()
var header = xhr.getResponseHeader(headerName='')

xhr['on'+'abort|error|load|loadend|loadstart|progress|readystatechange|timeout'] = function(event){}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// get request
var xhr = new XMLHttpRequest();
xhr.onload = function () { console.log(this.responseText) };
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
xhr.send();



// post request - urlencoded body
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://site.com/login', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) console.log(this.responseText);
};
xhr.send('username=john&password=123');



// post request - json body
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) console.log(xhr.responseText);
};
xhr.send(JSON.stringify({title:'jj', body:'qq', userId:1}));



// sync request
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', false);
xhr.send(null);
var res = xhr.status === 200 ? xhr.responseText : '';



// head request
var allHeaders, singleHeader, urlExists, urlNotExist;
var xhr = new XMLHttpRequest()
xhr.open('HEAD', '/foo/bar.html', true);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		allHeaders = xhr.getAllResponseHeaders();
		singleHeader = xhr.getResponseHeader('Set-Cookie'); // Refused to get unsafe header "Set-Cookie"
		urlExists = xhr.status === 200;
		urlNotExist = xhr.status === 404;
	}
};
xhr.send(null);
