{
  // `data` is the response that was provided by the server
  data: {},
 
  // `status` is the HTTP status code from the server response
  status: 200,
 
  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',
 
  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},
 
  // `config` is the config that was provided to `axios` for the request
  config: {},
 
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}

// in .catch() handler response will be available through the error object:
axios().then().catch(error => {
	error.response
})