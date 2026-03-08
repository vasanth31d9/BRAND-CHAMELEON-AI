# 🚀 START HERE - Brand Chameleon AI

## ⚡ Super Quick Start (3 minutes)

### Step 1: Fix the Error (30 seconds)
```bash
# Windows users:
fix-frontend.bat

# Mac/Linux users:
chmod +x fix-frontend.sh
./fix-frontend.sh
```

### Step 2: Start Backend (1 minute)
```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

### Step 3: Start Frontend (30 seconds)
Open a NEW terminal:
```bash
cd frontend
npm run dev
```

### Step 4: Open Browser
Visit: **http://localhost:3000**

## 🎯 What You Get

✅ **Dashboard** - See your content performance
✅ **Content Generator** - Create posts for 6+ platforms
✅ **Brand Voice** - AI learns your writing style
✅ **Trends** - Discover hot topics
✅ **Scheduler** - Post at optimal times
✅ **Analytics** - Track engagement
✅ **Team** - Collaborate with others

## 🔧 Current Issue: "Cannot find module 'react'"

### Why?
Dependencies aren't installed yet.

### Fix?
Run `fix-frontend.bat` (Windows) or `fix-frontend.sh` (Mac/Linux)

Or manually:
```bash
cd frontend
npm install
```

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `HOW_TO_FIX_ERRORS.md` | Fix the current error |
| `QUICK_START.md` | Get started quickly |
| `SETUP.md` | Detailed setup |
| `FEATURES.md` | All features |
| `TROUBLESHOOTING.md` | Common issues |
| `ARCHITECTURE.md` | System design |
| `DEPLOYMENT.md` | Deploy to production |

## 🎓 First Time Setup Checklist

- [ ] Run `fix-frontend.bat` or `npm install` in frontend
- [ ] Create `backend/.env` from `backend/.env.example`
- [ ] Add OpenAI API key to `backend/.env`
- [ ] Start backend: `uvicorn main:app --reload`
- [ ] Start frontend: `npm run dev`
- [ ] Visit http://localhost:3000

## 🔑 Required API Keys

1. **OpenAI** - For content generation
   - Get from: https://platform.openai.com/api-keys
   - Add to: `backend/.env`

2. **Pinecone** (Optional) - For brand voice
   - Get from: https://www.pinecone.io/
   - Add to: `backend/.env`

## 💡 Quick Tips

- Backend runs on port 8000
- Frontend runs on port 3000
- API docs: http://localhost:8000/docs
- Dark theme by default
- All data is local (no cloud yet)

## 🆘 Need Help?

1. Check `TROUBLESHOOTING.md`
2. Check `HOW_TO_FIX_ERRORS.md`
3. Look at backend logs
4. Check browser console (F12)

## 🎉 You're Ready!

Once you see the dashboard at http://localhost:3000, you're all set!

Try:
1. Go to Content Generator
2. Enter an idea
3. Click "Generate Content"
4. See AI create posts for multiple platforms

---

**Next Steps:**
- Read `FEATURES.md` to see all capabilities
- Check `QUICK_START.md` for detailed walkthrough
- See `DEPLOYMENT.md` when ready to deploy

Happy creating! 🚀
