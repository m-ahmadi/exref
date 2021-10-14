class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

class Employee(Person):
	def __init__(self):
		super(Employee, self).__init__()
	
	def method(self):
		return 2

s = Student('John', 88, None)
s.name # 'John'
s.age  # 88

type(s) # determine type of variable