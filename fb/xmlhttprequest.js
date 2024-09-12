var { XMLHttpRequest } = require('xmlhttprequest'); // npm i xmlhttprequest

// example (sync)
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/3', false);
xhr.send(null);
var res = JSON.parse(xhr.responseText);
res // {username: "Samantha", ...}
