var observable = new rxjs.Subject();

// from one or multiple values
rxjs.of('foo', 'bar')

// from array of values
rxjs.from([1,2,3])

// from an event
rxjs.fromEvent(document.querySelector('button'), 'click')

// from a callback (last argument is a callback)
// fs.exists(path, cb(exists))
var exists = rxjs.bindCallback(fs.exists);
exists('file.txt').subscribe(exists => console.log('Does file exist?', exists));

// from a callback (last argument is a callback)
// fs.rename(pathA, pathB, cb(err, result))
var rename = rxjs.bindNodeCallback(fs.rename);
rename('file.txt', 'else.txt').subscribe(() => console.log('Renamed!'));