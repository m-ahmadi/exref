const child_process = require('child_process');
const { promisify } = require('util');
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
// exec
const exec = promisify(child_process.exec);
(async function () {
  const { stdout } = await exec('node', ['--version']);
  console.log(stdout);
})()
child_process.exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
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