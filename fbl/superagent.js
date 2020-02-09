// get:
request('GET', '/search').then(success, failure);
// or
request
	.get('/search')
	.then(res => {
		// res.body, res.headers, res.status
	})
	.catch(err => {
		// err.message, err.response
	});

// post:
request
	.post('/api/pet')
	.send({ name: 'Manny', species: 'cat' })
	.set('X-API-Key', 'foobar')
	.set('Accept', 'application/json')
	.then(res => {
		alert('yay got ' + JSON.stringify(res.body));
	});



