import asyncio as aio
# https://docs.python.org/3/library/asyncio.html

aio.create_task()
aio.sleep()
aio.run()

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
