/*
@apiSuccess [(group)] [{type}] field [description]

success return Parameter.

(group)
	optional.
	all parameters will be grouped by this name.
	without a group, the default success 200 is set.
	you can set a title and description with @apiDefine.

{type}
	optional.
	return type. e.g. {Boolean},  {Number},  {String}, {Object}, {String[]} (array of strings), ...

field
	return identifier (returned success code).

description
	optional.
	description of the field.
*/

/**
 * @api {get} /api/success/example/1 Success 1
 * @apiDescription Example:
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiGroup Params
 */


/**
 * @api {get} /api/success/example/2 Success 2
 * @apiDescription Example with (group), more group-examples at @apiSuccessTitle:
 * @apiSuccess (200) {String} firstname Firstname of the User.
 * @apiSuccess (200) {String} lastname  Lastname of the User.
 * @apiGroup Params
 */


/**
 * @api {get} /api/success/example/3 Success 3
 * @apiDescription Example with Object:
 * @apiSuccess {Boolean} active        Specify if the account is active.
 * @apiSuccess {Object}  profile       User profile information.
 * @apiSuccess {Number}  profile.age   Users age.
 * @apiSuccess {String}  profile.image Avatar-Image.
 * @apiGroup Params
 */


/**
 * @api {get} /api/success/example/4 Success 4
 * @apiDescription Example with Array:
 * @apiSuccess {Object[]} profiles       List of user profiles.
 * @apiSuccess {Number}   profiles.age   Users age.
 * @apiSuccess {String}   profiles.image Avatar-Image.
 * @apiGroup Params
*/