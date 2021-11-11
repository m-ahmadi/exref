try:
	print(x)
except:
	print('An exception occurred')


try:
	print(x)
except NameError:
	print('Variable x is not defined')
except:
	print('Something else went wrong')


try:
	print(x)
except NameError as err:
	print('Name error: {0}'.format(err))


try:
	print(x)
except (RuntimeError, TypeError, NameError):
	pass


try:
	print('Hello')
except:
	print('Something went wrong')
else:
	print('Nothing went wrong')


try:
	print(x)
except:
	print('Something went wrong')
finally:
	print("The 'try except' is finished")


raise

raise Exception('msg')

raise TypeError('msg')

NameError ValueError TypeError RuntimeError ConnectionError OSError ZeroDivisionError IndexError ...