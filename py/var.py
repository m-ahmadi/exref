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

ar = [ [1,2], [3,4] ]
[a, b] = ar         # a:[1,2]  b:[3,4]
a, (_, b) = ar      # a:[1,2]  b:4
(_, a), (b, _) = ar # a:2      b:3

# ↑... dict
from operator import itemgetter
a, b = itemgetter('a','b')({'a':1, 'b':2})

# rest slicing
a, *b = [1,2,3,4]      # a=1 b=[2,3,4]
*a, b = 1,2,3,4        # b=4 a=[1,2,3]

# ignoring
a, _ = [1,2]           # ignore value
a, _, c = (1,2,3)      # ...
a, *_ = [1,2,3,4,5]    # ignore rest

# trailing comma
a, = 1,
a, = [1]
a, = 1     # TypeError: cannot unpack non-iterable int object
a, = [1,2] # ValueError

# pass by reference: list, dict, ...?
a = b = []
a.append(2)
a # [2]
b # [2]

a = b = {}
a['q'] = 2
a # {'q':2}
b # {'q':2}

a = [[]] * 3
a # [[], [], []]
a[0].append(3)
a # [[3], [3], [3]]