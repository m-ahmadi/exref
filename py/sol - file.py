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

# read
f = open('file.txt')
str = f.read()

# write
f = open('file.txt', 'w', encoding='utf-8')
f.write('foo bar')
f.close()

# append
f = open('file.txt', 'a')
f.write('foo')
f.close()

# misc
import os
os.system('cls') # clear console
os.listdir()
os.mkdir()
os.rmdir()

# json
import json
with open('data.json', 'w', encoding='utf-8') as f: # `with` ensures resource is 'cleaned up' when code finishes running
	json.dump(data, f, ensure_ascii=False, indent=4)