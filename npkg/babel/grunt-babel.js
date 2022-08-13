grunt.initConfig({
  babel: {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        'dist/app.js': 'src/app.js'
      }
    }
  }
});
grunt.loadNpmTasks('grunt-babel');
grunt.registerTask('default', ['babel']);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// entire directory
babel: {
  options: {
    sourceMap: true,
      experimental: true,
        plugins: ['transform-es2015-modules-amd']
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['**/*.js'],
      dest: 'build/',
      ext: '-compiled.js'
    }]
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@