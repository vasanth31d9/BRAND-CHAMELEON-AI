from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import content, brand_voice, trends, analytics, auth
from dotenv import load_dotenv
import os
load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY not found in environment variables")

print("API key loaded:", OPENAI_API_KEY is not None)
app = FastAPI(
    title="Brand Chameleon AI API",
    description="AI-powered content generation platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(content.router, prefix="/api/content", tags=["content"])
app.include_router(brand_voice.router, prefix="/api/brand-voice", tags=["brand-voice"])
app.include_router(trends.router, prefix="/api/trends", tags=["trends"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])

@app.get("/")
async def root():
    return {"message": "Brand Chameleon AI API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
