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


# text extraction
# console.log([...document.querySelectorAll('.py.function,.py.class')].map(i=>i.innerText.split('\n')[0].replace('asyncio','aio')).join('\n'))

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
