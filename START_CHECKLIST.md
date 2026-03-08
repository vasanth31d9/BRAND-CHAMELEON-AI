# ✅ Start Checklist - Before You Begin

## Pre-Flight Check

Before starting the servers, verify these items:

### 1. OpenAI API Key ✅

**Check:** `backend/.env` file has your OpenAI API key

```bash
# Windows
type backend\.env | findstr OPENAI_API_KEY

# Mac/Linux
cat backend/.env | grep OPENAI_API_KEY
```

**Should see:**
```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

**If missing:**
1. Go to: https://platform.openai.com/api-keys
2. Create new key
3. Add to `backend/.env`:
   ```
   OPENAI_API_KEY=sk-proj-your-key-here
   ```

---

### 2. OpenAI Credits ✅

**Check:** Your OpenAI account has credits

1. Go to: https://platform.openai.com/account/billing
2. Verify you have credits (minimum $5)

**If no credits:**
1. Add payment method
2. Add credits ($5 minimum)

---

### 3. Frontend Environment ✅

**Check:** `frontend/.env.local` exists

```bash
# Windows
if exist frontend\.env.local (echo Found) else (echo Missing)

# Mac/Linux
test -f frontend/.env.local && echo "Found" || echo "Missing"
```

**Should say:** `Found`

**If missing:** Already created! File exists at `frontend/.env.local`

---

### 4. Python Packages ✅

**Check:** All backend packages installed

```bash
cd backend
pip list | grep -E "fastapi|openai|uvicorn"
```

**Should see:**
- fastapi
- openai
- uvicorn

**If missing:**
```bash
cd backend
pip install -r requirements.txt
```

---

### 5. Node Packages ✅

**Check:** All frontend packages installed

```bash
cd frontend
npm list react
```

**Should see:** `react@18.x.x`

**If missing:**
```bash
cd frontend
npm install
```

---

## Quick Test (Optional)

Run the diagnostic script:

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

## Start Servers

### Terminal 1: Backend

```bash
cd backend
python main.py
```

**Wait for:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

✅ Backend ready!

---

### Terminal 2: Frontend

```bash
cd frontend
npm run dev
```

**Wait for:**
```
ready - started server on 0.0.0.0:3000
```

✅ Frontend ready!

---

## Verify Everything Works

### Test 1: Backend Health

Open browser: http://localhost:8000/health

**Should see:**
```json
{"status":"healthy"}
```

✅ Backend working!

---

### Test 2: API Documentation

Open browser: http://localhost:8000/docs

**Should see:** Swagger UI with API endpoints

✅ API docs working!

---

### Test 3: Frontend

Open browser: http://localhost:3000

**Should see:** Dashboard with sidebar

✅ Frontend working!

---

### Test 4: Generate Page

Open browser: http://localhost:3000/generate

**Should see:** Content generator interface

✅ Generate page working!

---

## Generate Your First Content

1. Enter text: "Write about AI in marketing"
2. Click: "Generate Content"
3. Wait: 5-10 seconds
4. See: Content for all platforms!

✅ Content generation working!

---

## Troubleshooting

### Backend won't start

**Error:** `ModuleNotFoundError`

**Fix:**
```bash
cd backend
pip install -r requirements.txt
```

---

### Frontend won't start

**Error:** `Cannot find module 'react'`

**Fix:**
```bash
cd frontend
npm install
```

---

### Content not generating

**Error:** "Failed to generate content"

**Fix:**
1. Check backend is running: http://localhost:8000/health
2. Check OpenAI key in `backend/.env`
3. Check OpenAI account has credits
4. Read: `CONTENT_GENERATION_TROUBLESHOOTING.md`

---

### "Invalid API key"

**Fix:**
1. Go to: https://platform.openai.com/api-keys
2. Create new key
3. Update `backend/.env`
4. Restart backend

---

### "You exceeded your current quota"

**Fix:**
1. Go to: https://platform.openai.com/account/billing
2. Add payment method
3. Add credits ($5 minimum)

---

## Success Indicators

When everything works:

- ✅ Backend terminal: `Application startup complete`
- ✅ Frontend terminal: `ready - started server`
- ✅ Health check: `{"status":"healthy"}`
- ✅ API docs: Swagger UI loads
- ✅ Dashboard: Loads without errors
- ✅ Generate page: Interface loads
- ✅ Content generation: Works in 5-10 seconds
- ✅ Multiple platforms: All show content
- ✅ Metrics: Display correctly
- ✅ Copy button: Works

---

## Quick Commands

```bash
# Check backend health
curl http://localhost:8000/health

# Check OpenAI key
cd backend
python -c "import os; from dotenv import load_dotenv; load_dotenv(); print('Found!' if os.getenv('OPENAI_API_KEY') else 'Missing!')"

# Check frontend env
cat frontend/.env.local

# Run diagnostic
cd backend
python test_setup.py

# Start backend
cd backend
python main.py

# Start frontend
cd frontend
npm run dev
```

---

## Documentation

- **[HOW_TO_START.md](HOW_TO_START.md)** - Simple start guide
- **[QUICK_FIX_GUIDE.md](QUICK_FIX_GUIDE.md)** - Quick fixes
- **[CONTENT_GENERATION_TROUBLESHOOTING.md](CONTENT_GENERATION_TROUBLESHOOTING.md)** - Detailed help
- **[DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)** - All docs

---

## Final Checklist

Before generating content:

- [ ] OpenAI API key in `backend/.env`
- [ ] OpenAI account has credits
- [ ] `frontend/.env.local` exists
- [ ] Backend packages installed
- [ ] Frontend packages installed
- [ ] Backend running on port 8000
- [ ] Frontend running on port 3000
- [ ] Health check works
- [ ] No errors in terminals
- [ ] No errors in browser console

---

**All checks passed? Start generating content!** 🚀

Open: http://localhost:3000/generate
