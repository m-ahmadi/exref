var app = require('commander');

app.option(flags, description, coercionFn?, defaultValue) /*
flags:
	a string defining flag names and arguments
	valid separators: comma/pipe/space (, | ' ')
	argument delimiters:
		<>  required, error if omitted
		[]  optional, true  if omitted
description:   optional. a description that appears in --help
coercionFn:    optional. a function to change input value
defaultValue:  optional. a value to be used if option is set with no value  */

app
// short and long flags:
.option('-a',                      'short flag, 1 dash,   becomes uppercase prop') // app.A
.option('--long-name-with-dashes', 'long  flag, 2 dashes, becomes camelCase prop') // app.longNameWithDashes
.option('--long',                  'anohter long flag')                            // app.long
.option('-b, --long-name',         'long prop is used, short flag becomes alias')  // node . -b => app.longName = true

// simple boolean flag: (defaults to false)
.option('-c, --bool',              'if set: true, if not set: undefined')          // node . -c => app.bool = true

// negatable boolean flag: (defaults to true)
.option('-d, --no-soup',           'no gets removed from prop name')               // node . -d     => app.soup = false
.option('-d, --no-soup',           'makes option true by default')                 // node .        => app.soup = true
.option('--no-soup',               'not defining a --soup option')                 // node . --soup => error: unknown option '--soup'
.option('--no-soup',               'makes option true by default')                 // node .        => app.soup = true
.option('--cheese <flavour>',      '...', 'mozzarella')
.option('--no-cheese',             'does not change default value of above')       // node . --cheese  app.cheese = 'mozzarella'

// flag with value argument:
.option('-e, --required <value>',  'required value, error if set with no value')   // node . -e => error: argument missing
.option('-f, --optional [value]',  'optional value, true if set with no value')    // node . -f => app.optional = true
.option('-g <value>',              'short flag only, required')                    // node . -g => app.G
.option('-h [value]',              'short flag only, optional')                    // node . -h => app.H = true

// default value:
.option('-i, --default1 <value>',  'with default value, required', 'foo')          // node . -i => error but: app.default1 = 'foo'
.option('-j, --default2 [value]',  'with default value, optional', 'bar')          // node . -j => app.default2 = 'bar'

// flag with coerce function:
.option('-k, --coerce <value>',    'with coerce function', a => `*${a}*`)          // node . -k aa => app.coerce = '*aa*'

// order of appearance:
.option('-l, --normal1',           'normal, long used, alias short')               // app.normal1
.option('-m, --normal2 [val]',     'normal with value arg')                        // app.normal2
.option('--long-first, -n',        'short used, long ignored')                     // app.N
.option('-o [val], --on-short',    'short used, long ignored')                     // app.O (app.onShort = undefined)
.option('-p [val], --both [val]',  'short used, long ignored')                     // app.P (app.both = undefined)

// flag name separators:
.option('-q, --comma',             'comma separated')
.option('-r|--pipe',               'pipe  separated')
.option('-s --space',              'space separated')
.parse(process.argv);

console.log( app.opts() );