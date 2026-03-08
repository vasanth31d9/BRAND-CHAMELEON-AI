from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from services.trend_injector import TrendInjector

router = APIRouter()

class TrendingTopic(BaseModel):
    keyword: str
    platform: str
    volume: int
    sentiment: str
    relevance_score: float

@router.get("/trending", response_model=List[TrendingTopic])
async def get_trending_topics(niche: str = "general", limit: int = 10):
    """Get trending topics from multiple sources"""
    try:
        injector = TrendInjector()
        trends = await injector.fetch_trends(niche, limit)
        return trends
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/keywords")
async def suggest_keywords(content: str, platform: str):
    """Suggest trending keywords for content"""
    try:
        injector = TrendInjector()
        keywords = await injector.suggest_keywords(content, platform)
        return {
            "keywords": keywords,
            "hashtags": [f"#{k}" for k in keywords[:5]]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/reddit-trends")
async def get_reddit_trends(subreddit: str = "all"):
    """Get trending topics from Reddit"""
    try:
        injector = TrendInjector()
        trends = await injector.fetch_reddit_trends(subreddit)
        return {"trends": trends}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
