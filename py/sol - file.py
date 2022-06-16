open(file, mode='r|w|x|a|b|t|+', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
	mode=
		'r' # read (default)
		'w' # write (truncate file first)
		'x' # create file, err if exists
		'a' # write, append if exists
		'b' # binary mode
		't' # text mode (default)
		'+' # update (read and write)
	encoding= locale.getpreferredencoding(False) # default encoding (platform-dependent): 'cp1252'

# manual (file never closes if exception thrown)
# read
f = open('file.txt')
_str = f.read()
f.close()

# write
f = open('file.txt', 'w', encoding='utf-8')
f.write('hi')
f.close()

# append
f = open('file.txt', 'a')
f.write('hi')
f.close()

# `with` (auto cleanup of resource)
with open('file.txt') as f:
	_str = f.read()

with open('file.txt', 'w') as f:
	f.write('hi')

# default newline chars
with open('file.txt', 'w') as f:
	f.write('\n'.join(['a','b'])) # crlf
with open('file.txt', 'w', newline='') as f:
	f.write('\n'.join(['a','b'])) # lf

# misc
import os # https://docs.python.org/3/library/os.html
os.system('cls') # clear console
os.listdir()
os.mkdir()
os.rmdir()
os.unlink() | remove()
os.path.exists()
os.path.isfile()
os.path.isdir()
os.path.join()
os.path.dirname()
os.path.basename()
os.path.abspath()
os.path.getcwd()

import shutil
shutil.rmtree('mydir') # almost equal to `rm -rf mydir`
shutil.rmtree('mydir', ignore_errors=True)

import pathlib # https://docs.python.org/3/library/pathlib.html
path = pathlib.Path('path/to')
path/'some'/'where' # using magic methods:  WindowsPath('path/to/some/where')
path.parent
path.stem           # filename without extension
path.is_file()
path.is_dir()
path.exists()
path.resolve()
path.absolute()
path.unlink()
# https://docs.python.org/3/library/pathlib.html#correspondence-to-tools-in-the-os-module

# path of current script
__file__                                # 'C:\\foo.py'
pathlib.Path(__file__).resolve()        # WindowsPath('C:/foo.py')
pathlib.Path(__file__).parent.resolve() # WindowsPath('C:/')    (current script dir)
import sys
sys.path[0]                             # 'c:\\'                (current script dir)

# json
import json

with open('file.json') as f:
  j = json.load(f)

with open('file.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)

# std
import sys
sys.stdout.write(f'1/100\r')
sys.stdout.write(f'2/100\r')