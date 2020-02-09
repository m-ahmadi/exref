/*
	use grunt.option("opt_name")
	
	Syntax:
	grunt --option1=myValue
	
	http://gruntjs.com/api/grunt.option
*/

module.exports = function(grunt) {
	console.log( grunt.option("hasan") );
	
	grunt.initConfig();
	grunt.registerTask('fudge', function (arg1, arg2) {
		console.log(arg1, arg2);
	});
	grunt.registerTask('default', []);
};

/*
	cli:

	grunt
		undefined
		Done.

	grunt --hasan=12
		12
		Done.
		
	grunt fudge:mashad:akbar
		undefined
		Running "fudge:mashad:akbar" (fudge) task
		mashad akbar
		Done.
		
	grunt fudge:dr:ernest --hasan=12
		12
		Running "fudge:dr:ernest" (fudge) task
		dr ernest
		Done.
*/