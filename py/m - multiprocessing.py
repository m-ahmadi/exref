import multiprocessing as mp
# https://docs.python.org/3/library/multiprocessing.html

mp.cpu_count()  |  os.cpu_count()

# distribute input across processes (data parallelism)
def f(x):
	return x*x
with mp.Pool(5) as p:
	print(p.map(f, [1,2,3]))

# spawn a process
def f(name):
	print('hello', name)
p = mp.Process(target=f, args=('bob',))
p.start()
p.join()

# main invocation guard is required to avoid creating subprocesses recursively
if __name__ == '__main__':
	# ...