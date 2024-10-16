/*
@apiError [(group)] [{type}] field [description]

Error return Parameter.

(group)
	optional.
	all parameters will be grouped by this name.
	without a group, the default Error 4xx is set.
	you can set a title and description with @apiDefine.

{type}
	optional.
	return type. {Boolean},  {Number},  {String}, {Object}, {String[]} (array of strings), ...
	
field
	return Identifier (returned error code).
	
descriptionoptional.
	optional.
	description of the field.
*/

/**
 * @api {get} /api/error Error
 * @apiError UserNotFound                          The <code>id</code> of the User was not found.
 * @apiError SomeField     {String}                Description for the filed.
 * @apiError (Error 5xx)   {Number}    Field       Some <code>ssn</code> description.
 * @apiError (Error 5xx)   {String[]}  UserList    The list of users.
 * @apiError (Other Group) {String[]}  Something   Some description.
 * @apiError (Other Group) {Boolean}   Successful  Whethear operation succed or not. Default: <code>false</code>
 * @apiGroup Params
 */