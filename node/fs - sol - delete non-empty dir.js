const fs = require('fs');
const path = require('path');

function rmdirRecursive(dir) {
  if ( fs.existsSync(dir) ) {
    fs.readdirSync(dir).forEach(file => {
      const curPath = path.join(dir, file);
      if ( fs.lstatSync(curPath).isDirectory() ) { // recurse
        rmdirRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

// careful not to run on wrong dir as it's not guarded