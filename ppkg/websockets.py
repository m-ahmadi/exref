# https://websockets.readthedocs.io/en/stable
import websockets # pip install websockets
# websockets --version

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# client - async
from websockets.asyncio.client import connect
async def main():
	async with connect('wss://echo.websocket.org') as ws:
		await ws.send('hello')
		server_msg = await ws.recv()
		print('server sent:', server_msg)
aio.run(main())


# client - async - never-breaking process (infinite loop)
from websockets.asyncio.client import connect
async def main():
	async with connect('wss://echo.websocket.org') as ws:
		while True:
			try:
				await ws.send('hi')
				await aio.sleep(2)
				server_msg = await ws.recv()
				print('server sent:', server_msg)
			except websockets.exceptions.ConnectionClosed:
				break
aio.run(main())


# client - sync
from websockets.sync.client import connect
def main():
	with connect('wss://echo.websocket.org') as ws:
		ws.send('hello')
		server_msg = ws.recv()
		print('server sent:', server_msg)
main()


# client - reconnect automatically on errors
from websockets.asyncio.client import connect
async def main():
	async for ws in connect('wss://echo.websocket.org'):
		# infinite async iterator
		try:
			await ws.send('hello')
			server_msg = await ws.recv()
			print('server sent:', server_msg)
		except websockets.exceptions.ConnectionClosed:
			continue
aio.run(main())


# server - listen forever, print msg sent by client, echo back to client
import asyncio as aio
from websockets.asyncio.server import serve
async def handler(ws):
	while True:
		message = await ws.recv()
		print('client sent:\t', message)
		await ws.send(message) # echoing back
async def main():
	async with serve(handler, '127.0.0.1', 8001) as server:
		await server.serve_forever()
aio.run(main())
