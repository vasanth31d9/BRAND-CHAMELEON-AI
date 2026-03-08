# 🔧 Fix: Content Not Generating

## Quick Fix Steps

### 1. Check OpenAI API Key in Backend

**File:** `backend/.env`

Make sure this line exists with your actual key:
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

**Important:**
- No quotes around the key
- No spaces before or after the `=`
- Key should start with `sk-proj-` or `sk-`

### 2. Restart Backend Server

After adding the API key, restart the backend:

```bash
# Stop the backend (Ctrl+C)

# Start it again
cd backend
python main.py
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

### 3. Test Backend is Working

Open browser: http://localhost:8000/docs

You should see the API documentation (Swagger UI).

### 4. Run Diagnostic Script

```bash
cd backend
python test_setup.py
```

This will check:
- ✅ Python version
- ✅ Environment variables
- ✅ Required packages
- ✅ OpenAI API connection
- ✅ FastAPI server

### 5. Test Content Generation

1. Go to http://localhost:3000/generate
2. Enter some text (e.g., "Write about AI in marketing")
3. Click "Generate Content"
4. Wait 5-10 seconds
5. Content should appear!

---

## What I Fixed

I updated the frontend generate page to:
1. ✅ Actually call the backend API (was using mock data before)
2. ✅ Show real generated content from OpenAI
3. ✅ Display virality scores and metrics
4. ✅ Show error messages if something fails
5. ✅ Allow copying generated content

---

## Common Issues & Solutions

### Issue 1: "Failed to generate content"

**Cause:** Backend not running or wrong API URL

**Fix:**
```bash
# Check backend is running
curl http://localhost:8000/health

# Should return: {"status":"healthy"}
```

### Issue 2: "Invalid API key"

**Cause:** OpenAI API key is wrong or missing

**Fix:**
1. Go to https://platform.openai.com/api-keys
2. Create new key or copy existing one
3. Add to `backend/.env`:
   ```env
   OPENAI_API_KEY=sk-proj-your-key-here
   ```
4. Restart backend

### Issue 3: "Model 'gpt-4' does not exist"

**Cause:** Your OpenAI account doesn't have GPT-4 access

**Fix:** Edit `backend/services/content_generator.py`

Change line 67:
```python
# From:
model="gpt-4",

# To:
model="gpt-3.5-turbo",
```

Then restart backend.

### Issue 4: "You exceeded your current quota"

**Cause:** No credits in OpenAI account

**Fix:**
1. Go to https://platform.openai.com/account/billing
2. Add payment method
3. Add credits ($5 minimum)

---

## Test API Directly

### Using Swagger UI

1. Go to http://localhost:8000/docs
2. Find `POST /api/content/generate`
3. Click "Try it out"
4. Enter:
```json
{
  "text": "Write about AI in marketing",
  "language": "en",
  "platforms": ["linkedin", "twitter"]
}
```
5. Click "Execute"
6. Check response

### Using curl

```bash
curl -X POST http://localhost:8000/api/content/generate \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Write about AI in marketing",
    "language": "en",
    "platforms": ["linkedin"]
  }'
```

---

## Checklist

Before generating content, make sure:

- [ ] Backend is running (`python main.py`)
- [ ] Frontend is running (`npm run dev`)
- [ ] OpenAI API key in `backend/.env`
- [ ] API key is valid (test at platform.openai.com)
- [ ] OpenAI account has credits
- [ ] Health check works: http://localhost:8000/health
- [ ] No errors in backend terminal
- [ ] No errors in browser console (F12)

---

## Files to Check

1. **`backend/.env`** - OpenAI API key here
2. **`frontend/.env.local`** - API URL here
3. **`backend/services/content_generator.py`** - Model name
4. **`backend/main.py`** - CORS settings

---

## Success Indicators

When it works, you'll see:

1. ✅ Click "Generate Content"
2. ✅ Button shows "Generating..."
3. ✅ AI Orb animates
4. ✅ After 5-10 seconds, content appears
5. ✅ Shows content for multiple platforms
6. ✅ Shows virality scores
7. ✅ Can copy content

---

## Still Not Working?

1. Run diagnostic: `python backend/test_setup.py`
2. Check backend logs (terminal where backend runs)
3. Check browser console (F12 → Console)
4. Read: `CONTENT_GENERATION_TROUBLESHOOTING.md`

---

## Quick Commands

```bash
# Test backend health
curl http://localhost:8000/health

# Run diagnostic
cd backend
python test_setup.py

# Restart backend
cd backend
python main.py

# Restart frontend
cd frontend
npm run dev

# Test OpenAI key
cd backend
python -c "import os; from dotenv import load_dotenv; load_dotenv(); print(os.getenv('OPENAI_API_KEY'))"
```

---

**Most likely issue:** OpenAI API key not in `backend/.env` file! 🔑

Add it, restart backend, and try again! 🚀
