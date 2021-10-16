def f(): print('hi') # basic
def f(a): print(a)   # param (positional)
def f(a): return a*2 # return value
def f(a=2): print(a) # default value

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

# some operations
def add(n): return n + n
res = map(add, [1,2,3]) 
list(res)                              # [2,4,6]
list(map(lambda i: i*2, [1,2,3]))      # [2,4,6]
list(filter(lambda i: i>2, [1,2,3,4])) # [3,4]

# iterate over (index,value) tuples
list( map(lambda i: i[0], enumerate([4,5,6])) )    # [0,1,2]
list( map(lambda i: i[0], enumerate([4,5,6], 7)) ) # [7,8,9]

from functools import reduce
reduce(lambda r,i: r+i, [1,2,3,4])    # 10
reduce(lambda r,i: r+i, [1,2,3,4], 5) # 15

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