// SOURCE MAPS
{
	generateSourceMaps: true,
	optimize: "uglify2",    // mapping minified, bundled code to unminified, separate modules (v2.1.6+)
	optimize: "closure",    // mapping minified, bundled code to unminified bundled code (available when running under Java with Rhino)
	preserveLicenseComments: false // http://requirejs.org/docs/errors.html#sourcemapcomments
}
// unminified files extension in developer tools: ".src.js"