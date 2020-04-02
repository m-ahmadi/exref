const child_process = require('child_process');
const { promisify } = require('util');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// exec
child_process.execSync('node --version').toString() // v10.16.3

const exec = promisify(child_process.exec);
(async function () {
  const { stdout } = await exec('node', ['--version']);
  console.log(stdout);
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
child.on('exit', code => {
  console.log(`Exit code is: ${code}`);
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