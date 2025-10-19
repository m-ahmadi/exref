import asyncio as aio
# https://docs.python.org/3/library/asyncio-api-index.html
# https://docs.python.org/3/library/asyncio-llapi-index.html


# https://docs.python.org/3/library/asyncio-task.html
aio.create_task(coro, *, name=None, context=None, eager_start=None, **kwargs)
aio.eager_task_factory(loop, coro, *, name=None, context=None)
aio.create_eager_task_factory(custom_task_constructor)
aio.timeout(delay)   # async context manager
aio.timeout_at(when) # async context manager
aio.as_completed(aws, *, timeout=None)
aio.run_coroutine_threadsafe(coro, loop)
aio.current_task(loop=None)
aio.all_tasks(loop=None)
aio.iscoroutine(obj)

awaitable aio.sleep(delay, result=None)
awaitable aio.wait_for(aw, timeout)
awaitable aio.wait(aws, *, timeout=None, return_when=ALL_COMPLETED)
awaitable aio.to_thread(func, /, *args, **kwargs)
awaitable aio.gather(*aws, return_exceptions=False)
awaitable aio.shield(aw)

class aio.TaskGroup # async context manager
class aio.Timeout(when)
class aio.Task(coro, *, loop=None, name=None, context=None, eager_start=False)

# https://docs.python.org/3/library/asyncio-runner.html
aio.run(coro, *, debug=None, loop_factory=None)

# https://docs.python.org/3/library/asyncio-eventloop.html
aio.get_running_loop()
aio.get_event_loop()
aio.set_event_loop(loop)
aio.new_event_loop()

loop.run_until_complete(future)
loop.run_forever()
loop.stop()
loop.is_running()
loop.is_closed()
loop.close()

loop.call_soon(callback, *args, context=None)
loop.call_soon_threadsafe(callback, *args, context=None)
loop.call_later(delay, callback, *args, context=None)
loop.call_at(when, callback, *args, context=None)
loop.time()
loop.create_future()
loop.create_task(coro, *, name=None, context=None, eager_start=None, **kwargs)
loop.set_task_factory(factory)
loop.get_task_factory()

loop.add_reader(fd, callback, *args)
loop.remove_reader(fd)
loop.add_writer(fd, callback, *args)
loop.remove_writer(fd)

loop.add_signal_handler(signum, callback, *args)
loop.remove_signal_handler(sig)
awaitable loop.run_in_executor(executor, func, *args)
loop.set_default_executor(executor)
loop.set_exception_handler(handler)
loop.get_exception_handler()
loop.default_exception_handler(context)
loop.call_exception_handler(context)
loop.get_debug()
loop.set_debug(enabled: bool)

async loop.shutdown_asyncgens()
async loop.shutdown_default_executor(timeout=None)

async loop.create_connection(protocol_factory, host=None, port=None, *, ssl=None, family=0, proto=0, flags=0, sock=None, local_addr=None, server_hostname=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None, happy_eyeballs_delay=None, interleave=None, all_errors=False)
async loop.create_datagram_endpoint(protocol_factory, local_addr=None, remote_addr=None, *, family=0, proto=0, flags=0, reuse_port=None, allow_broadcast=None, sock=None)
async loop.create_unix_connection(protocol_factory, path=None, *, ssl=None, sock=None, server_hostname=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None)
async loop.create_server(protocol_factory, host=None, port=None, *, family=socket.AF_UNSPEC, flags=socket.AI_PASSIVE, sock=None, backlog=100, ssl=None, reuse_address=None, reuse_port=None, keep_alive=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None, start_serving=True)
async loop.create_unix_server(protocol_factory, path=None, *, sock=None, backlog=100, ssl=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None, start_serving=True, cleanup_socket=True)
async loop.connect_accepted_socket(protocol_factory, sock, *, ssl=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None)
async loop.sendfile(transport, file, offset=0, count=None, *, fallback=True)
async loop.start_tls(transport, protocol, sslcontext, *, server_side=False, server_hostname=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None)

async loop.sock_recv(sock, nbytes)
async loop.sock_recv_into(sock, buf)
async loop.sock_recvfrom(sock, bufsize)
async loop.sock_recvfrom_into(sock, buf, nbytes=0)
async loop.sock_sendall(sock, data)
async loop.sock_sendto(sock, data, address)
async loop.sock_connect(sock, address)
async loop.sock_accept(sock)
async loop.sock_sendfile(sock, file, offset=0, count=None, *, fallback=True)
async loop.getaddrinfo(host, port, *, family=0, type=0, proto=0, flags=0)
async loop.getnameinfo(sockaddr, flags=0)
async loop.connect_read_pipe(protocol_factory, pipe)
async loop.connect_write_pipe(protocol_factory, pipe)

async loop.subprocess_exec(protocol_factory, *args, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, **kwargs)
async loop.subprocess_shell(protocol_factory, cmd, *, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, **kwargs)

class aio.Handle
	get_context()
	cancel()
	cancelled()
class aio.TimerHandle
	when()
class aio.Server
	close()
	close_clients()
	abort_clients()
	get_loop()
	async start_serving()
	async serve_forever()
	is_serving()
	async wait_closed()
class aio.SelectorEventLoop
class aio.ProactorEventLoop
class aio.EventLoop
class aio.AbstractEventLoop

# text extraction
# console.log([...document.querySelectorAll('.py.function,.py.class,.py.method')].map(i=>i.innerText.split('\n')[0].replace('asyncio','aio')).join('\n'))

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
import time
# awaitables: coroutine, Task, Future

# coroutine
async def main():
	print('hello')
	await aio.sleep(1)
	await aio.sleep(10, result='hi')
	print('world')
aio.run(main())



# sequential
async def say_after(delay, what):
	await aio.sleep(delay)
	print(what)
async def main():
	await say_after(1, 'hello')
	await say_after(2, 'world')
aio.run(main())



# concurrent
async def main():
	task1 = aio.create_task(say_after(1, 'hello'))
	task2 = aio.create_task(say_after(2, 'world'))
	print(f"started at {time.strftime('%X')}")
	await task1
	await task2
	print(f"finished at {time.strftime('%X')}")
aio.run(main())
# or
async def main():
	async with aio.TaskGroup() as tg:
		# the await is implicit when the context manager exits
		task1 = tg.create_task(say_after(1, 'hello'))
		task2 = tg.create_task(say_after(2, 'world'))
aio.run(main())
# run concurrently
async def main():
	L = await aio.gather(
		say_after(1, 'A'),
		say_after(1, 'B'),
		say_after(1, 'C'),
	)
	print(L)
aio.run(main())



# await for something but with max timeout
async def coro():
	aio.sleep(1)
	return 'hi'
async def main():
	try:
		res = await aio.wait_for(coro(), timeout=2)
	except aio.exceptions.TimeoutError:
		res = ''
	print(res)
aio.run(main())
