# loop
for i in range(10):
	if i == 9:
		break
	if i % 2 == 0:
		print(i)
	else:
		continue

# access index
for i,v in enumerate(range(5)): print(i,v)
for i,v in enumerate(range(5),2): print(i,v)

for i in range(10):
	print(i)
else:
	print('done') # after loop (not if loop breaks)

for i in list:
	pass # empty loop

for i in range(10): print 'foo'; print 'bar'

i = 0
while i < 3 :
	print(j)
	j = j + 1

# no lexical closure
# loop variable is not local to lambda/fn, it's defined in scope (accessed when called, not when defined)
# https://docs.python.org/3/faq/programming.html#why-do-lambdas-defined-in-a-loop-with-different-values-all-return-the-same-result
for i in range(5):
	def f(): print(i) # 'i' is not defined
	f()

fs = []
for i in range(5):
	fs.append(lambda: i**2)
fs[2]() # 16
fs[4]() # 16

# fix
def f(i): print(i)
for i in range(5):
	f(i)