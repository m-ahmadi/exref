class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

student = Student('John', 88, None)
student.name  # 'John'
student.age   # 88
type(student) # <class '__main__.Student'>

# inheritence
class Person():
	def __init__(self, name, age):
		self.name = name
		self.age = age

class Employee(Person):
	def __init__(self, name, age, salary):
		super(Employee, self).__init__(name, age)
		self.salary = salary
	
	def get_salary(self):
		return self.salary

employee = Employee('Jim', 47, 80000)
employee.name   # 'Jim'
employee.age    # 47
employee.salary # 80000

# magic method
class Foo():
	def __init__(self, x):
		self.x = x
	def __call__(self):
		return self.x * 2
foo = Foo(32)
foo.x # 32
foo() # 64

# list keys of object
import datetime as dt
dir(dt)        # ['date','datetime','time','timedelta', ...]
[*dt.__dict__] # ... (not always the same depending on the object)

# iterate through own props
vars(student)    # {'name': 'John', 'age': 88, 'major': None}
student.__dict__ # ...

# keys of own & inherited members
dir(student) # [..., 'age', 'is_old', 'major', 'name']

# call method with string
student['name']              # err
getattr(student, 'name')     # 'John'
getattr(student, 'is_old')() # False
student.__dict__['name']     # 'John'
student.__dict__['is_old']() # err (does not contain methods)
