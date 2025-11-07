import chromadb
import os 
from dotenv import load_dotenv
from typing import Union
from fastapi import FastAPI
import requests


app = FastAPI()
load_dotenv()

chroma_key = os.getenv("CHROMA_API_KEY")
tenant_key =os.getenv("TENANT_KEY")

client = chromadb.CloudClient(
  api_key= f"{chroma_key}",
  tenant=f"{tenant_key}",
  database='CourseCompanion'
)



@app.get("/")
async def root():
    return {"message": "Yo get excited!"}















