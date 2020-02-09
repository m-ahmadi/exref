var req = new XMLHttpRequest();
req.addEventListener('load', function () {
  console.log(this.responseText);
});
req.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
req.send();

// sync
var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', false);
req.send(null);
var res = req.status === 200 ? req.responseText : '';