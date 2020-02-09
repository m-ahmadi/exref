const fse = require('fs-extra');


const fs = require('fs-extra')
 
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log("success!")
});
 
try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile')
  console.log("success!")
} catch (err) {
  console.error(err)
}

/*
	copy
	emptyDir
	ensureFile
	ensureDir
	ensureLink
	ensureSymlink
	mkdirs
	move
	outputFile
	outputJson
	readJson
	remove
	writeJson

	copySync
	emptyDirSync
	ensureFileSync
	ensureDirSync
	ensureLinkSync
	ensureSymlinkSync
	mkdirsSync
	moveSync
	outputFileSync
	outputJsonSync
	readJsonSync
	removeSync
	writeJsonSync
*/