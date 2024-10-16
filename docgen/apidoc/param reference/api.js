/*
@api {method} path [title]

required.
without it, parser ignores the documentation block.
the only exception is blocks defined by @apiDefine which does not require @api.

method
	get, post, delete, put, ...
	
path
	request path.
	
title
	a short title used for navigation and article header.
*/

/**
 * @api {get} /api api
 * @apiGroup Params
 */