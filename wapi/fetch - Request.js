var request = new Request('https://www.mozilla.org/favicon.ico');
var request = new Request('https://example.com', {method: 'POST', body: '{"foo": "bar"}'});
request.url         // 
request.method      // 
request.credentials // 
request.bodyUsed    // 

var myRequest = new Request('flowers.jpg', {
	method: 'GET',
	headers: new Headers(),
	mode: 'cors',
	cache: 'default'
});

fetch(myRequest).then(res => myimg.src = URL.createObjectURL(myBlob) )