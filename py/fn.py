def f(): print('hi') # basic
def f(a): print(a)   # arg (positional)
def f(a): return a*2 # return value

# default arg
def f(a=2): print(a)

# default arg is assigned when fn is defined (not when run)
def push(n, a=[]):
	a.append(n)
	return a
push(0) # [0]
push(1) # [0,1]

def push(n, a=None): # correct
	if a is None:
		a = []
	a.append(n)
	return a
push(0) # [0]
push(1) # [1]

# keyword arg (position doesn't matter when calling)
def f(a,b): print(a,b)
f(7,3)     # 7 3
f(b=7,a=3) # 3 7

# variable length args (rest)
def f(*a): print(a)
f()      # ()
f(1)     # (1)
f(1,2,3) # (1, 2, 3)

# variable length keyword args
def f(**a): print(a)
f()        # {}
f(a=1)     # {'a': 1}
f(a=1,b=3) # {'a': 1, 'b': 3}
f(1)       # err (takes 0 positional arguments)

# unpack tuple/list into args (spread)
def f(a,b,c): print(a,b,c)
p = (2,7,4)
f(p)  # err
f(*p) # 2,7,4

# unpack dict into args
def f(a,b): print(a,b)
d = {'a':1, 'b':2}
f(**d)             # 1 2
f(**{'b':7,'a':3}) # 3 7
f(**{'a':3})       # err (missing 1 required positional argument)

# lambdas
f = lambda: print('hi')
f = lambda a: a + 10
f = lambda a, b: a * b
f = lambda a=2, b=4: a * b
(lambda x: x+3)(3) # 6

# bind args to func
from functools import partial
def f(a): print(a)
f() # err
newfn = partial(f,7)
newfn() # 7

# only to avoid error since functions can't be empty
def f(): pass

# global vs local variable
a = 32
def foo():
	global a
	a = 44
a # 32
foo()
a # 44

def foo():
	g = globals()
	g['a'] = 64
	a = 2
	return a * g['a']

foo() # 128

# multiple global variables
a, b, c = 1, 2, 3
def foo():
	global a, b, c
	return [a, b, c]

# generator function
def foo():
	yield 2
fn = foo()

gen = (i*2 for i in [1,2,3]) # generator comprehension
for i in gen:
	print(i) # 2 4 6

# return fn
def foo():
	def bar():
		return 'hi'
	return bar

foo()() # 'hi'

# decorator
def my_decorator(func):
	def wrapper():
		print('==')
		func()
		print('==')
	return wrapper

@my_decorator
def foo():
	print('a')

foo() # == a ==

# async
async def a():
	return 32

async def b():
	n = await a()
	print(n)
	return n