'foo' +' '+ 'bar' # str concat: 'foo bar'
('foo' 'bar')     # ...: 'foobar'
'foo' * 2         # str repeat: 'foofoo'
'a,b,c'.split()             # ['a', 'b', 'c']
list('abc')                 # ...
'AA\nBB\nCC\n'.splitlines() # ['AA', 'BB', 'CC']
', '.join(['a','b','c'])    # 'a, b, c'
' foo '.strip()             # 'foo'
'Foo'.lower()               # 'foo'
'foo'.upper()               # 'FOO'
'foo'.startswith('fo')      # True
'foo'.endswith('oo')        # True
'foo'.find('oo')            # match index: 2
'foo'.replace('oo', 'ar')   # 'far'
len('foo')                  # 5
'foo' in 'football'         # containment: True
# https://docs.python.org/3/library/stdtypes.html#string-methods

# split
'1,,2'.split(',')     # ['1', '',  '2']  consecutives are separated
' 1 2'.split(' ')     # ['', '1', '2']   no strip first
'1<>2<>3'.split('<>') # ['1', '2', '3']  multi-char
''.split(',')         # ['']
# split - no sep (sep=' ', another alg)
'1  2'.split()        # ['1', '2']       consecutives are merged
' 1 2 '.split()       # ['1', '2']       strip first
''.split()            # []
# split - maxsplit
'1 2 3'.split(' ', 1)  # ['1', '2 3']
'1 2 3'.split(None, 1) # ...

# str format using % opr
'hello, %s' % 101        # 'hello, 101'
'a %s b %x c' % (1, 2)   # 'a 1 b 2 c'
'a %(x) a %(y) a' % {'x':1,'y':2} # 'a 1 2' (wtf)

# modern str format (v3.6+)
# https://docs.python.org/3/library/string.html#format-specification-mini-language
'why {} plus {} equals {}?'.format(2, 2, 4) # 'why 2 plus 2 equals 4?'
'{:.2f}'.format(12.3456) # '12.35'
format(12.3456, '.2f')   # '12.35'

from string import Template
Template('foo, $name!').substitute(name=23) # 'foo, 23!'

# multiline string
"""foo
bar"""

'''foo
	bar
'''

# string flags

# bytes
b = b'abc'
type(b)          # <class 'bytes'>
b.decode('utf8') # 'abc'
b.decode('utf8', 'replace') # fix UnicodeDecodeError: "invalid start byte"

# raw string
r'\\' # '\\\\'

# unicode
u'dude'

# format string
f'foo {2+2}!'       # 'foo 4!'
f'{12.345:.2f}'     # '12.35'
f'''hi {2+2}'''     # 'hi 4'
n = 3.1415
f'hello {n}'        # 'hello 3.1415'
f'hello {n:0.2f}'   # 'hello 3.14'
dp = 3
f'hello {n:.{dp}f}' # 'hello 3.142'

import datetime
bday = datetime.date(1970, 10, 12)
f'your were born: {bday:%A, %B %d, %Y}'                     # 'your were born: Monday, October 12, 1970'
'your were born: {}'.format(bday.strftime('%A, %B %d, %Y')) # ...

# format string - escape curly
f'hi {{ dude }}'                    # 'hi { dude }'
f'{{ 2*2 }}'                        # '{ 2*2 }'
f'foo {0} bar {1}'.format(4, 7)     # 'foo 0 bar 1'
f'foo {{0}} bar {{1}}'.format(4, 7) # 'foo 4 bar 7'
f'{{{ "HELLO".lower() }}}'          # eval expression:  '{hello}'

# format string - backslash not allowed
f'foo \n bar'     # ok
f'foo {"\n"} bar' # err
