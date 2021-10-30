
# `with` ensures resource is 'cleaned up' afterward (wrap execution of block with methods defined by a context manager)
with open('file.txt') as f:
	f.read()