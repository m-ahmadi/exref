// works on posix and windows
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
console.log( stdinBuffer.toString() );

// short:
fs.readFileSync(0).toString()
// or
fs.readFileSync(0, 'utf8')