var request = require('request');

// basic:
request('http://www.google.com', function (error, response, body) {
	console.log('error:', error);                                // print the error if one occurred
	console.log('statusCode:', response && response.statusCode); // print the response status code if a response was received
	console.log('body:', body);                                  // print the html for the google homepage
});

// application/x-www-form-urlencoded
request.post('http://service.com/upload', {form:{key:'value'}})
request.post('http://service.com/upload').form({key:'value'})
request.post({url:'http://service.com/upload', form: {key:'value'}}, function (err,httpResponse,body) {})


// custom headers:
request({
	url: 'https://api.github.com/repos/request/request',
	headers: {
		'User-Agent': 'request'
	}
	}, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		console.log(info.stargazers_count + " Stars");
		console.log(info.forks_count + " Forks");
	}
});