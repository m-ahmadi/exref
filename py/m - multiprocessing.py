import multiprocessing as mp
# https://docs.python.org/3/library/multiprocessing.html
import os

mp.cpu_count() | os.cpu_count()

pool = mp.Pool(?processes=os.process_cpu_count() | int, ?initializer, ?initargs, ?maxtasksperchild, ?context)
pool.apply(func, ?args, ?kwds)
pool.apply_async(func, ?args, ?kwds, ?callback, ?error_callback)
pool.map(func, iterable, ?chunksize)
pool.map_async(func, iterable, ?chunksize, ?callback, ?error_callback)
pool.imap(func, iterable, ?chunksize)
pool.imap_unordered(func, iterable, ?chunksize)
pool.starmap(func, iterable, ?chunksize)
pool.starmap_async(func, iterable, ?chunksize, ?callback, ?error_callback)
pool.close()
pool.terminate()
pool.join()

process = mp.Process(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)
process.name
process.daemon
process.pid
process.exitcode
process.authkey
process.sentinel
process.run()
process.start()
process.join(?timeout)
process.is_alive()
process.terminate()
process.kill()
process.close()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# distribute input across processes (data parallelism)
def f(x):
	return x*x
def main():
	with mp.Pool(3) as pool:
		r = pool.map(f, [1,2,3])
		print(r)

# spawn a process
def main(name):
	print('hello', name)
	p = mp.Process(target=f, args=('bob'))
	p.start()
	p.join()

# main invocation guard is required to avoid creating subprocesses recursively
if __name__ == '__main__':
	main()
