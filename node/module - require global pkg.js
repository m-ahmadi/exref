const groot = require('child_process').execSync('npm root -g').toString().replace(/\n+$/,'');
const pkgpath = require('path').join(groot, 'my-global-pkg');
const foo = require(pkgpath);

// oneliner
const foo = require(require('path').join(require('child_process').execSync('npm root -g').toString().replace(/\n+$/,''), 'foo'));

// another way (failed despite what docs says: https://nodejs.org/api/modules.html#loading-from-the-global-folders)
process.env.NODE_PATH = groot;
const foo = require('my-global-pkg');