/*														How Grunt Works:
	Grunt works locally on each project,
	Some Grunt plugins have somethings that's installed globally,
	But for the most part, Grunt works locally.
	
	Grunt configurations are in a file called "gruntfile.js",
	and this file should be in the root of the project (~/gruntfile.js).
	The "gruntfile.js" is not created by-default when you install grunt in a project,
	so you have to make it on your own.
	
	You need to install plugins in order to do tasks,
	For example, you'll need "grunt-contrib-concat" plugin for concatenation,
	or you'll need "grunt-contrib-watch" plugin for watching files for changes.
	
	Finnaly when you have the required plugin installed,
	you need to config the "~/gruntfile.js" file accordingly,
	and then, you run Grunt by grunt commands (grunt, grunt concat, grunt watch, etc.) inside the project/root folder.
	
	You can change the default action of grunt command in "gruntfile.js",
	or define custom tasks (grunt hasan, grunt hossein, etc.)
	
	You can pass arguments when calling grunt on the command-line, (only when calling a task),
	you can pass multiple argumets by colon-seperating them.
	grunt task:arg
	grunt foo:arg1:arg2
*/

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
			dist: {
				src: ["a.js", "b.js"],
				dest: "output.js"
			},
			options: {
				separator: "\n"
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.registerTask("default", ["concat"]);
};