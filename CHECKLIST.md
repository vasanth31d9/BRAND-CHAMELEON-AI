# 📋 Setup Checklist - Brand Chameleon AI

## ✅ Step-by-Step Setup

### 1. Fix Frontend Errors (2 minutes)

- [ ] Open terminal in project root
- [ ] Run `fix-frontend.bat` (Windows) or `fix-frontend.sh` (Mac/Linux)
- [ ] Wait for "✅ SUCCESS! Dependencies installed" message
- [ ] Restart your editor (VS Code, etc.)
- [ ] Verify no errors in `frontend/app/generate/page.tsx`

**Alternative:**
```bash
cd frontend
npm install
```

### 2. Setup Backend (3 minutes)

- [ ] Open new terminal
- [ ] Navigate to backend: `cd backend`
- [ ] Create virtual environment: `python -m venv venv`
- [ ] Activate venv:
  - Windows: `venv\Scripts\activate`
  - Mac/Linux: `source venv/bin/activate`
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Copy `.env.example` to `.env`
- [ ] Add OpenAI API key to `.env`

### 3. Configure Environment (1 minute)

#### Frontend `.env.local`
- [ ] Copy `frontend/.env.example` to `frontend/.env.local`
- [ ] Verify URLs:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:8000
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```

#### Backend `.env`
- [ ] Copy `backend/.env.example` to `backend/.env`
- [ ] Add your API keys:
  - [ ] `OPENAI_API_KEY=sk-...`
  - [ ] `PINECONE_API_KEY=...` (optional)
  - [ ] `DATABASE_URL=...` (if using PostgreSQL)
  - [ ] `SECRET_KEY=...` (generate random string)

### 4. Start Application (1 minute)

#### Terminal 1 - Backend
- [ ] `cd backend`
- [ ] Activate venv (if not already)
- [ ] `uvicorn main:app --reload`
- [ ] See "Application startup complete" message
- [ ] Backend running at http://localhost:8000

#### Terminal 2 - Frontend
- [ ] `cd frontend`
- [ ] `npm run dev`
- [ ] See "Ready in X ms" message
- [ ] Frontend running at http://localhost:3000

### 5. Verify Installation (30 seconds)

- [ ] Open browser to http://localhost:3000
- [ ] See Brand Chameleon dashboard
- [ ] Navigate to Content Generator
- [ ] Navigate to Brand Voice
- [ ] Navigate to Trends
- [ ] All pages load without errors

### 6. Test Basic Functionality (2 minutes)

- [ ] Go to Content Generator
- [ ] Enter sample text
- [ ] Click "Generate Content"
- [ ] See generated content (or error if API key missing)
- [ ] Check API docs at http://localhost:8000/docs

## 🎯 Quick Verification

Run these commands to verify everything is set up:

```bash
# Check Node.js
node --version  # Should be v18+

# Check Python
python --version  # Should be 3.11+

# Check frontend dependencies
cd frontend && npm list react  # Should show react@18.3.0

# Check backend dependencies
cd backend && source venv/bin/activate && pip list | grep fastapi
```

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find module 'react'" | Run `fix-frontend.bat` or `npm install` |
| "No module named 'fastapi'" | Activate venv, run `pip install -r requirements.txt` |
| "Port 3000 in use" | Use `npm run dev -- -p 3001` |
| "Port 8000 in use" | Use `uvicorn main:app --reload --port 8001` |
| "OpenAI API key not found" | Add key to `backend/.env` |

## 📚 Next Steps

After setup is complete:

- [ ] Read [FEATURES.md](FEATURES.md) to learn all features
- [ ] Read [QUICK_START.md](QUICK_START.md) for usage guide
- [ ] Try generating your first content
- [ ] Train your brand voice
- [ ] Explore trending topics
- [ ] Check analytics dashboard

## 🎓 Learning Path

1. **Day 1**: Setup and basic content generation
2. **Day 2**: Train brand voice with your posts
3. **Day 3**: Explore trends and optimize content
4. **Day 4**: Use scheduler and analytics
5. **Day 5**: Invite team members and collaborate

## ✨ You're Done!

If all checkboxes are checked, you're ready to use Brand Chameleon AI!

Start creating amazing content across multiple platforms with AI assistance.

---

**Need Help?**
- [SOLUTION.md](SOLUTION.md) - Fix current errors
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues
- [START_HERE.md](START_HERE.md) - Getting started guide
