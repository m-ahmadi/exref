
# `with` ensures resource is 'cleaned up' afterward (wrap execution of block with methods defined by a context manager)
with open('file.txt') as f:
	f.read()

# no variable scope in conditionals or loops (vars are scoped to innermost function/class/module)
if condition:
	x = 1 # global variable
for i in range(2):
	x = 2 # ...
while True:
	x = 2 # ...