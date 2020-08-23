const child_process = require('child_process');
const { promisify } = require('util');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// spawning .bat .cmd files
const { spawn, execSync } = require('child_process');

// all equal:
const child = spawn('cmd.exe', ['/c', 'my.bat']);
const child = spawn('my', {shell:true});
execSync('my.bat');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// exec
child_process.execSync('node --version').toString() // v10.16.3

const exec = promisify(child_process.exec);
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// execFile
child_process.execFileSync('node', ['--version']).toString() // v10.16.3

const execFile = promisify(child_process.execFile);
(async function () {
  const result = await execFile('node', ['--version']);
	console.log(result) // { stdout: 'v10.16.3\r\n', stderr: '' }
  console.log(stdout);
})()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// spawn
const child = child_process.spawn('ls', ['-a', '-l']);
const child = spawn('sass style.scss:style.css', {stdio: 'inherit'}); // preserve colors

child.stdout.on('data', (data) => {
  console.log('stdout:', data+'');
});

child.stderr.on('data', (data) => {
  console.log('stderr:', data+'');
});

child.on('error', err => {
  console.log('failed to start subprocess.', err);
});

child.on('close', (code, signal) => {
  console.log('child process exited with code', code);
});

child.on('exit', (code, signal) => {
  console.log('exit code is:', code);
});

child.on('message', (message, sendHandle) => {
  console.log('message from subprocess.');
});

child.on('disconnect', () => {
	// subprocess.disconnect() in parent
	// process.disconnect()    in child
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const child = child_process.fork('./worker');

child.on('message', function (m) {
  // receive results from child process
  console.log('received: ' + m);
});

// send child process some work
child.send('upperCase this String');

// worker.js:
process.on('message', function(m) {
  m = m.toUpperCase();
  // pass results back to parent process
  process.send( m.toUpperCase(m) );
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@