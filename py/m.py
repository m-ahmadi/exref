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

# __init__.py (if exists in a dir, that dir is treated as package)
__all__ = ['echo', 'surround', 'reverse']


# implicit namespace packages
# ?


# package relative imports
from .moduleY import spam
from .moduleY import spam as ham
from . import moduleY
from ..subpackage1 import moduleY
from ..subpackage2.moduleZ import eggs
from ..moduleA import foo
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@