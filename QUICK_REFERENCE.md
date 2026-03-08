# ⚡ Quick Reference Card

## 🚀 Start Everything

### Windows (PowerShell)
```powershell
# Terminal 1 - Backend
cd backend
.\venv\Scripts\Activate.ps1
python main.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Mac/Linux
```bash
# Terminal 1 - Backend
cd backend
source venv/bin/activate
python main.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 🔑 Get API Keys

| Service | URL | What You Need |
|---------|-----|---------------|
| **OpenAI** | https://platform.openai.com/api-keys | API Key (sk-proj-...) |
| **Supabase** | https://supabase.com | Project URL + Anon Key + Service Key |
| **Pinecone** | https://www.pinecone.io | API Key + Environment + Index Name |
| Twitter | https://developer.twitter.com | API Key + Secret + Bearer Token |
| LinkedIn | https://linkedin.com/developers | Client ID + Secret |

---

## 📁 Add API Keys

### Frontend: `frontend/.env.local`
```env
OPENAI_API_KEY=sk-proj-xxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxx
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

### Backend: `backend/.env`
```env
OPENAI_API_KEY=sk-proj-xxxxx
DATABASE_URL=postgresql://postgres:password@localhost:5432/brandchameleon
SECRET_KEY=your-secret-key
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJxxxxx
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

---

## 👤 Create First User

### Method 1: Signup Page
1. Go to http://localhost:3000
2. Click "Sign Up Free" (bottom of sidebar)
3. Fill form and submit

### Method 2: Supabase Dashboard
1. Go to https://supabase.com
2. Open your project
3. Authentication → Users → Add User

### Method 3: API Call
```bash
curl -X POST http://localhost:8000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!","full_name":"Test User"}'
```

---

## 🌐 URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:3000 | Main app |
| **Backend** | http://localhost:8000 | API server |
| **API Docs** | http://localhost:8000/docs | Swagger UI |
| **Login** | http://localhost:3000/login | Login page |
| **Signup** | http://localhost:3000/signup | Signup page |
| **Settings** | http://localhost:3000/settings | Settings page |

---

## 🛠️ Common Commands

### Install Dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
pip install -r requirements.txt
```

### Create Virtual Environment (Backend)
```bash
# Windows
python -m venv venv
.\venv\Scripts\Activate.ps1

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### Run Setup Script
```bash
# Mac/Linux
chmod +x setup-env.sh
./setup-env.sh

# Windows
setup-env.bat
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Module not found | `npm install` or `pip install -r requirements.txt` |
| Port already in use | Kill process on port 3000/8000 |
| API key invalid | Check `.env` files for typos |
| Can't connect to backend | Make sure backend is running on port 8000 |
| Login not working | Check Supabase keys in `.env.local` |

---

## 📂 Project Structure

```
brand-chameleon/
├── frontend/
│   ├── .env.local          ← Frontend API keys
│   ├── app/
│   │   ├── login/          ← Login page
│   │   ├── signup/         ← Signup page
│   │   └── settings/       ← Settings page
│   └── components/
│       └── Sidebar.tsx     ← Has login/signup buttons
│
├── backend/
│   ├── .env                ← Backend API keys
│   ├── main.py             ← Start here
│   └── api/
│       └── routes/
│           └── auth.py     ← Authentication
│
├── setup-env.sh            ← Setup script (Mac/Linux)
├── setup-env.bat           ← Setup script (Windows)
└── COMPLETE_SETUP_GUIDE.md ← Full guide
```

---

## ✅ Setup Checklist

- [ ] Get OpenAI API key
- [ ] Create Supabase project
- [ ] Create Pinecone index
- [ ] Run setup script OR create `.env` files manually
- [ ] Install frontend dependencies (`npm install`)
- [ ] Install backend dependencies (`pip install -r requirements.txt`)
- [ ] Start backend server (`python main.py`)
- [ ] Start frontend server (`npm run dev`)
- [ ] Create first user (signup page)
- [ ] Test login
- [ ] Configure API keys in Settings page

---

## 🎯 Where Are Login Buttons?

**Location**: Bottom of left sidebar

```
┌─────────────────────┐
│  Settings           │
│  ─────────────────  │
│                     │
│  [👤 Sign In]       │ ← Click here
│  [✨ Sign Up Free]  │ ← Or here
│                     │
└─────────────────────┘
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `COMPLETE_SETUP_GUIDE.md` | Full setup instructions |
| `API_KEYS_REQUIRED.md` | Detailed API key guide |
| `LOGIN_SIGNUP_READY.md` | Auth system overview |
| `WHERE_ARE_LOGIN_BUTTONS.md` | Visual guide to buttons |
| `QUICK_START.md` | Quick start guide |
| `TROUBLESHOOTING.md` | Common issues |

---

## 🆘 Need Help?

1. Read `COMPLETE_SETUP_GUIDE.md`
2. Check browser console (F12)
3. Check backend terminal for errors
4. Verify API keys in `.env` files
5. Make sure both servers are running

---

## 💡 Pro Tips

- Use different API keys for dev and production
- Keep `.env` files out of Git (already in `.gitignore`)
- Check http://localhost:8000/docs for API documentation
- Use browser DevTools (F12) to debug frontend issues
- Check backend terminal for API errors
- Rotate API keys every 3-6 months

---

**Quick Start**: Run `setup-env.bat` (Windows) or `./setup-env.sh` (Mac/Linux) to set up everything! 🚀
