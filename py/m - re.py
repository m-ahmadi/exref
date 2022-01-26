import re

# https://docs.python.org/3/library/re.html#re.search

re.A | ASCII
re.DEBUG
re.I | IGNORECASE
re.L | LOCALE
re.M | MULTILINE
re.S | DOTALL
re.X | VERBOSE

re.sub(pattern, repl=''|fn, string, count=0, flags=0)
re.sub(r'the', 'no', 'the lord of the ring') # 'no lord of no ring'
re.sub(r'\r\n', '\n', 'FOO\r\nFOO\r\nFOO')   # 'FOO\nFOO\nFOO'


re.findall(pattern, string, flags=0)
re.findall(r'the', 'the lord of the rings') # ['the', 'the']


re.search(pattern, string, flags=0)


re.fullmatch(pattern, string, flags=0)


re.split(pattern, string, maxsplit=0, flags=0)


re.match(pattern, string, flags=0)