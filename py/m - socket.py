# messages cannot be larger than 1 GB

# server.py
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # SOCK_STREAM means a tcp socket
server.bind(('localhost', 8080))
server.listen(5) # max 5 connections
print('server listening...')
connection, address = server.accept()
while True:
	buf = connection.recv(64) # best to be power of 2 (max 1,048,576 ???)
	msg = str(buf,'utf8')
	print(msg)
	if msg == 'exit':
		print('server exiting...')
		server.close()
		break

# or

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
	server.bind(('localhost', 8080))
	server.listen()
	print('server listening...')
	connection, address = server.accept()
	with connection:
		print('client connected:', address)
		while True:
			buf = connection.recv(1024)
			msg = str(buf,'utf8')
			print('client said:', msg)
			connection.sendall( bytes('server said: '+msg.upper(), 'utf8') )
			if msg == 'exit':
				print('server exiting...')
				server.close()
				break



# client.py
import socket
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 8080))
client.send(bytes('hello','utf8'))