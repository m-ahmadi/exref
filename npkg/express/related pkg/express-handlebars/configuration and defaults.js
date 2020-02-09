/*
	Configuration and Defaults
	There are two main ways to use this package: via its engine factory function,
	or creating ExpressHandlebars instances; both use the same configuration properties and defaults.
*/
var xhb = require('express-handlebars');
 
// Config:
var config = {
	handlebars: 		 require('handlebars'),
	extname:         ".handlebars",
	layoutsDir: 		 "views/layouts/",
	partialsDir: 		 "views/partials/",
	defaultLayout:	 null,	  /* The string name or path of a template in the layoutsDir to use as the default layout.
                             This is overridden by a layout specified in the app or response locals.
                             A falsy value will render without a layout; ( eg: res.render('home', {layout: false}); ) */
	helpers:			   null,
	compilerOptions: null
};

// One way: (Using the engine factory)
xhb( config );
 
// Another way: (Create an instance)
xhb.create( config );