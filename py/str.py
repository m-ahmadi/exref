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
f'foo {23}!'             # 'foo 23!'
format(12.3456, '.2f')   # '12.35'
f'{12.345:.2f}'          # ...
'{:.2f}'.format(12.3456) # ...
round(12.3456, 2)        # 12.35

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
import datetime
name = 'Fred'
age = 50
anniversary = datetime.date(1991, 10, 12)
f'My name is {name}, my age next year is {age+1}, my anniversary is {anniversary:%A, %B %d, %Y}.'