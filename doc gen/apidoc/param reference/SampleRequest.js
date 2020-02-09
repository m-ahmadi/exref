/*
@apiSampleRequest url

use this parameter in conjunction with the apidoc.json configuration parameter sampleUrl.
if sampleUrl is set, all methods will have the api test form (the endpoint from @api will be appended).
without sampleUrl only methods with @apiSampleRequest will have a form.
if @apiSampleRequest url is set in a method block, this url will be used for the request (it overrides sampleUrl when it starts with http).
if sampleUrl is set and you don't want a method with a test form, then add @apiSampleRequest off to the documentation block.

url
	url to your test api server.

	overwrite the configuration parameter sampleUrl and append @api url:
	@apiSampleRequest http://www.example.com

	prefix the @api url:
	@apiSampleRequest /my_test_path

	disable api test if configuration parameter sampleUrl is set:
	@apiSampleRequest off
*/

/**
 * @api {get} /api/sample/request/example/1 SampleRequest 1
 * @apiDescription
This will send the api request to <code>http://api.github.com/user/:id</code><br>
Configuration parameter <code>sampleUrl</code>: "http://api.github.com"
 * @apiGroup Params
 */


/**
 * @api {get} /api/sample/request/example/2 SampleRequest 2
 * @apiSampleRequest http://test.github.com/some_path/
 * @apiDescription
This will send the api request to <code>http://test.github.com/some_path/user/:id</code><br>
It overwrites <code>sampleUrl</code>.<br>
Configuration parameter <code>sampleUrl</code>: "http://api.github.com"
 * @apiGroup Params
 */


/**
 * @api {get} /api/sample/request/example/3 SampleRequest 3
 * @apiDescription
This will send the api request to http://api.github.com/test/user/:id</code><br>
It extends <code>sampleUrl</code>.<br>
Configuration parameter <code>sampleUrl</code>: "http://api.github.com"
 * @apiSampleRequest /test
 * @apiGroup Params
 */
 

/**
 * @api {get} /api/sample/request/example/4 SampleRequest 4
 * @apiDescription
This will disable the api request for this api-method.<br>
Configuration parameter <code>sampleUrl</code>: <code>"http://api.github.com"</code>
 * @apiSampleRequest off
 * @apiGroup Params
 */
 

/**
 * @api {get} /api/sample/request/example/5 SampleRequest 5
 * @apiDescription
This will send the api request to <code>http://api.github.com/some_path/user/:id</code><br>
It activates the request for this method only, because <code>sampleUrl</code> is not set.<br>
Configuration parameter <code>sampleUrl</code> is not set
 * @apiSampleRequest http://api.github.com/some_path/
 * @apiGroup Params
*/