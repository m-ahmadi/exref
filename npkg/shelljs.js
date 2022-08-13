var shell = require("shelljs");

if (!shell.which("git")) {
	shell.echo("Sorry, this script requires git");
	shell.exit(1);
}

// Copy files to release dir
shell.rm("-rf", "out/Release");
shell.cp("-R", "stuff/", "out/Release");

// Replace macros in each .js file
shell.cd("lib");
shell.ls("*.js").forEach(file => {
	shell.sed("-i", "BUILD_VERSION", "v0.1.2", file);
	shell.sed("-i", /^.*REMOVE_THIS_LINE.*$/, "", file);
	shell.sed("-i", /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat("macro.js"), file);
});
shell.cd("..");

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
	shell.echo("Error: Git commit failed");
	shell.exit(1);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	path problem
// process.env.Path += ";./node_modules/.bin";
shell.env.Path += ";./node_modules/.bin";

if ( shell.exec("node build/libs css --color").code !== 0 ) {
	console.log("failed");
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	How to preserve colors in the output:
	
	Append:
		--color
		or
		--color always
	to the command in exec()

	
	Did not work:
	proccess.env.FORCE_COLOR=1
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Async exec
var version = exec('node --version', {silent:true}).stdout;
 
var child = exec('some_long_running_process', {async:true});
child.stdout.on('data', data => {
	// do something with data
});
exec('some_long_running_process', (code, stdout, stderr) => {
	console.log('Exit code:', code);
	console.log('Program output:', stdout);
	console.log('Program stderr:', stderr);
});