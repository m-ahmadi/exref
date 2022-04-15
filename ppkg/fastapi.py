# pip install fastapi[all]
# or
# pip install fastapi && pip install uvicorn[standard]
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
@app.post()
@app.put()
@app.delete()
@app.options()
@app.head()
@app.patch()
@app.trace()
async def foo():
	return {}

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples



# basic
@app.get('/')
async def f():
	return {'message': 'Hello World'}

''' run
uvicorn file:app --reload
uvicorn file:app --app-dir foo --port 4456

auto generated docs
	http://127.0.0.1:8000/docs
	http://127.0.0.1:8000/redoc
'''



# path param
@app.get('/items/{item_id}')
async def f(item_id):
	return {'item_id': item_id}



# typed
@app.get('/items/{item_id}')
async def f(item_id: int):
	return {'item_id': item_id}



# order matters
@app.get('/users/me')
async def f():
	return {'user_id': 'the current user'}

@app.get('/users/{user_id}')
async def f(user_id: str):
	return {'user_id': user_id}



# path inside path param
@app.get('/files/{file_path:path}')
async def f(file_path: str):
	return {'file_path': file_path}
# http://127.0.0.1:8000/files/home/johndoe/myfile.txt
# 	{file_path: "home/johndoe/myfile.txt"}



# query param
@app.get('/items/')
async def f(a: int=0, b: int=10):
	return {'a': a, 'b': b}
# http://127.0.0.1:8000/items/?a=0&b=10
# 	{a:10, b:10}



# optional query param
from typing import Optional

@app.get('/items/{item_id}')
async def f(item_id: str, q: Optional[str]=None):
	if q:
		return {'item_id': item_id, 'q': q}
	return {'item_id': item_id}



# required query param (a non-path arg with no default val)
@app.get('/items/{item_id}')
async def f(item_id: str, needy: str):
	item = {'item_id': item_id, 'needy': needy}
	return item
# http://127.0.0.1:8000/items/foo             err
# http://127.0.0.1:8000/items/foo?needy=32    no err



# json body
from typing import Optional
from pydantic import BaseModel

class Item(BaseModel):
	name: str
	price: float
	tax: Optional[float] = None
 #tax: float | None = None  # py v3.10+
@app.post('/items/')
async def f(item: Item):
	return item

class Bod(BaseModel):
	items: list[tuple]
	action: int
@app.post('/foo')
async def f(bod: Bod):
	return bod

@app.post('/foo')
async def f(items: list[str]):
	return items # bodies of pure lists

@app.post('/foo')
async def f(items: dict[int, float]):
	return items # bodies of arbitrary dicts



# cors
from fastapi.middleware.cors import CORSMiddleware

origins = [
	'http://localhost.tiangolo.com',
	'https://localhost.tiangolo.com',
	'http://localhost',
	'http://localhost:8080',
]

app.add_middleware(
	CORSMiddleware,
 #allow_origins=origins,
	allow_origins=['*'],
	allow_credentials=True,
	allow_methods=['*'],
	allow_headers=['*'],
)