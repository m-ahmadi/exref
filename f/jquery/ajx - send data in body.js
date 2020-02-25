// seneding data in body

method: 'POST',
data: JSON.stringify({name: 'mohammad', job: 'developer'}),

// either:
contentType: 'application/json',
// or:
headers: {
	'content-type': 'application/json',
	'cache-control': 'no-cache'
},