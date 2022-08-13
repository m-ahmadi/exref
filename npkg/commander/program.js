const program = require('commander');
// or
const { program } = require('commander');
// or
const { Command } = require('commander');
const program = new Command();


program.helpOption('-h, --help', 'custom help message')             // custom help flags or description
program.version('0.0.1', '-v, --version', 'custom version message') // set version (and change default flags or message, if desired)
program.name('my-command')                                          // name used in usage description in first line of help
program.usage('[options] <file ...>')                               // set/get the command usage str
program.description('Application simple description')               // set description str
program.option('-f, --foo', 'description')                          // define option with flags, description and optional coercion fn
program.command().description().action()                            // add command
program.parse(process.argv)                                         // parse argv, settings, options and invoking commands when defined
await program.parseAsync(process.argv)                              // ... async
program.opts()                                                      // object containing passed options

.storeOptionsAsProperties(false) // whether to store options as props on command object, or store separately and access using .opts()
.passCommandToAction(false)      // whether to pass command to action handler, or just the options 

// show help if no arg
if (!program.args.length)      program.help()                       
if (process.argv.length === 2) program.help()

// hypenless args
program.args


// override exit handling
program.exitOverride();
try {
  program.parse(process.argv);
} catch (err) {
  // custom processing...
}


// detect if subcommand is called
const subs = new Set( cmd.commands.map(i=>[i.name(),i.alias()]).reduce((a,c)=>a=a.concat(c),[]) );
if ( cmd.rawArgs.find(i=> subs.has(i)) ) return;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
program
.addCommand()
.addHelpText(position='beforeAll|before|after|afterAll', text='' | ()='')
.action()
.allowExcessArguments()
.allowUnknownOption()
.enablePositionalOptions()
.exitOverride()
.combineFlagAndOptionalValue()
.command()
.configureOutput()
.createOption()
.help(cb)
.helpInformation()
.helpOption(flags, description)
.name()
.option()
.opts()
.outputHelp(cb): ''
.parse()
.parseAsync()
.parseOption()
.passCommandToAction() // deprecated
.passThroughOptions()
.requiredOptions()
.storeOptionsAsProperties()
.usage()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@