var argv = require('yargs')
    .option('f', {
        alias: 'file',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'string'
    })
    .argv
;

// is the same as

var argv = require('yargs')
    .alias('f', 'file')
    .demandOption('f')
    .default('f', '/etc/passwd')
    .describe('f', 'x marks the spot')
    .string('f')
	.help('h').alias('h', 'help')
    .argv
;
// Optionally .options() can take an object that maps keys to opt parameters.

var argv = require('yargs')
    .options({
      'f': {
        alias: 'file',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'string'
      }
    })
	.help('h').alias('h', 'help')
    .argv
;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Valid opt keys include:

	alias: string or array of strings, alias(es) for the canonical option key, see alias()
	array: boolean, interpret option as an array, see array()
	boolean: boolean, interpret option as a boolean flag, see boolean()
	choices: value or array of values, limit valid option arguments to a predefined set, see choices()
	coerce: function, coerce or transform parsed command line values into another value, see coerce()
	config: boolean, interpret option as a path to a JSON config file, see config()
	configParser: function, provide a custom config parsing function, see config()
	conflicts: string or object, require certain keys not to be set, see conflicts()
	count: boolean, interpret option as a count of boolean flags, see count()
	default: value, set a default value for the option, see default()
	defaultDescription: string, use this description for the default value in help content, see default()
	demandOption: boolean or string, demand the option be given, with optional error message, see demandOption()
	desc/describe/description: string, the option description for help content, see describe()
	global: boolean, indicate that this key should not be reset when a command is invoked, see global()
	group: string, when displaying usage instructions place the option under an alternative group heading, see group()
	implies: string or object, require certain keys to be set, see implies()
	nargs: number, specify how many arguments should be consumed for the option, see nargs()
	normalize: boolean, apply path.normalize() to the option, see normalize()
	number: boolean, interpret option as a number, number()
	requiresArg: boolean, require the option be specified with a value, see requiresArg()
	skipValidation: boolean, skips validation if the option is present, see skipValidation()
	string: boolean, interpret option as a string, see string()
	type: one of the following strings
	'array': synonymous for array: true, see array()
	'boolean': synonymous for boolean: true, see boolean()
	'count': synonymous for count: true, see count()
	'number': synonymous for number: true, see number()
	'string': synonymous for string: true, see string()
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@