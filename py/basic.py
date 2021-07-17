import foo                 # foo imported and bound locally
import foo.bar.baz         # foo.bar.baz imported, foo bound locally
import foo.bar.baz as fbb  # foo.bar.baz imported and bound as fbb
from foo.bar import baz    # foo.bar.baz imported and bound as baz
from foo import attr       # foo imported and foo.attr bound as attr
from foo import bar, baz
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# basic types
x = 'hello' # str
x = True    # bool
x = None    # null

x = 4   # int
x = 2.5 # float
x = 1j  # complex

x = [1,2,3]  # list
x = (1,2,3)  # tuple
x = range(4) # range

x = {'a','b','c'}        # set
x = frozenset({'a','b'}) # frozenset

x = {'a': 'foo', 'b': 35} # dict
x = b'hello'              # bytes
x = bytearray(5)          # bytearray
x = memoryview(bytes(5))  # memoryview

# type fns
str('Hello World')       # str
int(20)                  # int
float(20.5)              # float
complex(1j)              # complex
list(('a','b','c'))      # list
tuple(('a','b','c'))     # tuple
range(6)                 # range
dict(name='John', age=36)# dict
set(('a','b','c'))       # set
frozenset(('a','b','c')) # frozenset
bool(5)                  # bool
bytes(5)                 # bytes
bytearray(5)             # bytearray
memoryview(bytes(5))     # memoryview
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# opr
+ - * / %        # arithmeic
**               # ... exponentiation
//               # ... floor division
@                # ... matrix multiplication
= : :=           # assignment
+= -= *= /= %=   # ...
//= **= @=       # ...
&= |= ^= >>= <<= # ...
== != > < >= <=  # comparison
and or not       # logical
in is            # containment & identity
& | ^ ~ << >>    # bitwise

[]  # index/literal
{}  # 
()  # 
-   # arithmetic negation
+   # arithmetic positive
:=  # walrus
del # deletion
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# basic operations
1+2*3/4 # arithmetic: 2.5
9 % 2   # remainder: 1
4 ** 2  # squared: 16
4 ** 3  # cubed: 64
('foo' 'bar')     # ...

3 is 3            # instanceof: True
[3] is [3]        # ...: False
2 in [1,2,3]      # containment: True
1 in {1,2}        # ...: true
1 in (1,2)        # ...: true

# multiline string
"""foo
bar"""

'''foo
bar
'''

# some methods
{'a','b'}.issuperset({'a'}) # true
int('25')      # 25
float('12.34') # 12.34
str(25)        # '25'

# str
'foo' +' '+ 'bar' # str concat: 'foo bar'
'foo' * 2         # str repeat: 'foofoo'
'a,b,c'.split()             # ['a', 'b', 'c']
'AA\nBB\nCC\n'.splitlines() # ['AA', 'BB', 'CC']
', '.join(['a','b','c'])    # 'a, b, c'
' foo '.strip()             # 'foo'
'Foo'.lower()               # 'foo'
'foo'.upper()               # 'FOO'
'foo'.startswith('fo')      # True
'foo'.endswith('oo')        # True
'foo'.find('oo')            # match index: 2
'foo'.replace('oo', 'ar')   # 'far'
len('foo')                  # 5
'foo' in 'football'         # containment: True

format(12.3456, '.2f')   # '12.35'
f'{12.345:.2f}'
'{:.2f}'.format(12.3456) # '12.35'
round(12.3456, 2)        # 12.35

# list
x = [1,2]
x.append(3)
x[4]   # error
len(x) # 2
[1,2] + [3,4]        # list concat: [1,2,3,4]
[1,2].append(3)      # [1,2,3]
[1,2,3].insert(2, 4) # [1,2,4,3]
[1,2,3].remove(1)    # [2,3]
[1,2,3].reverse()    # [3,2,1]
[3,1,2].sort()       # [1,2,3]
[1,2].index(2)       # 1
[1,2].index(3)       # err
[1,1,2].index(1,1)   # 1
a = [3]
a.append(4) # [3,4]
a.pop()     # 4    a: [3]
a.pop()     # 3    a: [] 

x<range> = range(?start=0, stop=int, ?step=1)
x = range(1,10,2)
list(x) # [1, 3, 5, 7, 9]

# list index access
a = [1,2,3,4]
a[0]  # 5
a[-1] # 8
# range slice
arr[?start=0: ?stop=-1: ?step=0]
a[0:2]   # [1,2]
a[:2]    # [1,2]
a[2:]    # [3,4]
a[-3:-1] # [2,3]
a[:]     # copy of arr
[1,2,3,4,5,6][::2] # [1,3,5]

# list comprehension
nums = [1,2,3,4]
x = [x*x for x in nums]               # [1,4,9,16]
y = [x*x for x in nums if x % 2 == 0] # [4,16]
arr = [ [1,2], [3,4] ]
[[j*2 for j in i] for i in arr]       # [ [2,4], [6,8] ]

# set
{1,2,3} == set([1,2,3]) # True

# set comprehension
squares = {x** 2 for x in [0,2,4] if x < 4} # {0, 4}

# variable assignment
x = 2
x = y = z = 'foo'
# delete variable
del x
del y,z

# destructuring assignment
a, b    = 1,2
a, b    = 'foo', 'bar'
a, b    = (1,2)
a, b, c = [1,2,3]
a, b, c = [1]          # ValueError
a, b, c = 'foo bar baz'.split()
a, b    = [1,2,3], [1,2]
[a, b]  = [[1,2],[3,4]]
# rest slicing
a, *b = [1,2,3,4]      # a=1 b=[2,3,4]
*a, b = 1,2,3,4        # b=4 a=[1,2,3]
# ignoring
a, _ = [1,2]           # ignore value
a, _, c = (1,2,3)      # ...
a, *_ = [1,2,3,4,5]    # ignore list
# trailing comma
a, = 1,
a, = [1]
a, = 1     # TypeError: cannot unpack non-iterable int object
a, = [1,2] # ValueError
# dict unpacking (v3.5+)
a = {'x':1, 'y':2}
b = {**a, 'x':7} # {'x':7, 'y':1}

# some dict operations
x = {'foo':2, 'bar':7}
for k in x: print(x[k])
[k for k in x]    # ['foo','bar']
[x[k] for k in x] # [2,7]

# type coercion
if None or 0 or 0.0 or '' or [] or {} or set():
	print('dead code') # not reached
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# loop
for i in range(10):
	if i == 9:
		break
	if i % 2 == 0:
		print(i)
	else:
		continue

for i in range(10):
	print(i)
else:
	print('done') # after loop (not if loop breaks)

for i in list:
	pass # empty loop

i = 0
while i < 3 :
	print(j)
	j = j + 1
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# condition
if name == 'John' and age == 23:
	print('foo')

# ternary
foo = 'allow' if condition else 'deny'
('false','true')[condition]
(2,3)[True] # 3
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# function

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
(lambda x: x+3)(3) # 6

# some operations
def add(n): return n + n
res = map(add, [1,2,3]) 
list(res)                              # [2, 4, 6]
list(map(lambda i: i*2, [1,2,3]))      # [2, 4, 6]
list(filter(lambda i: i>2, [1,2,3,4])) # [3, 4]

from functools import reduce
reduce(lambda r,i: r+i, [1,2,3,4])    # 10
reduce(lambda r,i: r+i, [1,2,3,4], 5) # 15

# only to avoid error since functions can't be empty
def f(): pass
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# class
class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

class Employee(Person):
	def __init__(self):
		super(Employee, self).__init__()
	
	def method(self):
		return 2

s = Student('John', 88, None)
s.name # 'John'
s.age  # 88

type(s) # determine type of variable
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# misc
print('This line will be printed.')
exit() # exit script

import os
os.listdir()
os.mkdir()
os.rmdir()

f = open('myfile.txt')
str = f.read()

# iterable
itr = iter((1,2,3))
next(itr) # 1
next(itr) # 2
next(itr) # 3
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@