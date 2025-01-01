def get_all_combinations(a=[]):
	idxs = range(len(a))
	r = set()
	for i in idxs:
		for j in idxs:
			if i == j: continue # filter out same item combs
			a = [*map(str,[i,j])]
			stub_rvrs = ','.join(reversed(a))
			if stub_rvrs in r: continue # filter out opposite dupplicates
			stub = ','.join(a)
			r.add(stub)
	r = [[*map(int,i.split(','))] for i in r] # stub to int arr
	r = sorted(sorted(r, key=lambda i: i[1]), key=lambda i: i[0]) # sort combs
	return r

get_all_combinations([0,1,2])   # [ [0,1] ]
get_all_combinations([0,1,2])   # [ [0,1], [0,2], [1,2] ]
get_all_combinations([0,1,2,3]) # [ [0,1], [0,2], [0,3], [1,2], [1,3], [2,3] ]
