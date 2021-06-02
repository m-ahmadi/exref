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
# basic operations
1+2*3/4 # arithmetic: 2.5
9 % 2   # remainder: 1
4 ** 2  # squared: 16
4 ** 3  # cubed: 64
'foo' +' '+ 'bar' # str concat: 'foo bar'
('foo' 'bar')     # ...
'foo' * 2         # str repeat: 'foofoo'
[1,2] + [3,4]     # list concat: [1,2,3,4]

# multiline string
"""foo
bar"""

'''foo
bar
'''

# some methods
{'a','b'}.issuperset({'a'}) # true
'a,b,c'.split()             # ['a', 'b', 'c']
', '.join(['a','b','c'])    # 'a, b, c'

# list
x = [1,2]
x.append(3)
x[4]   # error
len(x) # 2

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

# variable assignment
x = 2
x = y = z = 'foo'

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
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# loop
for i in list:
	print(x)

for i in range(6):
	if i > 2:
		break
	print(i)

for i in list:
	if i > 2:
		continue
	print(i)

for i in list:
	print(i)
else:
	print('done') # not if loop breaks

for i in list:
	pass # empty loop
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# condition
if name == 'John' and age == 23:
	print('foo')
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# function
def foo():
	print('hi')

def foo(n): 
	return n*2

f = lambda: print('hi')
f = lambda a: a + 10
f = lambda a, b: a * b

def add(n): return n + n
res = map(add, [1,2,3]) 
list(res)                              # [2, 4, 6]
list(map(lambda i: i*2, [1,2,3]))      # [2, 4, 6]
list(filter(lambda i: i>2, [1,2,3,4])) # [3, 4]

from functools import reduce
reduce(lambda r,i: r+i, [1,2,3,4])    # 10
reduce(lambda r,i: r+i, [1,2,3,4], 5) # 15
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# class
class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

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
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@