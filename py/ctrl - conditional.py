# condition
if name == 'John' and age == 23:
	print('foo')

if 4 > 2:
  print(1)
else:
  print(2)

if 2 > 4:
  print(1)
elif 3 > 4
  print(2)
else:
  print(3)

if (
	4 > 2 and
	5 > 4 and
	6 > 5
):
	print(1)
else:
	print(2)

# ternary
foo = 'allow' if condition else 'deny'
('false','true')[condition]
(2,3)[True] # 3

# keywordy
list(map(lambda i: i is not 2, [1,2,3])) # [True, False, True]
list(map(lambda i: i != 2, [1,2,3]))     # [True, False, True]