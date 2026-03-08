# 🔧 Content Generation Troubleshooting Guide

## Issue: Content Not Generating

If you click "Generate Content" but nothing happens or you get an error, follow these steps:

---

## ✅ Step 1: Check Backend is Running

### Test Backend Health

Open your browser and go to:
```
http://localhost:8000/health
```

**Expected Response:**
```json
{
  "status": "healthy"
}
```

**If you get an error:**
- Backend is not running
- Start it with: `cd backend && python main.py`

---

## ✅ Step 2: Check OpenAI API Key

### Verify Key is in .env File

**Backend** (`backend/.env`):
```bash
# Check if this line exists and has your actual key
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

### Test OpenAI Connection

Create a test file `backend/test_openai.py`:

```python
import os
from dotenv import load_dotenv
import openai

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
print(f"API Key found: {api_key[:20]}..." if api_key else "No API key found!")

try:
    client = openai.OpenAI(api_key=api_key)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": "Say hello"}],
        max_tokens=10
    )
    print("✅ OpenAI connection successful!")
    print(f"Response: {response.choices[0].message.content}")
except Exception as e:
    print(f"❌ OpenAI connection failed: {e}")
```

Run it:
```bash
cd backend
python test_openai.py
```

**Common Issues:**
- ❌ "No API key found!" → Key not in `.env` file
- ❌ "Invalid API key" → Wrong key or typo
- ❌ "Insufficient quota" → No credits in OpenAI account
- ❌ "Model not found" → Try changing `gpt-4` to `gpt-3.5-turbo`

---

## ✅ Step 3: Check Frontend API URL

### Verify Environment Variable

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Check Browser Console

1. Open browser (http://localhost:3000/generate)
2. Press F12 to open DevTools
3. Go to Console tab
4. Try generating content
5. Look for errors

**Common Errors:**
- `Failed to fetch` → Backend not running
- `CORS error` → Backend CORS not configured
- `404 Not Found` → Wrong API URL
- `500 Internal Server Error` → Check backend terminal for errors

---

## ✅ Step 4: Test API Directly

### Using Browser

Go to:
```
http://localhost:8000/docs
```

This opens Swagger UI where you can test the API directly.

1. Find `/api/content/generate` endpoint
2. Click "Try it out"
3. Enter test data:
```json
{
  "text": "Write about AI in marketing",
  "language": "en",
  "platforms": ["linkedin", "twitter"]
}
```
4. Click "Execute"
5. Check response

### Using curl (Terminal)

```bash
curl -X POST http://localhost:8000/api/content/generate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Write about AI in marketing",
    "language": "en",
    "platforms": ["linkedin", "twitter"]
  }'
```

**Expected Response:**
```json
[
  {
    "platform": "linkedin",
    "content": "Generated content here...",
    "virality_score": 8.5,
    "hook_strength": 85.0,
    "readability_score": 90.0,
    "seo_score": 78.0,
    "trending_keywords": ["AI", "marketing"]
  }
]
```

---

## ✅ Step 5: Check Backend Logs

### Look at Terminal Where Backend is Running

When you click "Generate Content", you should see logs like:
```
INFO:     127.0.0.1:xxxxx - "POST /api/content/generate HTTP/1.1" 200 OK
```

**If you see errors:**
- `openai.error.AuthenticationError` → Invalid API key
- `openai.error.RateLimitError` → Too many requests or no credits
- `openai.error.APIError` → OpenAI service issue
- `ModuleNotFoundError` → Missing Python package

---

## ✅ Step 6: Verify Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

**Required packages:**
- `openai>=1.10.0`
- `fastapi`
- `uvicorn`
- `python-dotenv`
- `httpx`
- `beautifulsoup4`
- `PyPDF2`

---

## ✅ Step 7: Check Model Availability

### Try Different Models

If `gpt-4` doesn't work, edit `backend/services/content_generator.py`:

```python
# Change this line:
model="gpt-4",

# To this:
model="gpt-3.5-turbo",
```

**Model Options:**
- `gpt-4` - Best quality, requires GPT-4 access
- `gpt-3.5-turbo` - Good quality, cheaper, always available
- `gpt-4-turbo-preview` - Latest GPT-4 model

---

## 🔍 Common Error Messages

### "Failed to generate content. Make sure the backend is running"

**Cause:** Frontend can't reach backend

**Fix:**
1. Check backend is running: `http://localhost:8000/health`
2. Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
3. Restart frontend: `npm run dev`

### "Invalid API key"

**Cause:** OpenAI API key is wrong or missing

**Fix:**
1. Check `backend/.env` has `OPENAI_API_KEY=sk-proj-...`
2. Verify key at https://platform.openai.com/api-keys
3. Make sure no extra spaces or quotes
4. Restart backend after changing `.env`

### "You exceeded your current quota"

**Cause:** No credits in OpenAI account

**Fix:**
1. Go to https://platform.openai.com/account/billing
2. Add payment method
3. Add credits ($5 minimum)

### "Model 'gpt-4' does not exist"

**Cause:** Your account doesn't have GPT-4 access

**Fix:**
1. Change model to `gpt-3.5-turbo` in `content_generator.py`
2. Or request GPT-4 access from OpenAI

### "CORS policy error"

**Cause:** Frontend and backend on different origins

**Fix:**
1. Check `main.py` has correct CORS settings
2. Make sure frontend URL is in `allow_origins`
3. Restart backend

---

## 🧪 Quick Test Checklist

Run these tests in order:

- [ ] Backend health check: `http://localhost:8000/health`
- [ ] API docs accessible: `http://localhost:8000/docs`
- [ ] OpenAI key in `backend/.env`
- [ ] Frontend API URL in `frontend/.env.local`
- [ ] Both servers running (backend + frontend)
- [ ] Browser console shows no errors
- [ ] Test API in Swagger UI works
- [ ] OpenAI account has credits

---

## 💡 Quick Fixes

### Restart Everything

```bash
# Stop both servers (Ctrl+C)

# Terminal 1 - Backend
cd backend
source venv/bin/activate  # or .\venv\Scripts\Activate.ps1
python main.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Clear Cache

```bash
# Frontend
cd frontend
rm -rf .next
npm run dev

# Browser
# Press Ctrl+Shift+R (or Cmd+Shift+R on Mac)
```

### Reinstall Dependencies

```bash
# Backend
cd backend
pip install --upgrade -r requirements.txt

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Still Not Working?

### Collect Debug Information

1. **Backend logs** (copy from terminal)
2. **Browser console errors** (F12 → Console tab)
3. **Network tab** (F12 → Network tab → look for failed requests)
4. **Your .env files** (remove actual API keys before sharing)

### Check These Files

1. `backend/.env` - Has OpenAI key?
2. `frontend/.env.local` - Has API URL?
3. `backend/main.py` - CORS configured?
4. `backend/services/content_generator.py` - Model name correct?

---

## ✅ Success Indicators

When everything works, you should see:

1. ✅ Backend terminal: `INFO: Application startup complete`
2. ✅ Frontend terminal: `ready started server on 0.0.0.0:3000`
3. ✅ Health check: `{"status":"healthy"}`
4. ✅ Generate button: Shows "Generating..." then content appears
5. ✅ No errors in browser console

---

## 🆘 Get Help

If still stuck:
1. Check `COMPLETE_SETUP_GUIDE.md`
2. Check `API_KEYS_REQUIRED.md`
3. Look at backend terminal for error messages
4. Check browser console (F12) for frontend errors
5. Test API directly in Swagger UI (http://localhost:8000/docs)

---

**Most Common Issue:** OpenAI API key not in `backend/.env` or backend not running! 🔑
