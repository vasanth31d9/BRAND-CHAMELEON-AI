import openai
from typing import Optional
import PyPDF2
import httpx
from bs4 import BeautifulSoup
import os

class ContentGenerator:
    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment variables")
        self.client = openai.OpenAI(api_key=api_key)
    
    async def extract_from_url(self, url: str) -> str:
        """Extract content from URL"""
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Remove script and style elements
            for script in soup(["script", "style"]):
                script.decompose()
            
            text = soup.get_text()
            lines = (line.strip() for line in text.splitlines())
            chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
            text = ' '.join(chunk for chunk in chunks if chunk)
            
            return text[:5000]  # Limit to 5000 chars
    
    async def extract_from_pdf(self, file) -> str:
        """Extract text from PDF"""
        pdf_reader = PyPDF2.PdfReader(file.file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()
        return text[:5000]
    
    async def transcribe_audio(self, file) -> str:
        """Transcribe audio using OpenAI Whisper"""
        transcript = self.client.audio.transcriptions.create(
            model="whisper-1",
            file=file.file
        )
        return transcript.text
    
    async def generate_for_platform(
        self, 
        source_content: str, 
        platform: str, 
        language: str = "en"
    ) -> str:
        """Generate optimized content for specific platform"""
        
        platform_prompts = {
            "linkedin": "Create a professional LinkedIn post with insights and value. Use line breaks for readability.",
            "twitter": "Create an engaging Twitter thread (max 280 chars per tweet). Start with a hook.",
            "instagram": "Create an Instagram caption with emojis and hashtags. Make it engaging and visual.",
            "tiktok": "Create a TikTok video script with hooks, transitions, and call-to-action.",
            "blog": "Create a comprehensive blog article with introduction, body, and conclusion.",
            "youtube": "Create a YouTube video script with intro, main content, and outro."
        }
        
        prompt = f"""
        {platform_prompts.get(platform, "Create engaging content")}
        
        Source content: {source_content}
        
        Language: {language}
        
        Make it authentic, engaging, and optimized for {platform}.
        """
        
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are an expert content creator who understands platform-specific optimization."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=1000
        )
        
        return response.choices[0].message.content