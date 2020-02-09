//
.command(cmd, desc, [builder], [handler])
.command(cmd, desc, [module])
.command(module)

yargs
  .command('get', 'make a get HTTP request', {
    url: {
      alias: 'u',
      default: 'http://yargs.js.org/'
    }
  })
  .help()
  .argv