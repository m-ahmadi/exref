/*
@apiGroup name

should always be used.

defines to which group the method documentation block belongs.
groups will be used for the main navigation in the generated output.
structure definitions don't need @apiGroup.

name
	name of the group.
	also used as navigation title.
*/

/**
 * @api {get} /api/group Group
 * @apiGroup Params
 */