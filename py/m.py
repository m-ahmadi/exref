import foo                 # foo imported and bound locally
import foo.bar.baz         # foo.bar.baz imported, foo bound locally
import foo.bar.baz as fbb  # foo.bar.baz imported and bound as fbb
from foo.bar import baz    # foo.bar.baz imported and bound as baz
from foo import attr       # foo imported and foo.attr bound as attr
from foo import bar, baz
from foo import (bar, baz)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# import other scripts

import sys
sys.path # any modules in these paths can be imported

# import from current dir
# another.py
def foo(): print('foo')
def bar(): print('bar')
# main.py
import another          # all
from another import *   # ...
from another import foo # some
another.reload() # refresh cache

# import from other dirs
import sys
sys.path.insert(0, './foo/') # or .append('./foo')
import foo
# or
new_path = './foo/'
if new_path not in sys.path:
	sys.path.append(new_path)
import foo
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# detect module invocation type
if __name__ == '__main__':
	print('module executed directly')
else:
	print('module imported')
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# name with spaces (avoid)

foo_bar = __import__('foo bar')

exec(open('foo bar.py', 'r').read()) # from foo_bar import *

import importlib
foo_bar = importlib.import_module('foo bar') # wrapper around __import__()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# package (a dir that contains multiple modules)
# dir treated as pkg if contains `__init__.py`
# https://docs.python.org/3/tutorial/modules.html#packages
# https://docs.python.org/3/reference/import.html#packages

# __init__.py
# can be empty
__all__ = ['x','y'] # modules names to import when `from package import *`


# example
'''
foo/
	__init__.py:  null
	a.py:         aa = lambda i: i*2
bar/
	__init__.py:  null
	b.py:         bb = lambda i: i*3
baz/
	__init__.py:  __all__ = ['c','d']
	c.py:         cc = lambda i: i*4
	d.py:         dd = lambda i: i*5
'''
from foo.a import aa
aa(2)   # 4
from bar.b import bb
bb(2)   # 6
from baz import *
c.cc(2) # 8
d.dd(2) # 10


# see which names a module defines
dir() # this module
import math
dir(math)


# intra-package References
# https://docs.python.org/3/tutorial/modules.html#intra-package-references
# https://docs.python.org/3/reference/import.html#package-relative-imports
from .moduleY import spam
from .moduleY import spam as ham
from . import moduleY
from ..subpackage1 import moduleY
from ..subpackage2.moduleZ import eggs
from ..moduleA import foo
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# namespace package
# https://packaging.python.org/en/latest/guides/packaging-namespace-packages/

# setup.py
from setuptools import find_packages, setup # pip install setuptools

setup(
	name='mypkg',
	packages=find_packages(),
	version='0.0.1',
	description='foo',
	author='bar',
	license='MIT',
)

# pip install -e .
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@