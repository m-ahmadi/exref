import requests # pip install requests
# https://requests.readthedocs.io/en/latest/api/


# get request
resp = requests.get('http://jsonplaceholder.typicode.com/todos/1')
resp.status_code
resp_body = resp.json() # {'title': 'delectus aut autem', ...}


# post request - urlencoded body
data = {
	'foo': 'a',
	'bar': 'b',
	'baz': 'c',
}
resp = requests.post('http://example.com', data=data)
resp_body = resp.text


# post request - json body
data = {
	'title': 'foo',
	'body': 'bar',
	'userId': 1,
}
resp = requests.post('http://jsonplaceholder.typicode.com/posts', json=data)
resp.status_code # 201
