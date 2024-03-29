s = set() # empty set (no literal syntax for empty set)
s = {1,2,3}
2 in s    # True  O(1)
del s
{1,2,3} == set([1,2,3]) # True

s = {1,2,3}
s.add('foo')        # {1,2,3,'foo'}
s.update({'bar',4}) # {1,2,3,4,'foo','bar'}
s.update([5,6])     # {1,2,3,4,5,'foo',6,'bar'}
s.remove(5)         # {1,2,3,4,'foo',6,'bar'}
s.remove(5)         # err
s.discard(4)        # {1,2,3,'foo',6,'bar'}
s.discard(4)        # no err
s.pop()             # {2,3,'foo',6,'bar'} note: can't know which item gets poped (since sets are unordered)
s.clear()           # {}
{1,2}.copy()              # {1,2}
{1,2}.difference({1,3})   # {3}
difference_update()
{1,2}.intersection({2,3}) # {2}
intersection_update()
isdisjoint()
{1,2}.issubset({1,2,3})     # True
{'a','b'}.issuperset({'a'}) # True
symmetric_difference()
symmetric_difference_update()
{1,2}.union({3,4})          # {1,2,3,4}

# https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset

# set comprehension
squares = {x**2 for x in [0,2,4] if x < 4} # {0, 4}

# unhashable type
d = {'a':1}
s = {d}  # TypeError: unhashable type: 'dict'
s.add(d) # ...

# sets cannot be sorted
sorted({3,2,1})       # [1,2,3]        (cuz auto casted to list)
sorted({'c','b','a'}) # ['a','b','c']  ...