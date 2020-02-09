/*
@apiDefine name [title]
	[description]

defines a block to be embedded by @api blocks or @apiPermission function.
can only be used once per block.
use @apiUse to import a defined block, or name, title & description is used.

name
	unique name for the block/value.
	same name with different @apiVersion can be defined.
	
title
	optional.
	a short title.
	only used for named functions like @apiPermission or @apiParam (name).

description
	optional.
	detailed description.
	starts at the next line, multiple lines can be used.
	only used for named functions like @apiPermission.
*/

'definition'
/**
 * @apiDefine MyError
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 */

/**
 * @apiDefine admin User access only
 * This optional description belong to to the group admin.
 */

'usage'
/**
 * @api {get} /api/define/1 Define 1
 * @apiUse MyError
 * @apiGroup Params
 */

/**
 * @api {get} /api/define/2 Define 2
 * @apiPermission admin
 * @apiGroup Params
 */