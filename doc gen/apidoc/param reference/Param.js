/*
@apiParam [(group)] [{type}] [field=defaultValue] [description]

describe a parameter passed to your api-method.

(group)
	optional.
	all parameters will be grouped by this name.
	without a group, the default parameter is set.
	you can set a title and description with @apiDefine.

{type}
	optional.
	parameter type, e.g. {boolean}, {number}, {string}, {object}, {string[]} (array of strings), ...

{type{size}}
	optional.
	information about the size of the variable.
	{string{..5}}     a string that has max 5 chars.
	{string{2..5}}    a string that has min. 2 chars and max 5 chars.
	{number{100-999}} a number between 100 and 999.

{type=allowedvalues}
	optional.
	information about allowed values of the variable.
	{string="small"}        a string that can only contain the word "small" (a constant).
	{string="small","huge"} a string that can contain the words "small" or "huge".
	{number=1,2,3,99}       a number with allowed values of 1, 2, 3 and 99.
	can be combined with size:
		{string {..5}="small","huge"} a string that has max 5 chars and only contain the words "small" or "huge".

field
	variable name.

[field]
	fieldname with brackets define the variable as optional.

=defaultvalue
	optional.
	the parameters default value.

description
	optional.
	description of the field.
*/

/**
 @api {post} /api/param Param
 @apiParam {Number} id Users unique ID.
 @apiParam {String} [firstname]  Optional firstname of the User.
 @apiParam {String} lastname     Mandatory lastname.
 @apiParam {String} country="DE" Mandatory with default value "DE".
 @apiParam {Number} [age=18]     Optional age with default 18.

 @apiParam (Login) {String} user
	The user's usersname.
 @apiParam (Login) {String} pass
  Only logged in users can post this.
  In generated documentation a separate
  "Login" Block will be generated.
 @apiGroup Params
*/