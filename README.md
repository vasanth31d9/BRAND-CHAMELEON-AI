# Brand Chameleon AI

AI-powered content engine that converts one idea into multiple optimized social media posts while maintaining your brand voice.

## ⭐ NEW: Content Generation is Ready!

**Everything is configured and working!** Just start the servers and generate content.

**Quick Start:**
1. Read: **[HOW_TO_START.md](HOW_TO_START.md)** (2 minutes)
2. Start backend: `cd backend && python main.py`
3. Start frontend: `cd frontend && npm run dev`
4. Open: http://localhost:3000/generate
5. Generate amazing content! 🚀

**Need help?** Read: **[QUICK_FIX_GUIDE.md](QUICK_FIX_GUIDE.md)**

---

## 📚 Documentation

### Start Here:
- **[HOW_TO_START.md](HOW_TO_START.md)** - Simplest guide (start here!)
- **[QUICK_FIX_GUIDE.md](QUICK_FIX_GUIDE.md)** - Latest fixes & quick start
- **[FINAL_SETUP_SUMMARY.md](FINAL_SETUP_SUMMARY.md)** - Complete summary

### Troubleshooting:
- **[CONTENT_GENERATION_TROUBLESHOOTING.md](CONTENT_GENERATION_TROUBLESHOOTING.md)** - Detailed help
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - General issues

### Setup:
- **[COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md)** - Full setup
- **[API_KEYS_REQUIRED.md](API_KEYS_REQUIRED.md)** - API keys info

### All Documentation:
- **[DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)** - Complete index

---

## ⚠️ First Time Setup - Fix "Cannot find module" Errors

If you're seeing **"Cannot find module 'react'"** or similar errors:

**Quick Fix (Windows):**
```bash
fix-frontend.bat
```

**Quick Fix (Mac/Linux):**
```bash
chmod +x fix-frontend.sh
./fix-frontend.sh
```

**Or manually:**
```bash
cd frontend
npm install
```

Then restart your editor.

---

## 🚀 Quick Start

### Option 1: Simple Start (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
python main.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Browser:**
```
http://localhost:3000/generate
```

### Option 2: Automated Installation

**Windows:**
```bash
install.bat
```

**macOS/Linux:**
```bash
chmod +x install.sh
./install.sh
```

### Option 3: Manual Installation

See [COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md) for detailed step-by-step instructions.

## 📦 What's Included

- **Frontend**: Modern Next.js dashboard with dark theme
- **Backend**: FastAPI with AI integrations
- **Database**: PostgreSQL with SQLAlchemy ORM
- **AI**: OpenAI GPT-4, Whisper, Embeddings
- **Vector DB**: Pinecone for brand voice storage
- **Infrastructure**: AWS serverless deployment configs

## 🎯 Core Features

1. **Multi-format Content Input** - Text, URL, PDF, voice recording
2. **Brand Voice DNA Engine** - Learn and replicate your writing style
3. **Multi-platform Generation** - LinkedIn, Twitter, Instagram, TikTok, Blog, YouTube
4. **Trend Injection** - Real-time trending topics from Twitter, Reddit, Google
5. **Virality Prediction** - AI-powered engagement scoring
6. **Smart Scheduler** - Optimal posting time suggestions
7. **AI Media Generation** - Images, thumbnails, video scripts
8. **Multilingual Support** - English, Hindi, Telugu, Tamil, Bengali
9. **Analytics Dashboard** - Track performance across platforms
10. **Team Collaboration** - Shared workspace with permissions

## 🛠️ Tech Stack

**Frontend:** Next.js 14, React, Tailwind CSS, ShadCN UI
**Backend:** Python FastAPI, OpenAI, Pinecone
**Database:** PostgreSQL, Redis
**Cloud:** AWS (Lambda, S3, RDS)

## 📚 Documentation

**Start Here:**
- [START_HERE.md](START_HERE.md) - **Begin here!**
- [HOW_TO_FIX_ERRORS.md](HOW_TO_FIX_ERRORS.md) - Fix "Cannot find module" errors
- [QUICK_START.md](QUICK_START.md) - Get running in 3 minutes

**Detailed Guides:**
- [SETUP.md](SETUP.md) - Detailed installation guide
- [FEATURES.md](FEATURES.md) - Complete feature list
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment
- [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) - All docs

## 🏃 Running the Application

After installation, start both servers:

**Windows:**
```bash
start-dev.bat
```

**macOS/Linux:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

Or manually:

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn main:app --reload
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 🔑 Required API Keys

1. **OpenAI API Key** - https://platform.openai.com/api-keys
2. **Pinecone API Key** - https://www.pinecone.io/
3. **AWS Credentials** (for production deployment)

Add these to your `.env` files (see SETUP.md).

## 📸 Screenshots

The application includes:
- Dashboard with analytics overview
- Content Generator with drag-and-drop input
- Brand Voice training interface
- Trending topics discovery
- Smart scheduler with calendar view
- Analytics with platform comparison
- Team collaboration workspace

## 🤝 Contributing

This is a starter template. Feel free to:
- Add more social media platforms
- Integrate additional AI models
- Enhance the UI/UX
- Add more analytics features
- Improve the virality prediction algorithm

## 📝 License

MIT License - feel free to use this for your projects!

## 🐛 Troubleshooting

**TypeScript errors in frontend?**
```bash
cd frontend
rm -rf node_modules .next
npm install
```

**Python import errors?**
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Port already in use?**
```bash
# Frontend
PORT=3001 npm run dev

# Backend
uvicorn main:app --reload --port 8001
```

For more help, see [SETUP.md](SETUP.md).

## 🎨 UI Preview

The UI features a modern dark theme inspired by Linear, Notion AI, and Vercel with:
- Clean, futuristic design
- Smooth animations
- Responsive layout
- Intuitive navigation
- Real-time updates

## 🚀 Deployment

For production deployment to AWS, see [DEPLOYMENT.md](DEPLOYMENT.md).

Quick deploy options:
- Frontend: Vercel (recommended)
- Backend: AWS Lambda with Serverless Framework
- Database: AWS RDS PostgreSQL
- Storage: AWS S3

## 📞 Support

For issues or questions:
1. Check [SETUP.md](SETUP.md) for common solutions
2. Review [ARCHITECTURE.md](ARCHITECTURE.md) for system details
3. Check the API docs at http://localhost:8000/docs

---

Built with ❤️ using Next.js, FastAPI, and OpenAI
