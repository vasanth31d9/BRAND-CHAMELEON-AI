# 🚀 How to Start - Simple Guide

## Quick Start (2 Terminals)

### Terminal 1: Backend

```bash
cd backend
python main.py
```

**Wait for this message:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

✅ Backend is ready!

---

### Terminal 2: Frontend

```bash
cd frontend
npm run dev
```

**Wait for this message:**
```
ready - started server on 0.0.0.0:3000
```

✅ Frontend is ready!

---

## Open Your Browser

Go to: **http://localhost:3000/generate**

---

## Generate Content

1. Type something like: **"Write about AI in marketing"**
2. Click: **"Generate Content"**
3. Wait 5-10 seconds
4. See content for all platforms! 🎉

---

## That's It!

You're now generating AI-powered content for:
- LinkedIn
- Twitter
- Instagram
- TikTok
- Blog
- YouTube

---

## If It Doesn't Work

### Check Backend is Running

Open: http://localhost:8000/health

Should show: `{"status":"healthy"}`

### Check OpenAI Credits

Go to: https://platform.openai.com/account/billing

Make sure you have credits ($5 minimum)

### Run Diagnostic

**Windows:**
```bash
test-content-generation.bat
```

**Mac/Linux:**
```bash
chmod +x test-content-generation.sh
./test-content-generation.sh
```

---

## Need More Help?

Read these in order:

1. **QUICK_FIX_GUIDE.md** - Latest fixes
2. **CONTENT_GENERATION_TROUBLESHOOTING.md** - Detailed help
3. **COMPLETE_SETUP_GUIDE.md** - Full setup

---

**That's all you need to know to get started!** 🚀

Just run those 2 commands in 2 terminals and you're good to go! ✨
