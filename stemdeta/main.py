from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import pickle

loaded_model = pickle.load(open('finalized_model.sav', 'rb'))

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/predict")
def root(age=0, sex=0, bmi=0, smoker=0, region=0, children=0):
    if (age == 0 or bmi == 0):
        return {"prediction": 0}
    else:
        test=loaded_model.predict([[age,sex,bmi,smoker,region,children]])
        return {"prediction": test[0]}

if __name__ == "__main__":
  uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)