# list comprehension
nums = [1, 2, 3, 4]
x = [x*x for x in nums]               # [1, 4, 9, 16]
y = [x*x for x in nums if x % 2 == 0] # [4, 16]