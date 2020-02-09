var y = require('yargs');
y.default('x', 10);
y.default('y', 10);
y.argv;

var y = require('yargs');
y.default({ x : 10, y : 10 })
y.argv;
