import ctrader_open_api.messages.OpenApiModelMessages_pb2 as OAModel
import json

# get OAModel stuff
target_keys = filter(lambda i: i.startswith('ProtoOA'), dir(OAModel))
ones_with_keyval = filter(lambda k: hasattr(getattr(OAModel,k),'keys'), target_keys)
out = {}
for key in ones_with_keyval:
	prop = getattr(OAModel, key)
	name = key.split('ProtoOA')[1]
	out[name] = dict(zip(prop.keys(), prop.values()))
with open('OAModel.json', 'w', encoding='utf-8') as f:
	json.dump(out, f, ensure_ascii=False, indent=2)


# get OAModel in custom format and without "PayloadType"
# (meant to be used alongside below "get payloadTypes in custom format")
target_keys = filter(lambda i: i.startswith('ProtoOA'), dir(OAModel))
ones_with_keyval = filter(lambda k: hasattr(getattr(OAModel,k),'keys'), target_keys)
out = {}
for key in ones_with_keyval:
	prop = getattr(OAModel, key)
	name = key.split('ProtoOA')[1]
	out[name] = dict(zip(prop.keys(), prop.values()))
del out['PayloadType']
with open('OAModel.custom.json', 'w', encoding='utf-8') as f:
	json.dump(out, f, ensure_ascii=False, indent=2)


# get payloadTypes in custom format
excp = {'SLTP':'SLTP', 'PNL':'PnL'}
out = {'req': {}, 'res': {}, 'event': {}}
for key, val in OAModel.ProtoOAPayloadType.items():
	parts = key.split('PROTO_OA_')[1].split('_')
	type = parts[-1].lower()
	name = ''.join([excp[i] if i in excp else i.title() for i in parts[:-1]]) # PascalCase (proper)
	# name = ''.join(map(str.title, parts[:-1]))  # PascalCase (naive)
	# name = '_'.join(parts[:-1])                 # UPPER_SNAKE_CASE
	# name = '_'.join(map(str.lower, parts[:-1])) # snake_case
	out[type][name] = val
out['common'] = {'Message': 5, 'ErrorRes': 50, 'HeartbeatEvent': 51}
with open('payloadTypes.custom.json', 'w', encoding='utf-8') as f:
	json.dump(out, f, ensure_ascii=False, indent=2)
