// includes:
// dist/sass.js (needs dist/sass.worker.js)

Sass.setWorkerUrl('path/to/dist/sass.worker.js'); // by default looks in same dir as sass.js
var sass = new Sass();
var scss = '$someVar: 123px; .some-selector { width: $someVar; }';
sass.compile(scss, function (result) {
	console.log(result);
});