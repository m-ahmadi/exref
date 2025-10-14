class Student:
	def __init__(self, name, age, major):
		self.name = name
		self.age = age
		self.major = major

	def is_old(self):
		return self.age > 100

student = Student('John', 88, None)
student.name     # 'John'
student.age      # 88
student.is_old() # False
type(student)    # <class '__main__.Student'>

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

# iterate through own props (not methods)
vars(student)       # {'name': 'John', 'age': 88, 'major': None}
student.__dict__    # ...
[*student.__dict__] # keys only:  ['name', 'age', 'major']

# keys of own & inherited members
dir(student)   # [..., 'age', 'is_old', 'major', 'name']
import datetime as dt
dir(dt)        # ['date', 'datetime', 'time', 'timedelta', ...]
[*dt.__dict__] # ↑... (not always, depends on object)

# call method with string
student['name']              # err
getattr(student, 'name')     # 'John'
getattr(student, 'is_old')() # False
student.__dict__['name']     # 'John'
student.__dict__['is_old']() # err (does not contain methods)

# check if object has member
hasattr(student, 'name')   # True
hasattr(student, 'gender') # False
hasattr(student, 'is_old') # True

# convert dict to object - flat
class DictToObj:
	def __init__(self, **entries):
		self.__dict__.update(entries)
data = {'a': 1, 'b': 'abc'}
x = DictToObj(**data)
x.a        # 1
x.b        # 'abc'
data = {"a": 1, "b": {"foo": "hi", "bar": 123}}
y = DictToObj(**data)
y.b.foo    # err
y.b['foo'] # 'hi'

# convert dict to object - deep
class DeepDictToObj:
	@staticmethod
	def map_entry(entry):
		if isinstance(entry, dict):
			return DeepDictToObj(**entry)
		return entry
	def __init__(self, **kwargs):
		for key, val in kwargs.items():
			if type(val) == dict:
				setattr(self, key, DeepDictToObj(**val))
			elif type(val) == list:
				setattr(self, key, list(map(self.map_entry, val)))
			else:
				setattr(self, key, val)
data = {"a": 1, "b": {"foo": "hi", "bar": 123}}
y = DeepDictToObj(**data)
y.b.foo    # err
y.b['foo'] # 'hi'
