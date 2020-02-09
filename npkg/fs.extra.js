var fs = require('fs.extra');

fs.copy('foo.txt', 'bar.txt', { replace: false }, function (err) {
  if (err) {
    // i.e. file already exists or can't write to directory 
    throw err;
  }
 
  console.log("Copied 'foo.txt' to 'bar.txt');
});

fs.copyRecursive('./foo', './bar', function (err) {
  if (err) {
    throw err;
  }
 
  console.log("Copied './foo' to './bar');
});

fs.mkdirp('/tmp/foo/bar/baz', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('pow!')
  }
});

fs.rmrfSync('/choose/me/carefully/');