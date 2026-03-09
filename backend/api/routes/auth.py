from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class SignupRequest(BaseModel):
    email: str
    password: str
    name: str

@router.post("/login")
async def login(request: LoginRequest):
    """Login endpoint"""
    # TODO: Implement actual authentication with Supabase
    return {
        "access_token": "mock_token",
        "token_type": "bearer",
        "user": {
            "email": request.email,
            "name": "User"
        }
    }

@router.post("/signup")
async def signup(request: SignupRequest):
    """Signup endpoint"""
    # TODO: Implement actual signup with Supabase
    return {
        "access_token": "mock_token",
        "token_type": "bearer",
        "user": {
            "email": request.email,
            "name": request.name
        }
    }

@router.get("/me")
async def get_current_user():
    """Get current user endpoint"""
    # TODO: Implement actual user retrieval
    return {
        "email": "user@example.com",
        "name": "User"
    }
