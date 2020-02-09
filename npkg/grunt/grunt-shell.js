grunt.loadNpmTasks("grunt-shell");

grunt.initConfig({
    shell: {
        options: {
            stderr: false
        },
        target: {
            command: "ls"
        },
        another: "ls ./src" // shorthand 
    }
});
 
grunt.registerTask("ls", ["shell:target"]);
grunt.registerTask("default", ["shell"]);