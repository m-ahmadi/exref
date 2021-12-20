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
str = f.read()
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
	str = f.read()

with open('file.txt', 'w') as f:
	f.write('hi')

# misc
import os
os.system('cls') # clear console
os.listdir()
os.mkdir()
os.rmdir()
os.path.exists()
os.path.isfile()
os.path.isdir()
os.path.join()

import pathlib
path = pathlib.Path(path_to_file)
path.is_file()
path.is_dir()
path.exists()

# json
import json
with open('data.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)