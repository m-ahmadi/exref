/*
@apiPrivate

defines an api as being private.
this allowes to create two api specification documents:
	one that excludes the private apis.
	one that includes them.

command line usage to exclude/include private apis: --private false|true
*/

/**
 * @api {get} /api/private Private
 * @apiPrivate
 * @apiGroup Params
*/

/**
 * @api {get} /api/private Private (not)
 * @apiGroup Params
*/