print('This line will be printed.')
exit() # exit script

import os
os.system('cls') # clear console
os.listdir()
os.mkdir()
os.rmdir()

f = open('file.txt')
str = f.read()

f = open('file.txt', 'w', encoding='utf-8')
f.write('foo bar')
f.close()

# iterable
itr = iter((1,2,3))
next(itr) # 1
next(itr) # 2
next(itr) # 3

import json
with open('data.json', 'w', encoding='utf-8') as f: # `with` ensures resource is "cleaned up" when code finishes running
	json.dump(data, f, ensure_ascii=False, indent=4)

# args passed to script
import sys
sys.argv # ['script.py', 'arg1', 'arg2']

import sys, getopt
getopt.getopt(args, shortopts='', ?longopts=['',..])
	#	short | long
		'o:'  | 'o='  # opt with required value
		'o'   | 'opt' # boolean opt 
opts, args = getopt.getopt(sys.argv[1:], 'hi:o:', ['help','input=','output='])
	
([('--help', ''), ('--input', '2'), ('-o', '3')], ['foo', 'bar']) # py t.py --help --input 2 -o 3 foo bar

# python version
import sys
sys.version      # string:  '3.8.10 ...'
sys.version_info # array:   (major=3, minor=8, micro=10, ...)

# capture stdout
import subprocess
proc = subprocess.Popen('dir /b', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
stdout, stderr = proc.communicate()
stdout.decode('utf8') # 'file1.txt\r\nfile2.txt\r\n'