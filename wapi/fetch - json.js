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


// upload json:
var data = {username: 'example'};
fetch('https://example.com/api/foo', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));