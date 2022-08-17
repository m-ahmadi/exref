# https://docs.python.org/3/library/itertools.html

# inifinte
count(start=0, step=1)
cycle(iterable)
repeat(object, ?times)

# terminate on shortest input sequence
accumulate()
chain()
chain.from_iterable()
compress()
dropwhile(predicate, iterable)
filterfalse(predicate, iterable)
groupby(iterable, key=None)
islice(iterable, stop) | islice(iterable, start, stop, ?step)
pairwise(iterable)
starmap(function, iterable)
takewhile(predicate, iterable)
tee(iterable, n=2)
zip_longest(*iterables, fillvalue=None)

# combinatoric
product(*iterables, repeat=1)
permutations(iterable, r=None)
combinations(iterable, r)
combinations_with_replacement(iterable, r)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

colors = cycle(['red','blue'])
[*zip([1,2,3], colors)] # [ [1,'red'], [2,'blue'], [3,'red'] ]
