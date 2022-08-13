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
// spawning .bat .cmd files
const { spawn, execSync } = require('child_process');

// all equal:
const child = spawn('cmd.exe', ['/c', 'my.bat']);
const child = spawn('my', {shell:true});
execSync('my.bat');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// exec
child_process.execSync('node --version').toString() // v10.16.3

const exec =  require('util').promisify(child_process.exec);
(async function () {
	const { stdout, stderr } = await exec('node', ['--version']);
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

const execFile = require('util').promisify(child_process.execFile);
(async function () {
	const result = await execFile('node', ['--version']);
	console.log(result) // { stdout: 'v10.16.3\r\n', stderr: '' }
	console.log(stdout);
})()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// spawn
const child = spawn('ls', ['-a', '-l']);
const child = spawn('sass style.scss:style.css', {stdio: 'inherit'}); // preserve colors
const child = spawn('python', ['script.py']);

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
const { fork } = child_process;

// main.js
const child = fork('./child.js');
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