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