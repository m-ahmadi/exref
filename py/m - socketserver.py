# messages can be any size (that fits in memory)

# server.py
import socketserver

class MyTCPHandler(socketserver.BaseRequestHandler):
	def handle(self):
		self.data = self.request.recv(1024).strip()
		print('from', str(self.client_address[0]))
		print(self.data)
		self.request.sendall(self.data.upper())
with socketserver.TCPServer(('localhost', 9999), MyTCPHandler) as server:
	server.serve_forever()

# or alternative RequestHandler class (file-like objects)

class MyTCPHandler(socketserver.StreamRequestHandler):
	def handle(self):
		self.data = self.rfile.readline().strip()
		print('from', str(self.client_address[0]))
		print(self.data)
		self.wfile.write(self.data.upper())
with socketserver.TCPServer(('localhost', 9999), MyTCPHandler) as server:
	server.serve_forever()



# client.py
import socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
	sock.connect(('localhost', 9999))
	sock.sendall(bytes('hello world with TCP\n', 'utf8'))
	print('received:', str(sock.recv(1024)))