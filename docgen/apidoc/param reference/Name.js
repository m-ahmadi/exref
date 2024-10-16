/*
@apiName name

should always be used.
defines the name of the method documentation block.
names will be used for the sub-navigation in the generated output.
structure definitions don't need @apiName.

name
	unique name of the method.
	same name with different @apiVersion can be defined.
	format: method + path (e.g. get + user), only a proposal, you can name as you want.
	also used as navigation title.
*/

/**
 * @api {get} /api/name Name
 * @apiName Name
 * @apiGroup Params
*/

"for some reason it's not working as explained."