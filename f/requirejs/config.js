//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
	/*	The left side is the module ID,
		The right side is the path to the jQuery file, relative to baseUrl.
		Also, the path should NOT include the '.js' file extension.
		This example is using jQuery 1.9.0 located at js/lib/jquery-1.9.0.js, relative to the HTML page.
	*/
        jquery: 'jquery-1.9.0'
    }
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	baseUrl
	
	There's going to be a baseUrl in your app wheather you specifiy it or not.
	
	If data-main is used and there's no config, baseUrl is set to the directory that contains require.js file.
	If config is used, baseUrl is set to path specified in the config.
	If data-main is not used and there's no explicit config,
	baseUrl is set to the directory that contains the HTML page running RequireJS.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	module resolution
	
	js/lib/require.min.js
	js/core.js
	js/util/core.js
	js/test/core.js
	
	baseUrl: js/
*/

// in basueUrl:
'core'		// js/core.js
'util/core'	// js/util/core.js

// in current file dir:
'./core'	// js/test/core.js
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	Relative module names are relative to other names, not paths:
	
	The loader stores modules by their name and not by their path internally.
	So for relative name references, those are resolved relative to the module name making the reference,
	then that module name, or ID, is converted to a path if needs to be loaded.
	* lib/
    * compute/
        * main.js
        * extras.js
*/
// main.js
require.config({
	baseUrl: 'lib',
	paths: {
		'compute': 'compute/main'
	}
});
define(["./extras"], function(extras) {});

require(['compute']);
// lib/compute/main.js will have the module name of 'compute'
// when main.js asks for './extras' it's resolved relative to 'compute'
// so it looks for lib/extras.js, which is incorrect.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// path config
requirejs.config({
    // By default load any module IDs from js/lib
    baseUrl: 'js/lib',
/*	except,
	if the module ID starts with "app",
	load it from the js/app directory.
	paths config is relative to the baseUrl,
	and never includes a ".js" extension since
	the paths config could be for a directory.
*/
    paths: {
        app: '../app'
    }
});
// Start the main app logic.
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,        canvas,   sub) {
    // jQuery, canvas and the app/sub module are all loaded and can be used here now.
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
require.config({
	baseUrl: "/another/path",
	paths: {
		"some": "some/v1.0"
	},
	waitSeconds: 15
});

require(["some/module", "my/module", "a.js", "b.js"], function (someModule, myModule) {
/*	
	This function will be called when all the dependencies listed above are loaded.
	Note that this function could be called before the page is loaded.
	This callback is optional.
*/
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference a script directly
/*
	If a module ID has one of the following characteristics,
	the ID will not be passed through the "baseUrl + paths" configuration,
	and just be treated like a regular URL that is relative to the document:
	Ends in ".js".
	Starts with a "/".
	Contains an URL protocol, like "http:" or "https:".
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@