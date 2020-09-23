import foo                 # foo imported and bound locally
import foo.bar.baz         # foo.bar.baz imported, foo bound locally
import foo.bar.baz as fbb  # foo.bar.baz imported and bound as fbb
from foo.bar import baz    # foo.bar.baz imported and bound as baz
from foo import attr       # foo imported and foo.attr bound as attr

print("This line will be printed.")
myint = 7
myfloat = 7.0
mystr = 'hello'

mylist = [1,2]
mylist.append(3)

for x in mylist:
	print(x)

mylist[4] # error

x<range> = range(start, stop, step)
x = range(1,10,2)
print( list(x) ) # [1, 3, 5, 7, 9]

x = range(6)
for n in x:
	print(n)

number = 1 + 2 * 3 / 4.0 # 2.5
remainder = 11 % 3
squared = 7 ** 2
cubed = 2 ** 3
helloworld = "hello" + " " + "world"
lotsofhellos = "hello" * 10
even_numbers = [2,4,6,8]
odd_numbers = [1,3,5,7]
all_numbers = odd_numbers + even_numbers

if name == "John" and age == 23:
	print("Your name is John, and you are also 23 years old.")


def my_function():
	print("Hello From My Function!")

def addition(n): 
	return n + n 
numbers = [1,2,3]
result = map(addition, numbers) 
print( list(result) )  # [2, 4, 6]

# predicate
list( map(lambda i: i*2, [1,2,3]) ) # [2, 4, 6]


class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

s = Student('John', 88, None)
s.name # 'John'
s.age  # 88

type(s) # determine type of variable 