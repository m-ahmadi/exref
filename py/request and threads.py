import requests
import threading

url = 'http://example.com'

data = {
	'foo': 'a',
	'bar': 'b',
	'baz': 'c',
}

def make_request():
	while True:
	response = requests.post(url, data=data).text
	print(response)

threads = []

for i in range(50):
		t = threading.Thread(target=make_request)
		t.daemon = True
		threads.append(t)
		threads[i].start()
		threads[i].join()