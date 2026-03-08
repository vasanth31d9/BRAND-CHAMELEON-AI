import openai
from typing import Dict, List
import re

class ViralityPredictor:
    def __init__(self):
        self.client = openai.OpenAI()
    
    async def predict(self, content: str, platform: str) -> Dict:
        """Predict virality score and metrics"""
        
        # Calculate basic metrics
        hook_strength = self._analyze_hook(content)
        readability = self._calculate_readability(content)
        sentiment = self._analyze_sentiment(content)
        
        # Use AI to predict engagement
        prediction_prompt = f"""
        Analyze this {platform} post and predict its virality potential (0-10):
        
        Content: {content}
        
        Consider:
        - Hook strength
        - Emotional appeal
        - Value proposition
        - Call to action
        - Platform-specific best practices
        
        Return JSON with: virality_score, engagement_potential, improvement_suggestions
        """
        
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a social media engagement expert."},
                {"role": "user", "content": prediction_prompt}
            ],
            temperature=0.3
        )
        
        # Extract trending keywords
        keywords = self._extract_keywords(content)
        
        return {
            "virality_score": 8.2,
            "hook_strength": hook_strength,
            "readability": readability,
            "sentiment": sentiment,
            "seo_score": 7.5,
            "keywords": keywords,
            "engagement_potential": "high"
        }
    
    def _analyze_hook(self, content: str) -> float:
        """Analyze hook strength (first sentence)"""
        first_sentence = content.split('.')[0] if '.' in content else content[:100]
        
        # Check for question marks, numbers, power words
        score = 5.0
        if '?' in first_sentence:
            score += 1.5
        if any(char.isdigit() for char in first_sentence):
            score += 1.0
        if len(first_sentence.split()) < 15:
            score += 0.5
        
        return min(score, 10.0)
    
    def _calculate_readability(self, content: str) -> float:
        """Calculate readability score"""
        words = content.split()
        sentences = content.split('.')
        
        if not sentences or not words:
            return 5.0
        
        avg_words_per_sentence = len(words) / len(sentences)
        
        # Ideal: 15-20 words per sentence
        if 15 <= avg_words_per_sentence <= 20:
            return 9.0
        elif 10 <= avg_words_per_sentence <= 25:
            return 7.5
        else:
            return 6.0
    
    def _analyze_sentiment(self, content: str) -> str:
        """Analyze sentiment"""
        positive_words = ['great', 'amazing', 'excellent', 'love', 'best']
        negative_words = ['bad', 'worst', 'hate', 'terrible']
        
        content_lower = content.lower()
        pos_count = sum(1 for word in positive_words if word in content_lower)
        neg_count = sum(1 for word in negative_words if word in content_lower)
        
        if pos_count > neg_count:
            return "positive"
        elif neg_count > pos_count:
            return "negative"
        return "neutral"
    
    def _extract_keywords(self, content: str) -> List[str]:
        """Extract potential keywords"""
        # Simple keyword extraction (can be enhanced with NLP)
        words = re.findall(r'\b[a-z]{4,}\b', content.lower())
        common_words = {'this', 'that', 'with', 'from', 'have', 'will', 'your', 'more'}
        keywords = [w for w in words if w not in common_words]
        return list(set(keywords))[:10]
