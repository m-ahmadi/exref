# dict
d = {'foo': 2, 'bar': 7, 'baz': lambda i: i*2}
d.foo                  # AttributeError: 'dict' object has no attribute 'foo'
d['foo']               # 2
d['baz'](2)            # 4
d.keys()               # ['foo','bar','baz']
[*d]                   # ...
[k for k in d]         # ...
d.values()             # [2, 7, <function>]
[d[k] for k in d]      # ...
d.items()              # [ ('foo',2), ('bar',7), ('baz',<function>) ]
for k in d: print(d[k])
del d['baz']           # {'foo':2, 'bar':7}
d.get('foo')           # 2
d.setdefault('baz',8)  # 8,  d: {'foo':2, 'bar':7, 'baz':8}
d.update({'foo':97})   # {'foo':97, 'bar':7, 'baz':8}
{**d, 'foo':97}        # ... (v3.5+)
d.popitem()            # {'baz':8},  d: {'foo':97, 'bar':7}
d.pop('bar')           # 7,  d: {'foo':97}
d.pop('bar',3)         # 3,  d: {'foo':97}
d.copy()               # make copy
{**d}                  # ...
d.fromkeys(['foo'],32) # {'foo': 32}
d.clear()              # {}

# keys() creates a view (not a copy)
d = {'a': 1, 'b': 2}
keys = d.keys() # ['a', 'b']
del a['a']
keys            # ['b']

# https://docs.python.org/3/library/stdtypes.html#mapping-types-dict

dict(zip(['a','b'], [1,2])) # {'a':1, 'b':2}
dict([('a',1), ('b',2)])    # ...
dict({'a':1, 'b':2})        # ...
dict({'a':1}, b=2)          # ...

# dict comprehension
{i: i*i for i in range(3)}          # {0: 0, 1: 1, 2: 4}
{f'foo-{i}': i*i for i in range(3)} # {'foo-0': 0, 'foo-1': 1, 'foo-2': 4}