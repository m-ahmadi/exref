/*
@apiHeader [(group)] [{type}] [field=defaultValue] [description]

describe a parameter passed to your api header e.g. for authorization.
similar to @apiParam, only the output is above the parameters.

(group)
	optional.
	all parameters will be grouped by this name.
	without a group, the default parameter is set.
	tou can set a title and description with @apiDefine.

{type}
	optional.
	parameter type, e.g. {Boolean},  {Number},  {String}, {Object}, {String[]} (array of strings), ...

field
	variable name.

[field]
	fieldname with brackets define the variable as optional.

=defaultValue
	optional
	the parameters default value.

description
	optional.
	description of the field.

*/

/**
 * @api {get} /api/header Header
 * @apiHeader {String} access-key Users unique access-key.
 * @apiGroup Params
 */