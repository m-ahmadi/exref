# https://docs.python.org/3/library/inspect.html#module-inspect
# https://docs.python.org/3/library/inspect.html#inspect.Signature
import inspect

# get what params a function takes
def my_function(foo, bar=10, *args, **kwargs):
	pass
sig = inspect.signature(my_function)
str(sig)                # '(foo, bar=10, *args, **kwargs)'
list(sig.parameters)    # ['foo', 'bar', 'args', 'kwargs']
'foo' in sig.parameters # True

# more info about params - getting to the params
sigd = dict(sig.parameters)
foo = sigd['foo'] # or
foo,bar,args,kwargs = list(sig.parameters.values())

# more info about params - the info itself
foo.default                   # <class 'inspect._empty'>
foo.default == inspect._empty # True
bar.default                   # 10

{k: str(sigd[k].__getattribute__('kind')) for k in sigd}
'''
{
 'foo':    'POSITIONAL_OR_KEYWORD',
 'bar':    'POSITIONAL_OR_KEYWORD',
 'args':   'VAR_POSITIONAL',
 'kwargs': 'VAR_KEYWORD'
}
'''
