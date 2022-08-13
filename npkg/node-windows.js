// npm install -g node-windows
// cd project
// npm link node-windows
const { Service, EventLogger } = require('node-windows');

const service = new Service({
	name:              '',                 // service name
	description:       '',                 // service description
	script:            '',                 // path/to/script.js (that should run as service)
	nodeOptions:       ['',...],           // node.exe options
	scriptOptions:     '',                 // pass cli switches to script
	env:               {'':'',} | [ {}, ], // process.env variables
	execPath:          '',                 // path/to/node.exe
	workingDirectory:  '...',              // process.cwd ???
	allowServiceLogon: false, // tell `winsw` to allow service account logins
	wait:              1,     // restart delay
	grow:              .25,   // add 25% to wait restart delay each time
	maxRetries:        0,     // do not restart after 3 fails
	maxRestarts:       3,     // do not restart after 3rd try (in a 60 second window)
	abortOnError:      false, // do not restart ever
})

service.install()
service.uninstall()
service.start()
service.top()

// events
service.on('install', ()=>)
'install'             // script is installed as a service
'alreadyinstalled'    // script is already known to be a service
'invalidinstallation' // an installation is detected but missing required files
'uninstall'           // an uninstallation is complete
'alreadyuninstalled'  // an uninstall is requested and no installation exists
'start'               // new service is started
'stop'                // the service is stopped
'error'               // when an error occurs (in some instances)

const wincmd = require('node-windows');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var { Service } = require('node-windows');

// install service
var svc = new Service({
	name: 'Hello World',
	description: 'The nodejs.org example web server.',
	script: 'C:\\path\\to\\helloworld.js',
	nodeOptions: ['--harmony', '--max_old_space_size=4096']
});
svc.install();

// uninstall service
var svc = new Service({
	name: 'Hello World',
	script: 'C:\\path\\to\\helloworld.js'
});
svc.uninstall();

new Service({name:'Hello World', script:'C:\\path\\to\\helloworld.js'}).uninstall()