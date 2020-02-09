grunt.registerTask('foo', 'My "foo" task.', function () {
	// Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
	grunt.task.run('bar', 'baz');
	// Or:
	grunt.task.run(['bar', 'baz']);
});