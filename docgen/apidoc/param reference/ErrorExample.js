/*
@apiErrorExample [{type}] [title]
	example

example of an error return message, output as a pre-formatted code.

type
	optional.
	response format.
	html, css, javascript, js, curl, bash, ...

title
	optional.
	short title for the example.

example
	detailed example, multilines capable.
*/


/**
 * @api {get} /api/error/example ErrorExample
 * @apiErrorExample {json} Error-Response:
HTTP/1.1 404 Not Found
{
  "error": "UserNotFound"
}
 * @apiGroup Params
 */