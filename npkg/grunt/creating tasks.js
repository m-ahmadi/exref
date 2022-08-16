/*
	Tasks are grunt's bread and butter.
	The stuff you do most often, like jshint or nodeunit.
	Every time Grunt is run, you specify one or more tasks to run, which tells Grunt what you'd like it to do.
	
	If you don't specify a task,
	but a task named "default" has been defined,
	that task will run (unsurprisingly) by default.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															Alias Tasks
	If a task list is specified,
	the new task will be an alias for one or more other tasks.
	Whenever this "alias task" is run,
	every specified tasks in taskList will be run, in the order specified.
	The taskList argument must be an array of tasks.
*/
grunt.registerTask(taskName, [description, ] taskList)

/*
	This example alias task defines a "default" task whereby the
	"jshint", "qunit", "concat" and "uglify" tasks are run automatically,
	if Grunt is executed without specifying any tasks:
*/
grunt.registerTask( 'default', ['jshint', 'qunit', 'concat', 'uglify'] );
/*
	Task arguments can be specified as well.
	In this example,
	the alias "dist" runs both the "concat" and "uglify" tasks,
	each with a "dist" argument:
*/
grunt.registerTask( 'dist', ['concat:dist', 'uglify:dist'] );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															Multi Tasks
	When a multi task is run, Grunt looks for a property of the same name in the Grunt configuration.
	Multi-tasks can have multiple configurations, defined using arbitrarily named "targets."

	Specifying both a task and target like grunt concat:foo or grunt concat:bar ,
	will process just the specified target's configuration,
	while running grunt concat will iterate over all targets, processing each in turn.
	Note that if a task has been renamed with grunt.task.renameTask,
	Grunt will look for a property with the new task name in the config object.

	Most of the contrib tasks, including:
	runt-contrib-jshint  plugin jshint task, and
	grunt-contrib-concat plugin concat task,
	are multi tasks.
*/
grunt.registerMultiTask(taskName, [description, ] taskFunction)

grunt.initConfig({
	log: {
		foo: [1, 2, 3],
		bar: 'hello world',
		baz: false
	}
});

grunt.registerMultiTask('log', 'Log stuff.', function () {
	/*	This function gets executed for every property in log object
		this.target = log { prop }
		this.data   = log {: 'value'}
	*/
	grunt.log.writeln( this.target + ': ' + this.data );
});
/*	grunt log    ->    foo: 1,2,3
	grunt bar    ->    bar: hello world
	grunt foo    ->    baz: false
	
	grunt
		foo: 1,2,3
		bar: hello world
		baz: false
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															"Basic" Tasks
	When a basic task is run,
	Grunt doesn't look at the configuration or environment,
	it just runs the specified task function,
	passing any specified colon-separated arguments in as function arguments.
*/
grunt.registerTask(taskName, [description, ] taskFunction)

grunt.registerTask('foo', 'A sample task that logs stuff.', function (arg1, arg2) {
	//console.log(arg1, arg2); // grunt foo:abc -> abc, grunt foo:ab:tt -> ab tt
	if (arguments.length === 0) {
		grunt.log.writeln( this.name + ", no args" );
	} else {
		grunt.log.writeln( this.name + ", " + arg1 + " " + arg2 );
	}
});
/*
	grunt foo:
	grunt foo:testing:123    ->    testing 123
	grunt foo                ->    foo, no args
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															Custom Tasks
	You can go crazy with tasks.
	If your tasks don't follow the "multi task" structure, use a custom task.
*/
grunt.registerTask('default', 'My "default" task description.', function () {
	grunt.log.writeln('Currently running the "default" task.');
});

/*------------------------------------------------------------------------------
	Inside a task, you can run other tasks.
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	// Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
	grunt.task.run('bar', 'baz');
	// Or:
	grunt.task.run(['bar', 'baz']);
});
/*------------------------------------------------------------------------------
	Tasks can be asynchronous
*/
grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function () {
	// Force task into async mode and grab a handle to the "done" function.
	var done = this.async();
	// Run some sync stuff.
	grunt.log.writeln('Processing task...');
	// And some async stuff.
	setTimeout(function () {
		grunt.log.writeln('All done!');
		done();
	}, 1000);
});
/*------------------------------------------------------------------------------
	Tasks can access their own name and arguments.
*/
grunt.registerTask('foo', 'My "foo" task.', function (a, b) {
	grunt.log.writeln( this.name, a, b );
});
/*	Usage:
	grunt foo
		logs: "foo", undefined, undefined
	grunt foo:bar
		logs: "foo", "bar", undefined
	grunt foo:bar:baz
		logs: "foo", "bar", "baz"
*/
/*------------------------------------------------------------------------------
	Tasks can fail if any errors were logged.
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	if (failureOfSomeKind) {
		grunt.log.error('This is an error message.');
	}

	// Fail by returning false if this task had errors
	if (ifErrors) { return false; }

	grunt.log.writeln('This is the success message');
});
/*------------------------------------------------------------------------------
	When tasks fail, all subsequent tasks will be aborted unless --force was specified
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	// Fail synchronously.
	return false;
});

grunt.registerTask('bar', 'My "bar" task.', function () {
	var done = this.async();
	setTimeout(function () {
	// Fail asynchronously.
		done(false);
	}, 1000);
});
/*------------------------------------------------------------------------------
	Tasks can be dependent on the successful execution of other tasks.
	Note that grunt.task.requires won't actually RUN the other task(s).
	It'll just check to see that it has run and not failed.
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	return false;
});

grunt.registerTask('bar', 'My "bar" task.', function () {
	// Fail task if "foo" task failed or never ran.
	grunt.task.requires('foo');
	// This code executes if the "foo" task ran successfully.
	grunt.log.writeln('Hello, world.');
});

// Usage:
// grunt foo bar
//   doesn't log, because foo failed.
//   ***Note: This is an example of space-separated sequential commands,
//   (similar to executing two lines of code: `grunt foo` then `grunt bar`)
// grunt bar
//   doesn't log, because foo never ran.
/*------------------------------------------------------------------------------
	Tasks can fail if required configuration properties don't exist
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	// Fail task if "meta.name" config prop is missing
	// Format 1: String
	grunt.config.requires('meta.name');
	// or Format 2: Array
	grunt.config.requires(['meta', 'name']);
	// Log... conditionally.
	grunt.log.writeln('This will only log if meta.name is defined in the config.');
});
/*------------------------------------------------------------------------------
	Tasks can access configuration properties
*/
grunt.registerTask('foo', 'My "foo" task.', function () {
	// Log the property value. Returns null if the property is undefined.
	grunt.log.writeln( 'The meta.name property is: ' + grunt.config('meta.name') );
	// Also logs the property value. Returns null if the property is undefined.
	grunt.log.writeln( 'The meta.name property is: ' + grunt.config(['meta', 'name']) );
});