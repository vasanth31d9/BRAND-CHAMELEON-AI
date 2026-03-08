# 🚀 Complete Setup Guide - API Keys, Backend & First User

## 📋 Table of Contents
1. [Get API Keys](#1-get-api-keys)
2. [Configure Frontend](#2-configure-frontend)
3. [Configure Backend](#3-configure-backend)
4. [Run Backend Server](#4-run-backend-server)
5. [Run Frontend Server](#5-run-frontend-server)
6. [Create First User](#6-create-first-user)
7. [Test Everything](#7-test-everything)

---

## 1. Get API Keys

### Essential Keys (Required)

#### A. OpenAI API Key
1. Go to https://platform.openai.com/signup
2. Sign up or log in
3. Go to https://platform.openai.com/api-keys
4. Click "Create new secret key"
5. Copy the key (starts with `sk-proj-...`)
6. **Save it somewhere safe!** (You can't see it again)

**Cost**: Pay-as-you-go (~$5-20/month for testing)

#### B. Supabase (Database & Auth)
1. Go to https://supabase.com
2. Sign up with GitHub
3. Click "New Project"
4. Fill in:
   - Project name: `brand-chameleon`
   - Database password: (create a strong password)
   - Region: Choose closest to you
5. Wait 2-3 minutes for setup
6. Go to **Settings** → **API**
7. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (keep secret!)

**Cost**: Free (50,000 monthly active users)

#### C. Pinecone (Vector Database)
1. Go to https://www.pinecone.io
2. Sign up for free account
3. Click "Create Index"
4. Fill in:
   - Index name: `brand-chameleon`
   - Dimensions: `1536` (for OpenAI embeddings)
   - Metric: `cosine`
   - Pod Type: `Starter` (free tier)
5. Wait for index to be ready
6. Go to **API Keys** section
7. Copy these values:
   - **API Key**: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
   - **Environment**: `us-east-1-aws` (or your region)

**Cost**: Free tier (100K vectors, 1 pod)

**Purpose**: Stores brand voice embeddings for similarity matching

### Optional Keys (For Full Features)

#### C. Twitter API (Optional)
1. Go to https://developer.twitter.com/en/portal/dashboard
2. Create a project and app
3. Generate API keys

#### D. LinkedIn API (Optional)
1. Go to https://www.linkedin.com/developers/apps
2. Create an app
3. Get Client ID and Secret

---

## 2. Configure Frontend

### Step 1: Create Environment File

```bash
cd frontend
```

Create a file named `.env.local`:

**Windows (PowerShell):**
```powershell
New-Item -Path .env.local -ItemType File
```

**Mac/Linux:**
```bash
touch .env.local
```

### Step 2: Add Your API Keys

Open `frontend/.env.local` and paste:

```env
# ============================================
# ESSENTIAL - Required for app to work
# ============================================

# OpenAI API Key (for AI content generation)
OPENAI_API_KEY=sk-proj-YOUR_OPENAI_KEY_HERE

# Supabase (for authentication and database)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Pinecone (for vector embeddings - brand voice)
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon

# ============================================
# OPTIONAL - For additional features
# ============================================

# Twitter API (optional - for Twitter integration)
TWITTER_API_KEY=your_twitter_key_here
TWITTER_API_SECRET=your_twitter_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here

# LinkedIn API (optional - for LinkedIn integration)
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Replace the placeholder values with your actual keys!**

### Step 3: Install Dependencies

```bash
npm install
```

---

## 3. Configure Backend

### Step 1: Create Environment File

```bash
cd ../backend
```

Create a file named `.env`:

**Windows (PowerShell):**
```powershell
New-Item -Path .env -ItemType File
```

**Mac/Linux:**
```bash
touch .env
```

### Step 2: Add Backend Configuration

Open `backend/.env` and paste:

```env
# ============================================
# ESSENTIAL - Required for backend
# ============================================

# OpenAI API Key
OPENAI_API_KEY=sk-proj-YOUR_OPENAI_KEY_HERE

# Database Configuration
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/brandchameleon

# Secret Key (generate a random string)
SECRET_KEY=your-super-secret-key-change-this-in-production

# Supabase
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Pinecone (for vector embeddings - brand voice)
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon

# ============================================
# OPTIONAL
# ============================================

# Twitter API
TWITTER_API_KEY=your_twitter_key_here
TWITTER_API_SECRET=your_twitter_secret_here

# LinkedIn API
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

# Environment
ENVIRONMENT=development
DEBUG=True
```

### Step 3: Install Python Dependencies

**Windows:**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## 4. Run Backend Server

### Option A: Using Python Directly

```bash
# Make sure you're in the backend folder
cd backend

# Activate virtual environment (if not already active)
# Windows:
.\venv\Scripts\Activate.ps1
# Mac/Linux:
source venv/bin/activate

# Run the server
python main.py
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

### Option B: Using Uvicorn

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Test Backend is Running

Open browser: http://localhost:8000/docs

You should see the FastAPI Swagger documentation.

---

## 5. Run Frontend Server

Open a **NEW terminal** (keep backend running):

```bash
cd frontend
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- Local:        http://localhost:3000
```

### Test Frontend is Running

Open browser: http://localhost:3000

You should see the Brand Chameleon dashboard!

---

## 6. Create First User

### Method 1: Using the Signup Page (Recommended)

1. **Open browser**: http://localhost:3000
2. **Click "Sign Up Free"** at bottom of sidebar
3. **Fill in the form**:
   - Full Name: `Your Name`
   - Email: `your.email@example.com`
   - Password: `YourSecurePassword123!`
   - Confirm Password: `YourSecurePassword123!`
   - ✅ Check "I agree to terms"
4. **Click "Create Account"**
5. **Check your email** for verification (if Supabase email is enabled)

### Method 2: Using Supabase Dashboard

1. Go to https://supabase.com
2. Open your project
3. Click **Authentication** in sidebar
4. Click **Users** tab
5. Click **Add User** button
6. Fill in:
   - Email: `your.email@example.com`
   - Password: `YourSecurePassword123!`
   - Auto Confirm User: ✅ (check this)
7. Click **Create User**

### Method 3: Using Backend API

```bash
# Using curl (Mac/Linux/Git Bash)
curl -X POST http://localhost:8000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your.email@example.com",
    "password": "YourSecurePassword123!",
    "full_name": "Your Name"
  }'

# Using PowerShell (Windows)
Invoke-RestMethod -Uri "http://localhost:8000/api/auth/signup" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"email":"your.email@example.com","password":"YourSecurePassword123!","full_name":"Your Name"}'
```

---

## 7. Test Everything

### Test 1: Login

1. Go to http://localhost:3000/login
2. Enter your email and password
3. Click "Sign In"
4. You should be redirected to dashboard
5. Check sidebar - you should see your profile at bottom

### Test 2: Settings Page

1. Click "Settings" in sidebar
2. Go to **API Keys** tab
3. Enter your API keys:
   - OpenAI API Key
   - Supabase URL
   - Supabase Anon Key
4. Click "Save Changes"

### Test 3: Generate Content

1. Click "Generate Content" in sidebar
2. Try generating a post
3. If OpenAI key is configured, it should work!

### Test 4: Backend API

Open: http://localhost:8000/docs

Try these endpoints:
- `GET /api/health` - Check if backend is running
- `POST /api/auth/login` - Test login
- `GET /api/content/generate` - Test content generation

---

## 🎯 Quick Start Commands

### Start Everything (Two Terminals)

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # or .\venv\Scripts\Activate.ps1 on Windows
python main.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Stop Everything

Press `Ctrl+C` in both terminals

---

## 📁 File Structure

```
brand-chameleon/
├── frontend/
│   ├── .env.local          ← Your frontend API keys
│   ├── app/
│   │   ├── login/
│   │   ├── signup/
│   │   └── settings/
│   └── package.json
│
├── backend/
│   ├── .env                ← Your backend API keys
│   ├── main.py
│   ├── requirements.txt
│   └── api/
│       └── routes/
│           └── auth.py
│
└── README.md
```

---

## 🔐 Security Checklist

- [ ] Never commit `.env` or `.env.local` files to Git
- [ ] Use strong passwords (12+ characters)
- [ ] Keep API keys secret
- [ ] Use different keys for development and production
- [ ] Enable 2FA on Supabase and OpenAI accounts
- [ ] Rotate keys every 3-6 months

---

## 🐛 Troubleshooting

### "Module not found" errors

**Frontend:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
```

### "Connection refused" errors

- Make sure backend is running on port 8000
- Make sure frontend is running on port 3000
- Check firewall settings

### "Invalid API key" errors

- Double-check your API keys in `.env` files
- Make sure there are no extra spaces
- Make sure keys start with correct prefix:
  - OpenAI: `sk-proj-...`
  - Supabase: `https://...` and `eyJ...`

### "Database connection failed"

- Check Supabase project is running
- Verify DATABASE_URL is correct
- Check internet connection

### Can't create user

- Check Supabase project is active
- Verify email is valid format
- Check password meets requirements (8+ chars)
- Look at browser console for errors (F12)

---

## 📚 Next Steps

After setup is complete:

1. ✅ **Customize your profile** - Go to Settings → Profile
2. ✅ **Add team members** - Go to Team page
3. ✅ **Train brand voice** - Go to Brand Voice page
4. ✅ **Generate content** - Go to Generate page
5. ✅ **Check analytics** - Go to Analytics page
6. ✅ **Schedule posts** - Go to Scheduler page

---

## 🆘 Need Help?

### Documentation Files:
- `API_KEYS_REQUIRED.md` - Detailed API key guide
- `AUTHENTICATION_COMPLETE.md` - Auth system docs
- `QUICK_START.md` - Quick start guide
- `TROUBLESHOOTING.md` - Common issues

### Check Logs:
- **Frontend**: Browser console (F12)
- **Backend**: Terminal where backend is running

### Test Endpoints:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/api/health

---

## ✅ Setup Complete!

You should now have:
- ✅ API keys configured
- ✅ Backend running on port 8000
- ✅ Frontend running on port 3000
- ✅ First user created
- ✅ Able to login and use the app

**Enjoy your Brand Chameleon AI platform!** 🚀✨
