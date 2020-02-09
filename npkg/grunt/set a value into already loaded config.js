grunt.registerTask("libs", function () {
	grunt.config.set("concat", {
		options: {
		  separator: "\n",
		},
		dist: {
			src: getLibs( grunt.option("min") ===  true), // ["", "", ""]
			dest: getLibs.DEST_FILE, // ""
		}
	});
	grunt.task.run("concat");
});