# pip install fastapi[all]
# or
# pip install fastapi && pip install uvicorn[standard]
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def root():
	return {'message': 'Hello World'}


# uvicorn file:app --reload

'''auto generated docs
http://127.0.0.1:8000/docs
http://127.0.0.1:8000/redoc
'''