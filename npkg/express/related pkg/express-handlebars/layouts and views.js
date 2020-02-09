//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													My Explanation
	A layout is just a level before a view.
	So when you render a view, it goes through a layout first,
	then the layout passes stuff to the view,
	you can explicitly specify a layout when rendering something,
	otherwise the default layout (that was configed during instantiating) will be used.
*/

res.render('foo', { layout: 'microsite' });		// looks for a 'microsite' layout in the default layouts folder

//	you can skip the layout level and don't use it.
//	a falsy value will render without a layout:

res.render('home', { layout: false });			// will render the "home" view with no layout
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//													Official

/*	Layouts

	A layout is simply a Handlebars template with a {{{body}}} placeholder.
	Usually it will be an HTML page wrapper into which views will be rendered.
	This view engine adds back the concept of "layout", which was removed in Express 3.x.
	It can be configured with a path to the layouts directory, by default it's set to "views/layouts/".

	There are two ways to set a default layout:
	configuring the view engine's defaultLayout property, or
	setting Express locals app.locals.layout.
	
	The layout into which a view should be rendered can be overridden per-request by
	assigning a different value to the layout request local.
	The following will render the "home" view with no layout:
*/
app.get('/', function (req, res, next) {
	res.render('home', { layout: false });
});
/*
	The main layout is the HTML page wrapper which can be reused for the different views of the app.
	{{{body}}} is used as a placeholder for where the main content should be rendered.
	
	views/layouts/main.handlebars:
	
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>Example App</title>
	</head>
	<body>
		{{{body}}}
	</body>
	</html>
*/

/*	Views

	views/home.handlebars:
	
	<h1>Example App: Home</h1>
	The content for the app's home view which will be rendered into the layout's {{{body}}}.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@