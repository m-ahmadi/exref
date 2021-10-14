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

i = 0
while i < 3 :
	print(j)
	j = j + 1