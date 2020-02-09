const fs = require('fs');

fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)

// newPath already exists:  it's overwritten.
// newPath is a directory:  an error is raised.

fs.rename('oldFile.txt', 'newFile.txt', err => {
  if (err) throw err;
  console.log('Rename complete!');
});

fs.renameSync('oldFile.txt', 'newFile.txt');