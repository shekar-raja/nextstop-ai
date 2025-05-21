from fastapi import APIRouter
from app.core import get_tube_status

router = APIRouter()

@router.get("/status")
def status():
    return get_tube_status()