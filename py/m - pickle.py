import pickle
# https://docs.python.org/3/library/pickle.html

pickle.dump()  # pickle & write to file
pickle.dumps() # return pickled
pickle.load()  # read file & return unpickled
pickle.loads() # return unpickled

pickle.dump(obj, file, protocol=None, *, fix_imports=True, buffer_callback=None)
pickle.dumps(obj, protocol=None, *, fix_imports=True, buffer_callback=None)
pickle.load(file, *, fix_imports=True, encoding='ASCII', errors='strict', buffers=None)
pickle.loads(data, /, *, fix_imports=True, encoding='ASCII', errors='strict', buffers=None)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

class Foo:
	name = 'joe'
foo = Foo()

# write to disk
with open('file.bin', 'wb') as f:
	pickle.dump(foo, f)

pickled_bytes = pickle.dumps(foo)
with open('file.bin', 'wb') as f:
	f.write(pickled_bytes)

# load from disk
with open('file.bin', 'rb') as f:
	foo2 = pickle.load(f)
foo2.name # 'joe'

with open('file.bin', 'rb') as f:
	pickled_bytes = f.read()
foo3 = pickle.loads(pickled_bytes)
foo3.name # 'joe'
