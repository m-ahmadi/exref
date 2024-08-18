import yaml
try:
	from yaml import CLoader as Loader, CDumper as Dumper # LibYAML parser
except ImportError:
	from yaml import Loader, Dumper # pure python version


data = yaml.load(stream, Loader=Loader)
data = yaml.safe_load(stream)
dump = yaml.dump(data, Dumper=Dumper)

# https://pyyaml.org/wiki/PyYAMLDocumentation#reference

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

document = '''
a: 1
b:
  c: 3
  d: 4
'''

data = load(document, Loader) # {'a': 1, 'b': {'c': 3, 'd': 4}}
dump(data)                    # 'a: 1\nb:\n  c: 3\n  d: 4\n'
