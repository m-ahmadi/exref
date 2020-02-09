/*
	Assigns setting name to value, where name is one of the properties from the app settings table.
	Calling app.set('foo', true) for a Boolean property is the same as calling app.enable('foo').
	Similarly, calling app.set('foo', false) for a Boolean property is the same as calling app.disable('foo').
	Retrieve the value of a setting with app.get().
*/
app.set('view engine', 'handlebars');
app.get('view engine'); // 'handlebars'

/*	Application Settings

	The following table lists application settings.

	Note that sub-apps will:
		Not inherit the value of settings that have a default value. You must set the value in the sub-app.
		Inherit the value of settings with no default value; these are explicitly noted in the table below.
	Exceptions:
		Sub-apps will inherit the value of trust proxy even though it has a default value (for backward-compatibility);
		Sub-apps will not inherit the value of view cache in production (when NODE_ENV is “production“).
	

	case sensitive routing		Boolean
	env							String
	etag						Varied
	jsonp callback name			String
	json replacer				Varied
	json spaces					Varied
	query parser				Varied
	strict routing				Boolean
	subdomain offset			Number
	trust proxy					Varied
	views						String or Array
	view cache					Boolean
	view engine					String
	x-powered-by				Boolean
*/