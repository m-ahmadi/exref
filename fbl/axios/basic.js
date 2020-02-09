axios(config)
axios(url[, config])
axios.get(url[, config])
axios.post(url[, data[, config]])
axios.request(config)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// get (default method)
axios('/user/12345');
axios('/user/12345').then( res => console.log(res) );
const req = await axios.get('api/users');
const { data } = await axios.get('api/users');
axios.get('/user', {
	params: {
		ID: 12345
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// post
axios({
	url: '/user/12345',
	method: 'post',
	data: {
		firstName: 'Fred',
		lastName: 'Flintstone'
	}
});
axios.post('/user', {
	firstName: 'Fred',
	lastName: 'Flintstone'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// handlers
axios.get('/user?ID=12345')
.then(function (response) {
	// success
})
.catch(function (error) {
	// error
})
.then(function () {
	// always
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// application/x-www-form-urlencoded
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);

// or

const options = {
	url: '/foo'
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: params
};
axios(options);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// text/xml
const options = {
	url: '/foo'
  method: 'POST',
  headers: {
		"Content-Type": "text/xml;charset=UTF-8"
	},
  data: xmlBody
};
axios(options);

// alternative signature:
axios.post('/foo', xmlBody, {
	headers: {
		"Content-Type": "text/xml;charset=UTF-8"
	}
});