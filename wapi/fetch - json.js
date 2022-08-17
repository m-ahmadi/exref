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
