const args = process.argv.slice(2);

if ( args.includes("myArg") ) doThing();
if ( args.includes("name=hasan") ) sayHelloToMyLittleHasan();
if ( args.includes("task") ) runTask( args[ args.indexOf("task")+1 ] );

// node index.js myAr
// node index.js name=hasan
// node index.js task doLaundry
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The arguments are stored in process.argv
	
	process.argv is an array containing the command line arguments
	
	first element will be path to node executable file
	second element will be path of the script file
	the next elements will be any additional command line arguments
*/
console.log(process.argv);
// node index.js hello world
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\path\\to\\script\\index.js',
  'hello',
  'world' ]

process.argv.forEach(function (val, index, array) {
	console.log(index + ": " + val);
});
// node index.js salam olaghe aziz
'0: C:\Program Files\nodejs\node.exe
1: E:\path\to\script\index.js
2: salam
3: olaghe
4: aziz'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Node.js-specific command-line options like:
	--inspect --inspect-brk --harmony --no-warnings and etc
	are typed before the name of the script file,
	and they do not appear in the process.argv property.
	
	But node specific options if typed after name of script are considered normal arguments,
	and they would no longer have their effect.
*/
console.log(process.argv);
// node index.js --inspect-brk
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\path\\to\\script\\index.js',
  '--inspect-brk' ]

// node --inspect-brk index.js
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\path\\to\\script\\index.js' ]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
process.execArgv
/*
	The process.execArgv property returns the set of Node.js-specific command-line options passed when the Node.js process was launched.
	These options do not:
		appear in the array returned by the process.argv property
		include the Node.js executable, the name of the script, or any options following the script name
*/
console.log(process.execArgv);
// node --no-warnings index.js
[ '--no-warnings' ]

console.log(process.execArgv);
// node --no-warnings --harmony index.js salam olaghe aziz
[ '--no-warnings', '--harmony' ]

console.log(process.argv);
// node --no-warnings --harmony index.js
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\path\\to\\script\\index.js' ]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	What does -- do?
	"--" Indicates the end of node options. Pass the rest of the arguments to the script.
	If no script filename or eval/print script is supplied prior to this, then the next argument will be used as a script filename.
	
	THIS IS A BUG OR SOMETHING
*/
console.log(process.argv);
console.log(process.execArgv);
// node --no-warnings --harmony index.js --no-deprecation --trace-warnings -- hello world
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\xampp\\htdocs\\test\\index.js',
  '--no-deprecation',
  '--trace-warnings',
  '--',
  'hello',
  'world' ]

[ '--no-warnings', '--harmony' ]
/*
	As of Node v10.15.0 LTS/v11.6.0 double-dash seems to be not needed anymore,
	but in the past as I remember, it was necessary when you wanted to pass arguments to node script,
	especialy when running npm run commands.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// code snippet from htmlbilder project for getting the value of arguments
let args = process.argv.slice(3);

const defaults = {};

function getValue(arg) {
  let idx = args.indexOf(arg);
  if (idx !== -1) {
    return args[ idx + 1 ];
  } else {
    // let k = arg.slice(2).replace(/([A-Z])/g, "_$1").toUpperCase(); // --outDir  to  OUT_DIR
    let k = arg.slice(2); // --outDir  to  outDir
    return defaults[k];
  }
}