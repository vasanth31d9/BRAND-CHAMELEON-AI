from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from services.content_generator import ContentGenerator
from services.virality_predictor import ViralityPredictor

router = APIRouter()

class ContentInput(BaseModel):
    text: Optional[str] = None
    url: Optional[str] = None
    language: str = "en"
    platforms: List[str] = ["linkedin", "twitter", "instagram"]

class GeneratedContent(BaseModel):
    platform: str
    content: str
    virality_score: float
    hook_strength: float
    readability_score: float
    seo_score: float
    trending_keywords: List[str]

@router.post("/generate", response_model=List[GeneratedContent])
async def generate_content(input_data: ContentInput):
    """Generate multi-platform content from input"""
    try:
        generator = ContentGenerator()
        predictor = ViralityPredictor()
        
        # Extract content from input
        if input_data.text:
            source_content = input_data.text
        elif input_data.url:
            source_content = await generator.extract_from_url(input_data.url)
        else:
            raise HTTPException(status_code=400, detail="No input provided")
        
        # Generate content for each platform
        results = []
        for platform in input_data.platforms:
            content = await generator.generate_for_platform(
                source_content, 
                platform, 
                input_data.language
            )
            
            # Calculate virality metrics
            metrics = await predictor.predict(content, platform)
            
            results.append(GeneratedContent(
                platform=platform,
                content=content,
                virality_score=metrics["virality_score"],
                hook_strength=metrics["hook_strength"],
                readability_score=metrics["readability"],
                seo_score=metrics["seo_score"],
                trending_keywords=metrics["keywords"]
            ))
        
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    """Extract content from PDF"""
    try:
        generator = ContentGenerator()
        content = await generator.extract_from_pdf(file)
        return {"content": content, "status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/transcribe-voice")
async def transcribe_voice(file: UploadFile = File(...)):
    """Transcribe voice recording"""
    try:
        generator = ContentGenerator()
        text = await generator.transcribe_audio(file)
        return {"text": text, "status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
