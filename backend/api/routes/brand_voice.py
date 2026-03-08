from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List
from services.brand_voice_engine import BrandVoiceEngine

router = APIRouter()

class BrandVoiceTraining(BaseModel):
    posts: List[str]
    platform: str

class BrandVoiceProfile(BaseModel):
    tone: str
    vocabulary: List[str]
    sentence_structure: str
    style_score: float

@router.post("/train")
async def train_brand_voice(training_data: BrandVoiceTraining):
    """Train brand voice from past posts"""
    try:
        engine = BrandVoiceEngine()
        profile = await engine.train(training_data.posts, training_data.platform)
        return {
            "status": "success",
            "profile": profile,
            "embeddings_stored": True
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/upload-posts")
async def upload_posts(files: List[UploadFile] = File(...)):
    """Upload past posts for brand voice training"""
    try:
        engine = BrandVoiceEngine()
        posts = []
        for file in files:
            content = await file.read()
            posts.append(content.decode())
        
        profile = await engine.train(posts)
        return {
            "status": "success",
            "posts_processed": len(posts),
            "profile": profile
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/profile", response_model=BrandVoiceProfile)
async def get_brand_voice_profile(user_id: str):
    """Get user's brand voice profile"""
    try:
        engine = BrandVoiceEngine()
        profile = await engine.get_profile(user_id)
        return profile
    except Exception as e:
        raise HTTPException(status_code=404, detail="Profile not found")

@router.post("/analyze")
async def analyze_content(content: str):
    """Analyze if content matches brand voice"""
    try:
        engine = BrandVoiceEngine()
        analysis = await engine.analyze_match(content)
        return {
            "match_score": analysis["score"],
            "suggestions": analysis["suggestions"],
            "tone_match": analysis["tone_match"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
