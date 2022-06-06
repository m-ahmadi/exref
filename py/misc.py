print('This line will be printed.')
exit() # exit script

# iterable
itr = iter((1,2,3))
next(itr) # 1
next(itr) # 2
next(itr) # 3

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

# change locale
import locale
locale.setlocale(locale.LC_ALL, 'Persian' | 'fa_FA.UTF-8')
locale.setlocale(locale.LC_ALL, '')
