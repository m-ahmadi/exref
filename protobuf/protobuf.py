import compiledproto_pb2 # pip install protobuf

# api
# https://googleapis.dev/python/protobuf/latest

# guide - basic
# https://protobuf.dev/getting-started/pythontutorial/

# guide - full
# https://protobuf.dev/reference/python/python-generated/

# reflection and utility modules
from google.protobuf import json_format
from google.protobuf import descriptor
from google.protobuf import descriptor_pool
from google.protobuf import runtime_version
from google.protobuf import symbol_database
from google.protobuf.internal import builder

# gencode & runtime versions
'''
https://protobuf.dev/support/cross-version-runtime-guarantee/

protobuf compiler and py pkg must correspond to same publish date
	protoc --version  # 31.1
	pip show protobuf # 6.32.0

look up publish date of a version for both
```js
// `protoc`

url = 'https://api.github.com/repos/protocolbuffers/protobuf/releases?per_page=100&page=1';
r = await (await fetch(url)).json();
a = r.map(i=> [i.tag_name, i.published_at]);

// `protobuf` pypi pkg
url = 'https://pypi.org/pypi/protobuf/json';
r = await (await fetch(url)).json();
b = Object.keys(r.releases).map(k => [k, r.releases[k][0].upload_time]);

// find out proper compiler ver for py pkg ver of 3.20.1
b.find(i=>i[0]==='3.20.1')          // ['3.20.1', '2022-04-22T02:03:01']   py pkg ver
a.find(i=>i[1].includes('2022-04')) // ['v3.20.1', '2022-04-22T02:27:33Z'] proper compiler ver
```
'''

# make sure gencode & runtime are ok with each other (cuz cross-versioning is not always fatal)
# 1. import compiled file (that's it, nothing else)
import compiledproto_pb2
# 2. run script, if no error/warrning, then runtime is fine
# why?
# cuz below code is inserted by `protoc` in the gencode automatically
from google.protobuf import runtime_version as rtv
rtv.ValidateProtobufRuntimeVersion(
	rtv.Domain.PUBLIC,
	6, 31, 1, '', # generated version: major, minor, patch, suffix
	'myprotofile.proto' # the proto file path
)
google.protobuf.runtime_version.ValidateProtobufRuntimeVersion(
	gen_domain, # which domain the gencode comes from (likely PUBLIC)
	gen_major,  # major version of generated code
	gen_minor,  # minor version
	gen_patch,  # patch version
	gen_suffix, # suffix like '-dev' or '-rc1'
	location    # the .proto file name or its path
)

# Message
# https://googleapis.dev/python/protobuf/latest/google/protobuf/message.html
google.protobuf.message.Message.
	ByteSize()
	Clear()
	ClearExtension(extension_handle)
	ClearField(field_name)
	CopyFrom(other_msg)
	DiscardUnknownFields()
	HasExtension(extension_handle)
	HasField(field_name)
	IsInitialized()
	ListFields()
	MergeFrom(other_msg)
	MergeFromString(serialized)
	ParseFromString(serialized)
	SerializePartialToString(**kwargs)
	SerializeToString(**kwargs)
	SetInParent()
	UnknownFields()
	WhichOneof(oneof_group)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# import compiled .proto file
import compiled_pb2

# basic
Message = compiled_pb2.Message
msg = Message()
msg.id = 1234
msg.name = 'jafar'
msg2 = Message(**{'id': 1234, 'name': 'javar'})
msg == msg2 # True



# encode & decode
Message = compiled_pb2.Message
msg = Message()
# encode
buffer = msg.SerializeToString() # err if msg fields not properly set
buffer = msg.SerializePartialToString() # encodes anyway
# decode
msg2 = msg.FromString(buffer)
# decode another way
msg3 = Message()
msg3.ParseFromString(buffer)
msg == msg2 == msg3 # True



# convert
Message = compiled_pb2.Message
msg = Message()
# to json|dict
json_str = json_format.MessageToJson(msg)
py_dict = json_format.MessageToDict(msg)
# from json|dict
msg2 = json_format.Parse(json_str, Message())
msg3 = json_format.ParseDict(py_dict, Message())
# so
msg == msg2 == msg3 # True



# extend proto file in python
msg = compiled_pb2.Message()
phone = msg.phones.add()
phone.number = '555-4321'
phone.type = compiled_pb2.Person.PHONE_TYPE_HOME
