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



# async
import asyncio, socket
async def tcp_echo_raw():
	loop = asyncio.get_running_loop()
	sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	sock.setblocking(False)
	await loop.sock_connect(sock, ('127.0.0.1', 8888))
	await loop.sock_sendall(sock, b'Hello raw socket!')
	data = await loop.sock_recv(sock, 1024)
	print(f"Received: {data.decode()}")
	sock.close()
asyncio.run(tcp_echo_raw())

# async - echo program - client
import asyncio
async def tcp_client():
	reader, writer = await asyncio.open_connection('127.0.0.1', 8888)
	message = 'Hello, server!'
	print(f'Send: {message}')
	writer.write(message.encode())
	await writer.drain()
	data = await reader.read(100)
	print(f'Received: {data.decode()}')
	print('Closing connection...')
	writer.close()
	await writer.wait_closed()
asyncio.run(tcp_client())
# async - echo program - server
import asyncio
async def handle_client(reader, writer):
	addr = writer.get_extra_info('peername')
	print(f'Connection from {addr}')
	while data := await reader.read(100):
		message = data.decode()
		print(f'Received {message!r} from {addr}')
		writer.write(data)
		await writer.drain()
	print(f'Closing {addr}')
	writer.close()
	await writer.wait_closed()
async def main():
	server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)
	addr = server.sockets[0].getsockname()
	print(f'Serving on {addr}')
	async with server:
		await server.serve_forever()
asyncio.run(main())
