import ctrader_open_api.messages.OpenApiModelMessages_pb2 as OAModel
import json

# get payloadTypes
target_keys = filter(lambda i: i.startswith('PROTO_OA_'), dir(OAModel))
out = dict(map(lambda k: [k, getattr(OAModel, k)], target_keys))
with open('payloadTypes.json', 'w', encoding='utf-8') as f:
	json.dump(out, f, ensure_ascii=False, indent=2)

# get OAModel stuff
target_keys = filter(lambda i: i.startswith('ProtoOA'), dir(OAModel))
ones_with_keyval = filter(lambda k: hasattr(getattr(OAModel,k),'keys'), target_keys)
out = {}
for key in ones_with_keyval:
  prop = getattr(OAModel, key)
  out[key] = dict(zip(prop.keys(), prop.values()))
with open('OAModel.json', 'w', encoding='utf-8') as f:
	json.dump(out, f, ensure_ascii=False, indent=2)
