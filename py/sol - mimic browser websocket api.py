import asyncio
from websockets.asyncio.client import connect

class WebSocket:
	CONNECTING = 0
	OPEN = 1
	CLOSING = 2
	CLOSED = 3
	
	def __init__(self, url):
		self.url = url
		self.readyState = WebSocket.CONNECTING
		self.onopen = None
		self.onmessage = None
		self.onclose = None
		self.onerror = None
		self._ws = None
		self._loop = asyncio.get_event_loop()
		self._loop.create_task(self._connect())
	
	async def _connect(self):
		try:
			async with connect(self.url) as ws:
				self._ws = ws
				self.readyState = WebSocket.OPEN
				if callable(self.onopen):
					await self._maybe_await(self.onopen())
				
				async for message in ws:
					if callable(self.onmessage):
						await self._maybe_await(self.onmessage(message))
		
		except Exception as e:
			if callable(self.onerror):
				await self._maybe_await(self.onerror(e))
		finally:
			self.readyState = WebSocket.CLOSED
			if callable(self.onclose):
				await self._maybe_await(self.onclose())
	
	async def send(self, data):
		if self.readyState == WebSocket.OPEN and self._ws:
			await self._ws.send(data)
		else:
			raise ConnectionError('WebSocket is not open')
	
	async def close(self):
		if self._ws and self.readyState == WebSocket.OPEN:
			self.readyState = WebSocket.CLOSING
			await self._ws.close()
			self.readyState = WebSocket.CLOSED
	
	async def _maybe_await(self, result):
		'''Allow both sync and async callbacks.'''
		if asyncio.iscoroutine(result):
			await result


#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# usage
import asyncio
# from WebSocket import WebScoket # if above class in "./WebSocket.py"

async def main():
	ws = WebSocket('wss://echo.websocket.org')
	
	async def on_open():
		print('connected')
		await ws.send('Hello from Python!')
	
	async def on_message(msg):
		print('message:', msg)
		# await ws.close()
	
	async def on_close():
		print('closed')
	
	async def on_error(err):
		print('error:', err)
	
	ws.onopen = on_open
	ws.onmessage = on_message
	ws.onclose = on_close
	ws.onerror = on_error
	
	# keep running the loop until WebSocket closes
	while ws.readyState != WebSocket.CLOSED:
		await asyncio.sleep(0.1)


asyncio.run(main())
