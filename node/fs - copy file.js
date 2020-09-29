const fs = require('fs');

fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

const { COPYFILE_EXCL } = fs.constants;
fs.copyFile('source.txt', 'destination.txt', COPYFILE_EXCL, callback);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
fs.copyFile(src=''|Buffer|URL, dest=..., ?mode=0 | ?callback=(err)=>)
fs.copyFileSync(src=''|Buffer|URL, dest=..., ?mode=0)
// dest is overwritten if it already exists.
// if third arg is number, then it specifies flags.


fs.constants.COPYFILE_EXCL
	// copy operation fails if dest already exists.
fs.constants.COPYFILE_FICLONE /*
	copy operation attempts to create a copy-on-write reflink.
	if the platform does not support copy-on-write, then a fallback copy mechanism is used. */
fs.constants.COPYFILE_FICLONE_FORCE /*
	copy operation will attempt to create a copy-on-write reflink.
	if the platform does not support copy-on-write, then the operation will fail. */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// using streams
fs.createReadStream('source.txt').pipe(
	fs.createWriteStream('destination.txt')
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@