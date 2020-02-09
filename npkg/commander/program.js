const program = require('commander');

program.helpOption('-h, --help', 'custom help message')             // custom help flags or description
program.version('0.0.1', '-v, --version', 'custom version message') // set version (and change default flags or message, if desired)
program.name('my-command')                                          // name used in usage description in first line of help
program.usage('[options] <file ...>')                               // set/get the command usage str
program.description('Application simple description')               // set description str
program.option('-f, --foo', 'description')                          // define option with flags, description and optional coercion fn
program.command().description().action()                            // add command
program.parse(process.argv)                                         // parse argv, settings, options and invoking commands when defined
program.opts()                                                      // object containing passed options
if (!program.args.length) program.help()                            // show help if no arg (didn't work)