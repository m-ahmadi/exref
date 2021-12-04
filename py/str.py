'foo' +' '+ 'bar' # str concat: 'foo bar'
('foo' 'bar')     # ...: 'foobar'
'foo' * 2         # str repeat: 'foofoo'
'a,b,c'.split()             # ['a', 'b', 'c']
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

# raw string
r'\\' # '\\\\'

# unicode
u'dude'

# format string
f'{12.345:.2f}' # ...
f'foo {23}!'    # 'foo 23!'

age = 32
f'hello {age}' # 'hello 32'

import datetime
bday = datetime.date(1970, 10, 12)
'your were born: {bday:%A, %B %d, %Y}'                      # 'your were born: Monday, October 12, 1970'
'your were born: {}'.format(bday.strftime('%A, %B %d, %Y')) # ...