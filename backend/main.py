from fastapi import FastAPI
from app.api import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="NextStop.AI Server")

# CORS (adjust origin in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, # Replace with frontend domain in prod
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router)