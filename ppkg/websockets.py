import websockets # pip install websockets
# https://websockets.readthedocs.io/en/stable

# cli
# websockets --version

# https://websockets.readthedocs.io/en/stable/reference/sansio/common.html#websockets.protocol.State
websockets.State.
	CONNECTING
	OPEN
	CLOSING
	CLOSED

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
import asyncio as aio


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
				await aio.sleep(0) # required
				await ws.send('hi')
				await aio.sleep(2)
				server_msg = await ws.recv()
				print('server sent:', server_msg)
			except websockets.exceptions.ConnectionClosed:
				break
aio.run(main())

from websockets.asyncio.client import connect
async def main():
	async with connect('wss://echo.websocket.org') as ws:
		while True:
			await aio.sleep(0)
			if ws.state != websockets.State.OPEN:
				print('connection closed')
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



# client - error handling
from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosedOK, ConnectionClosedError
async def main():
	async with connect('wss://echo.websocket.org') as ws:
		while True:
			try:
				await aio.sleep(0)
				pass
			except ConnectionClosedOK as e:
				print('connection closed ok', e.code, e.reason)
			except ConnectionClosedError as e:
				print('connection closed err', e.code, e.reason)
			finally:
				break

aio.run(main())



# server - listen forever, print msg sent by client, echo back to client
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
