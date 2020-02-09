/*
@apiSuccessExample [{type}] [title]
	example

example of a success return message, output as a pre-formatted code.

type
	optional.	Response format.

title
	optional.
	short title for the example.

example
	detailed example, multilines capable.
*/

/**
 * @api {get} /api/success/example SuccessExample
 * @apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
  "firstname": "John",
  "lastname": "Doe"
}

 * @apiSuccessExample {json} Fail-Response:
{
 "content": "This is an example content"
}
 * @apiGroup Params
*/