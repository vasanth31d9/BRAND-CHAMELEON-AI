# Quick Start - Brand Chameleon AI

## Automated Installation (Recommended)

### Windows
```bash
install.bat
```

### Mac/Linux
```bash
chmod +x install.sh
./install.sh
```

## Manual Installation

### 1. Install Frontend
```bash
cd frontend
npm install
```

### 2. Install Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configure Environment
```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your API keys.

### 4. Run Application

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### 5. Open Browser
Visit: http://localhost:3000

## What You'll See

- **Dashboard**: Overview of your content performance
- **Content Generator**: Create multi-platform posts
- **Brand Voice**: Train AI on your writing style
- **Trends**: Discover trending topics
- **Scheduler**: Schedule posts optimally
- **Analytics**: Track performance metrics
- **Team**: Collaborate with team members

## Required API Keys

1. **OpenAI API Key** - For content generation
   - Get it from: https://platform.openai.com/api-keys
   
2. **Pinecone API Key** - For brand voice embeddings
   - Get it from: https://www.pinecone.io/

3. **PostgreSQL Database** - For data storage
   - Install locally or use cloud service

## Need Help?

- See `SETUP.md` for detailed setup instructions
- See `TROUBLESHOOTING.md` for common issues
- See `ARCHITECTURE.md` for system design
- See `DEPLOYMENT.md` for production deployment
