import unittest
# https://docs.python.org/3/library/unittest.html


unittest.TestCase(methodName='runTest')
# https://docs.python.org/3/library/unittest.html#unittest.TestCase

unittest.main(
	module='__main__',
	defaultTest=None|''|['',..],
	argv=sys.argv|[],
	testRunner=None|TestRunner,
	testLoader=unittest.defaultTestLoader|TestLoader,
	exit=True,
	verbosity=1|2,
	failfast=None,
	catchbreak=None,
	buffer=None,
	warnings=None
	# https://docs.python.org/3/library/unittest.html#unittest.main
)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

from unittest import TestCase, main

class TestStringMethods(TestCase):
	
	def test_upper(self):
		self.assertEqual('foo'.upper(), 'FOO')
	
	def test_isupper(self):
		self.assertTrue('FOO'.isupper())
		self.assertFalse('Foo'.isupper())
	
	def test_split(self):
		s = 'hello world'
		self.assertEqual(s.split(), ['hello', 'world'])
		# check that s.split fails when the separator is not a string
		with self.assertRaises(TypeError):
			s.split(2)


main()            # py -m unittest f.py
main(verbosity=2) # py -m unittest f.py -v
