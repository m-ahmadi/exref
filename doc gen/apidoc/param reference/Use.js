/*
@apiUse name
include with a @apiDefine defined block.
if used with @apiVersion, same or nearest predecessor will be included.

name
	name of the defined block.
*/

/**
 * @apiDefine MySuccess
 * @apiSuccess {string} firstname The users firstname.
 * @apiSuccess {number} age The users age.
 */
 
/**
 * @api {get} /user/:id
 * @apiUse MySuccess
 * @apiGroup Params
*/