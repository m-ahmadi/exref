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
		for col_idx, col in enumerate(row):
			col = str(col)
			col_max = cols_max[col_idx]
			char_len = len(col)
			delta = ' ' * (col_max - char_len)
			s += col + delta + '\t'
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
