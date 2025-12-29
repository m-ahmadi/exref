const { exec, execFile, spawn, fork } = require('child_process');

/*
exec        parent  ->  buffer command output & pass to callback  <-  child
execFile    parent  ->  ...↑ no shell                             <-  child

fork        parent  ->  communication channel  <-  child  (fresh v8 instance)
spawn       parent  ->  streaming interface    <-  child  (run system commands)
*/

// https://nodejs.org/api/child_process.html

exec(command='', ?options={
	cwd:         process.cwd() | '' | URL,
	env:         process.env | {},
	encoding:    'utf8',
	shell:       process.env.ComSpec if Windows | '/bin/sh' if Unix,
	signal:      AbortSignal,
	timeout:     0,
	maxBuffer:   1024 * 1024,
	killSignal:  'SIGTERM' | int,
	uid:         0,
	gid:         0,
	windowsHide: false,
}, ?callback=(error,stdout,stderr))

execFile(file='', ?args=['',...], ?options={
	cwd:         '' | URL,
	env:         process.env | {},
	encoding:    'utf8',
	timeout:     0,
	maxBuffer:   1024 * 1024,
	killSignal:  'SIGTERM' | int,
	uid:         0,
	gid:         0,
	windowsHide: false,
	windowsVerbatimArguments: false,
	shell:       false,
	signal:      AbortSignal,
}, ?callback=(error,stdout,stderr))

fork(modulePath='', ?args=['',...], ?options={
	cwd:            '' | URL,
	detached:       boolean, // platform dependant
	env:            process.env | {},
	execPath:       '',
	execArgv:       process.execArgv | ['',...],
	gid:            0,
	serialization:  'json|advanced',
	signal:         AbortSignal,
	killSignal:     'SIGTERM' | int,
	silent:         false,
	stdio:          [] | 'pipe|overlapped|ignore|inherit',
	uid:            0,
	windowsVerbatimArguments: false
	timeout:        undefined | 0,
})

spawn(command='', ?args=['',...], ?options={
	cwd:           '' | URL,
	env:           process.env | {},
	argv0:         ↑command | '',
	stdio:         [] | 'pipe|overlapped|ignore|inherit',
	detached:      boolean, // platform dependant
	uid:           0,
	gid:           0,
	serialization: 'json|advanced',
	shell:         false,
	windowsVerbatimArguments: false,
	windowsHide:   false,
	signal:        AbortSignal,
	timeout:       undefined | 0,
	killSignal:    'SIGTERM' | int,
})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// eg - sol

//------------------------------------------------
// spawning .bat .cmd files
var {spawn, execSync} = require('child_process');

// all equal:
var child = spawn('cmd.exe', ['/c', 'my.bat']);
var child = spawn('my', {shell:true});
execSync('my.bat');

//------------------------------------------------
// set shell variable between two scripts
process.env.ASS = 'white';
execSync('echo %ASS%', {stdio:'inherit'});

execSync('echo %ASS%', {stdio:'inherit', env:{...process.env, ASS:'white'}});

//------------------------------------------------
// call python inside venv
var {execSync} = require('child_process');

// simplest
execSync('.venv\\Scripts\\python.exe f.py');

// not ideal (activation disappears after command exits)
execSync('cmd /c .venv\\Scripts\\activate.bat && py f.py');

// or
var {spawn} = require('child_process');
var path = require('path');
var venvScripts = path.join(__dirname, '.venv', 'Scripts');
var child = spawn('py', ['f.py'], {
  env: {...process.env, PATH: `${venvScripts};${process.env.PATH}`},
  shell: true,
});
child.stdout.on('data', d => console.log(d.toString()));
child.stderr.on('data', d => console.error(d.toString()));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// exec
child_process.execSync('node --version').toString() // v10.16.3

var exec = require('util').promisify(child_process.exec);
(async function () {
	var { stdout, stderr } = await exec('node', ['--version']);
	console.log(stdout, stderr);
})()

child_process.exec('ls -la', (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// execFile
child_process.execFileSync('node', ['--version']).toString() // v10.16.3

var execFile = require('util').promisify(child_process.execFile);
(async function () {
	var result = await execFile('node', ['--version']);
	console.log(result) // { stdout: 'v10.16.3\r\n', stderr: '' }
	console.log(stdout);
})()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// spawn
var child = spawn('ls', ['-a', '-l']);
var child = spawn('sass style.scss:style.css', {stdio: 'inherit'}); // preserve colors
var child = spawn('python', ['script.py']);

child.stdout.on('data', (data) => {
	console.log('stdout:', data+'');
});

child.stderr.on('data', (data) => {
	console.log('stderr:', data+'');
});

child.on('error', err => {
	console.log('failed to start subprocess.', err);
});

child.on('message', (message, sendHandle) => {
	console.log('message from subprocess.');
});

child.on('exit', (code, signal) => {
	console.log('exit code is:', code);
});

child.on('close', (code, signal) => {
	console.log('child process exited with code', code);
});

child.on('disconnect', () => {
	// subprocess.disconnect() in parent
	// process.disconnect()    in child
});

// 'close' vs 'exit'
'close' // process ended & process stdio streams closed (multiple processes can share same stdio streams)
'exit'  // process ended
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// fork
var { fork } = child_process;

// main.js
var child = fork('./child.js');
child.on('message', function (m) {
	console.log('received: ' + m); // receive results from child process
});
child.send('upperCase this String'); // send child process some work

// child.js:
process.on('message', function(m) {
	m = m.toUpperCase();
	process.send( m.toUpperCase(m) ); // pass results back to parent process
});


// another example

// main.js
const forked = fork('child.js');
forked.on('message', (msg) => {
	console.log('Message from child', msg);
});
forked.send({ hello: 'world' });

// child.js
process.on('message', (msg) => {
	console.log('Message from parent:', msg);
});
let counter = 0;
setInterval(() => {
	process.send({ counter: counter++ });
}, 1000);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
