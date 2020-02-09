/*
	Template Caching
	This view engine uses a smart template caching strategy.
	In development, templates will always be loaded from disk, i.e., no caching.
	In production, raw files and compiled Handlebars templates are aggressively cached.
	The easiest way to control template/view caching is through Express' view cache setting:
*/
app.enable('view cache');
//	Express enables this setting by default when in production mode, i.e.:

process.env.NODE_ENV === "production"
//	Note: All of the public API methods accept options.cache, which gives control over caching when calling these methods directly.