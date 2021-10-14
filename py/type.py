# basic types
'hello' # str
True    # bool
None    # null

4   # int
2.5 # float
0.  # ...
1j  # complex

[1,2,3]  # list
(1,2,3)  # tuple
range(4) # range

{'a','b','c'}        # set
frozenset({'a','b'}) # frozenset

{'a': 'foo', 'b': 4} # dict
b'hello'             # bytes
bytearray(5)         # bytearray
memoryview(bytes(5)) # memoryview

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

# type coercion
str(25)        # '25'
int('25')      # 25
float('12.34') # 12.34

if None or 0 or 0.0 or '' or [] or {} or set():
	print('dead code') # not reached