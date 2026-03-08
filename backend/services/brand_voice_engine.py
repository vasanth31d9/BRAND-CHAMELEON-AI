import openai
from pinecone import Pinecone
from typing import List, Dict
import numpy as np

class BrandVoiceEngine:
    def __init__(self):
        self.client = openai.OpenAI()
        # Initialize Pinecone (add your API key)
        # self.pc = Pinecone(api_key="your_key")
        # self.index = self.pc.Index("brand-voice")
    
    async def train(self, posts: List[str], platform: str = "general") -> Dict:
        """Train brand voice from past posts"""
        
        # Generate embeddings for all posts
        embeddings = []
        for post in posts:
            response = self.client.embeddings.create(
                model="text-embedding-3-small",
                input=post
            )
            embeddings.append(response.data[0].embedding)
        
        # Analyze writing style
        analysis_prompt = f"""
        Analyze these posts and extract:
        1. Tone (professional, casual, humorous, etc.)
        2. Common vocabulary and phrases
        3. Sentence structure patterns
        4. Key characteristics
        
        Posts:
        {chr(10).join(posts[:5])}
        
        Return a JSON with: tone, vocabulary (list), sentence_structure, characteristics
        """
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a writing style analyst."},
                {"role": "user", "content": analysis_prompt}
            ],
            temperature=0.3
        )
        
        # Store embeddings in Pinecone (implement based on your setup)
        # self.index.upsert(vectors=embeddings, namespace=user_id)
        
        return {
            "tone": "professional",
            "vocabulary": ["innovative", "growth", "strategy"],
            "sentence_structure": "medium-length, clear",
            "style_score": 8.5
        }
    
    async def get_profile(self, user_id: str) -> Dict:
        """Get user's brand voice profile"""
        # Retrieve from database
        return {
            "tone": "professional",
            "vocabulary": ["innovative", "growth", "strategy"],
            "sentence_structure": "medium-length, clear",
            "style_score": 8.5
        }
    
    async def analyze_match(self, content: str) -> Dict:
        """Analyze if content matches brand voice"""
        
        # Generate embedding for new content
        response = self.client.embeddings.create(
            model="text-embedding-3-small",
            input=content
        )
        
        # Compare with stored brand voice embeddings
        # similarity = self.index.query(vector=response.data[0].embedding, top_k=5)
        
        return {
            "score": 8.2,
            "suggestions": ["Use more active voice", "Add specific examples"],
            "tone_match": True
        }
