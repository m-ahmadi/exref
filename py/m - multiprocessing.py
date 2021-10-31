import multiprocessing


def f(x):
	return x*x

if __name__ == '__main__':
	with multiprocessing.Pool(5) as p:
		print(p.map(f, [1,2,3]))




def f(name):
	print('hello', name)

if __name__ == '__main__':
	p = multiprocessing.Process(target=f, args=('bob',))
	p.start()
	p.join()