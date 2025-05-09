# manual (file never closes if exception thrown)
# read
f = open('file.txt')
_str = f.read()
f.close()

# read bom (ignore bom char)
f = open('file.txt', encoding='utf-8-sig')
_str = f.read()

# write
f = open('file.txt', 'w', encoding='utf-8')
f.write('hi')
f.close()

print('a', 'b', 2+3, file=open('file.txt', 'w'))

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
os.getcwd()
os.chdir(path)
os.path.exists()
os.path.isfile()
os.path.isdir()
os.path.join()
os.path.dirname()
os.path.basename()
os.path.abspath()
os.path.getsize(path) # in bytes

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
__file__                                   # 'C:\\foo.py'
pathlib.Path(__file__).resolve()           # WindowsPath('C:/foo.py')
pathlib.Path(__file__).parent.resolve()    # WindowsPath('C:/')    (current script dir)
import sys
sys.path[0]                                # 'c:\\'                (current script dir)
os.path.abspath(os.path.dirname(__file__)) # ...

# change cwd to script's dir
os.chdir(os.path.dirname(__file__))

# json
import json

with open('file.json') as f:
  j = json.load(f)

with open('file.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)

# std
import sys
sys.stdout.write(f'\r1/100')
sys.stdout.write(f'\r2/100')

import time
tot = 20
for i in range(tot):
	sys.stdout.write(f'\r{i+1}/{tot}')
	time.sleep(0.1)
