import ssl
# https://docs.python.org/3/library/ssl.html

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
import socket
import ssl

host, port = 'localhost', 8080

# client - default settings
context = ssl.create_default_context()
with socket.create_connection((host, port)) as sock:
	with context.wrap_socket(sock, server_hostname=host) as ssock:
		print(ssock.version())



# client - custom context
context = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
	with context.wrap_socket(sock, server_hostname=host) as ssock:
		ssock.connect((host, port))
		print(ssock.version())



# client - cert
context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
context.load_verify_locations('cabundle.pem')
with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
	with context.wrap_socket(sock, server_hostname=hostname) as ssock:
		print(ssock.version())



# secure server
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('certchain.pem', 'private.key')
with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
	sock.bind((host, port))
	sock.listen(5)
	with context.wrap_socket(sock, server_side=True) as ssock:
		conn, addr = ssock.accept()
