import json

json.dump(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw) # writes to file
json.dumps(obj, *,    ↑...) # returns str

data1 = [1,2,3,4]
data2 = {'foo': 1, 'bar': 2}

with open('output.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)

json.dumps(data1, indent=2)            # '[\n  1,\n  2,\n  3,\n  4,\n]'
json.dumps(data2)                      # '{"foo": 1, "bar": 2}'

json.dumps( np.array(data1).tolist() ) # '[1, 2, 3, 4]'