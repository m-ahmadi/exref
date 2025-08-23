import socket
# https://docs.python.org/3/library/socket.html

# SOCK_STREAM means a tcp socket
# messages cannot be larger than 1 GB

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# echo program - server
import socket
HOST = 'localhost' # symbolic name meaning all available interfaces
PORT = 8080        # arbitrary non-privileged port
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
	sock.bind((HOST, PORT))
	sock.listen(5) # max 5 connections
	print('server listening...')
	conn, addr = sock.accept()
	with conn:
		print('connected by', addr)
		while True:
			data = conn.recv(1024) # best to be power of 2 (max 1,048,576 ???)
			print('received from client:', str(data,'utf8'))
			if not data:
				sock.close()
				break
			conn.sendall(data)



# echo program - client
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
	sock.connect(('localhost', 8080))
	sock.send(bytes('hello','utf8'))
	sock.sendall(b'Hello, world')
	data = sock.recv(1024)
print('Received', repr(data))
