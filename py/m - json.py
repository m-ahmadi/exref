import json

json.dump(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw) # writes to file
json.dumps(obj, *,    ↑...) # returns str
json.load(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw) # reads file
json.loads(s, *, ↑...) # parses str


# write - JSON.stringify()
data1 = [1,2,3,4]
data2 = {'foo': 1, 'bar': 2}

json.dumps(data1, indent=2)            # '[\n  1,\n  2,\n  3,\n  4,\n]'
json.dumps(data2)                      # '{"foo": 1, "bar": 2}'
json.dumps( np.array(data1).tolist() ) # '[1, 2, 3, 4]'

with open('file.json', 'w', encoding='utf-8') as f:
	json.dump(data, f, ensure_ascii=False, indent=4)


# read - JSON.parse()
j = '{"foo": "a", "bar": ["b", "c", 4]}'
o = json.loads(j)
o
o['languages']

with open('file.json') as f:
  o = json.load(f)
