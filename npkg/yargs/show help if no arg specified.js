// it can be accomplished with demandOption() or demandCommand()
.demandOption(KEY, [MSG | BOOLEAN])
.demandOption(KEY, MSG)

.demandCommand([MIN=1], [MINMSG])
.demandCommand([MIN=1], [MAX], [MINMSG], [MAXMSG])
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// demandOption
require('yargs')
  .option('run', {
    alias: 'r',
    describe: 'run your program'
  })
  .option('path', {
    alias: 'p',
    describe: 'provide a path to file'
  })
  .option('spec', {
    alias: 's',
    describe: 'program specifications'
  })
  .demandOption(['run', 'path'], 'Please provide both run and path arguments to work with this tool')
  .help()
  .argv


// another
require('yargs')
  .options({
    'run': {
      alias: 'r',
      describe: 'run your program',
      demandOption: true
    },
    'path': {
      alias: 'p',
      describe: 'provide a path to file',
      demandOption: true
    },
    'spec': {
      alias: 's',
      describe: 'program specifications'
    }
  })
  .help()
  .argv
  
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// demandCommand
require('yargs')
  .command({
    command: 'configure <key> [value]',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      console.log(`setting ${argv.key} to ${argv.value}`)
    }
  })
  // provide a minimum demand and a minimum demand message
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv