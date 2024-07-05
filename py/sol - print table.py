def print_table(rows=[[]]):
	cols = {}
	for row in rows:
		for j, col in enumerate(row):
			if not j in cols:
				cols[j] = []
			cols[j].append(len(str(col)))
	cols_max = [max(cols[col]) for col in cols]
	s = ''
	for row in rows:
		last_idx = len(row) - 1
		for col_idx, col in enumerate(row):
			col = str(col)
			col_max = cols_max[col_idx]
			char_len = len(col)
			delta = ' ' * (col_max - char_len)
			not_last = col_idx < last_idx
			s += col + (delta if not_last else '') + '\t'
		s = s[:-1]
		s += '\n'
	return s


table = [
	['foo', 'bar', 'baz'],
	['a', 'b', 'c'],
	['aa', 'bb', 'cc'],
	['x', 'y'],
	['z', 'yyyyyy'],
	['ini', 'mini', 'miny', 'moe'],
]

print(print_table(table))
'''
foo	bar   	baz
a  	b     	c
aa 	bb    	cc
x  	y
z  	yyyyyy
ini	mini  	miny	moe
'''
