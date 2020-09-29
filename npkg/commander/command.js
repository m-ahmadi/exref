program
	.command(name)
		// name: string containing command name and arguments
		// when name is '*' an un-matched command will be passed as the first arg, followed by the rest of ARGV remaining.
	.alias(name)
	.description(desc)
		// desc: description string that appears on help
	.action(function (cmdArg1 [, cmdArg2, ..., ] options) {})
		// a callback to be invoked when command name is specified via ARGV
		// cmdArg:      argument(s) of sub-command
		// options:     options passed after the sub-command
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const program = require('commander');

// basic, no argument
program
	.command('cmd1')
	.description('simple command with no arguments')
	.action(function () {
		console.log('here')
	});

// required argument
program
  .command('cmd2 [val]')
	.description('command with required argument, error if omitted')
	.action(function (val) {
		console.log(val)
	})

// optional argument
program
	.command('cmd3 <val>')
	.description('command with optional argument')
	.action(function (val) {
		console.log(val)
	})

// variadic argument (by appending ...)
// (passed as array, only last arg, only for commands)
program
	.command('cmd4 <val> [vals...]')
	.description('command with variadic argument')
	.action(function (val, vals) {
		console.log(val);
		if (vals) vals.forEach( i => console.log(i) );
	});

// command with options
program
	.command('cmd5')
	.description('this command has its own options')
	.option('-n, --name [name]', 'this option only belongs to this command')
	.action(function (a, b) {
		console.log(a, b)
	});

// special
program
	.command('*')
	.description('deploy the given env')
	.action(function (env) {
		console.log('deploying %s', env);
	});

program.parse(process.argv);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// commands must be separated (and not chained)
program.command('a').action(console.log)
program.command('b').action(console.log)

// wrong:
program
	.command('a').action(console.log)
	.command('b').action(console.log)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// specify arguments for the top-level command
var cmdValue;
var envValue;
program
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
		cmdValue = cmd;
		envValue = env;
  })
	.parse(process.argv);
if (cmdValue === undefined) {
  console.error('no command given!');
  process.exit(1);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// separate files for sub-commands
program.command(name, description, options); // options should be handled in the separate file

program
  .version('0.1.0')
  .command('install [name]', 'install one or more packages')
  .command('search [query]', 'search with optional query')
  .command('update', 'update installed packages', {executableFile: 'myUpdateSubCommand'})
  .command('list', 'list packages installed', {isDefault: true})
  .parse(process.argv);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
