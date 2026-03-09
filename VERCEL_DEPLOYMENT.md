# 🚀 Deploy to Vercel - Complete Guide

## Overview

This guide will help you deploy your Brand Chameleon AI project to Vercel (frontend) and Railway/Render (backend).

**Architecture:**
- Frontend (Next.js) → Vercel
- Backend (FastAPI) → Railway or Render

---

## Part 1: Deploy Frontend to Vercel

### Step 1: Push to GitHub

First, make sure your code is on GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Recommended)

1. Go to: https://vercel.com/new
2. Click: "Import Git Repository"
3. Select your GitHub repository: `brand-chameleon-ai`
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_API_URL` = `YOUR_BACKEND_URL` (we'll get this in Part 2)
   - Add: `NEXT_PUBLIC_SUPABASE_URL` = `your_supabase_url` (optional)
   - Add: `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `your_supabase_key` (optional)

6. Click: "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd frontend
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? brand-chameleon-ai
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add NEXT_PUBLIC_API_URL
# Enter your backend URL when prompted

# Deploy to production
vercel --prod
```

### Step 3: Get Your Vercel URL

After deployment, you'll get a URL like:
```
https://brand-chameleon-ai.vercel.app
```

---

## Part 2: Deploy Backend to Railway

### Why Railway?
- Free tier available
- Easy Python deployment
- Automatic HTTPS
- Environment variables support

### Step 1: Create Railway Account

1. Go to: https://railway.app
2. Sign up with GitHub
3. Click: "New Project"

### Step 2: Deploy Backend

1. Click: "Deploy from GitHub repo"
2. Select: `brand-chameleon-ai`
3. Click: "Add variables"
4. Add environment variables:
   ```
   OPENAI_API_KEY=your_openai_key
   DATABASE_URL=your_database_url (optional)
   PINECONE_API_KEY=your_pinecone_key (optional)
   ```

5. Railway will auto-detect Python and deploy

### Step 3: Configure Backend

1. Go to Settings → Networking
2. Click: "Generate Domain"
3. Copy your backend URL (e.g., `https://your-app.railway.app`)

### Step 4: Update CORS in Backend

Update `backend/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://brand-chameleon-ai.vercel.app",  # Add your Vercel URL
        "https://*.vercel.app"  # Allow all Vercel preview deployments
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Push changes:
```bash
git add backend/main.py
git commit -m "Update CORS for production"
git push
```

Railway will auto-deploy the update.

### Step 5: Update Frontend Environment Variable

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Update `NEXT_PUBLIC_API_URL` to your Railway URL
5. Redeploy: Deployments → Latest → Redeploy

---

## Alternative: Deploy Backend to Render

### Step 1: Create Render Account

1. Go to: https://render.com
2. Sign up with GitHub

### Step 2: Create Web Service

1. Click: "New +"
2. Select: "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** brand-chameleon-ai-backend
   - **Root Directory:** `backend`
   - **Environment:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`

5. Add Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_key
   DATABASE_URL=your_database_url (optional)
   PINECONE_API_KEY=your_pinecone_key (optional)
   ```

6. Click: "Create Web Service"

### Step 3: Get Backend URL

After deployment, you'll get a URL like:
```
https://brand-chameleon-ai-backend.onrender.com
```

Use this URL in your Vercel environment variables.

---

## Part 3: Final Configuration

### Update Frontend Environment Variables

In Vercel dashboard:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url (optional)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key (optional)
```

### Update Backend CORS

In `backend/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-app.vercel.app",
        "https://*.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Redeploy Both

1. Push changes to GitHub
2. Railway/Render will auto-deploy backend
3. Vercel will auto-deploy frontend

---

## Part 4: Test Your Deployment

### Test Frontend

1. Go to: `https://your-app.vercel.app`
2. Navigate to: `/generate`
3. Try generating content

### Test Backend

1. Go to: `https://your-backend-url.railway.app/docs`
2. You should see the API documentation
3. Test the `/health` endpoint

### Test Integration

1. Open frontend in browser
2. Open DevTools (F12) → Console
3. Try generating content
4. Check for any CORS or API errors

---

## Quick Deployment Commands

### Deploy Frontend to Vercel

```bash
cd frontend
vercel --prod
```

### Update Backend (Railway)

```bash
git add .
git commit -m "Update backend"
git push
# Railway auto-deploys
```

### Update Frontend Environment Variables

```bash
vercel env add NEXT_PUBLIC_API_URL production
# Enter your backend URL
vercel --prod
```

---

## Troubleshooting

### Frontend shows "Failed to fetch"

**Issue:** Frontend can't reach backend

**Fix:**
1. Check `NEXT_PUBLIC_API_URL` in Vercel environment variables
2. Make sure backend is deployed and running
3. Check CORS settings in backend

### Backend shows CORS error

**Issue:** Backend blocking frontend requests

**Fix:**
1. Add your Vercel URL to CORS `allow_origins`
2. Include `https://*.vercel.app` for preview deployments
3. Redeploy backend

### OpenAI API errors

**Issue:** API key not configured

**Fix:**
1. Add `OPENAI_API_KEY` to Railway/Render environment variables
2. Restart backend service
3. Check backend logs for errors

### Build fails on Vercel

**Issue:** Dependencies or build errors

**Fix:**
1. Check build logs in Vercel dashboard
2. Make sure `package.json` is in `frontend/` directory
3. Verify all dependencies are listed
4. Try building locally: `cd frontend && npm run build`

---

## Cost Breakdown

### Free Tier

**Vercel (Frontend):**
- ✅ Free for personal projects
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN

**Railway (Backend):**
- ✅ $5 free credit per month
- ✅ Enough for development/testing
- ⚠️ May need paid plan for production

**Render (Backend Alternative):**
- ✅ Free tier available
- ⚠️ Spins down after inactivity
- ⚠️ Slower cold starts

### Paid Options

**Vercel Pro:** $20/month
- More bandwidth
- Team features
- Advanced analytics

**Railway Pro:** $5-20/month
- More resources
- Better performance
- No sleep mode

**Render Paid:** $7/month
- Always-on service
- Better performance
- More resources

---

## Environment Variables Summary

### Frontend (Vercel)

```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url (optional)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key (optional)
```

### Backend (Railway/Render)

```env
OPENAI_API_KEY=sk-proj-your-key-here
DATABASE_URL=postgresql://... (optional)
PINECONE_API_KEY=your_pinecone_key (optional)
SUPABASE_URL=your_supabase_url (optional)
SUPABASE_KEY=your_supabase_key (optional)
```

---

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway/Render
- [ ] Environment variables configured
- [ ] CORS updated in backend
- [ ] Frontend API URL updated
- [ ] Both services redeployed
- [ ] Tested content generation
- [ ] Checked for errors in logs
- [ ] Verified HTTPS working

---

## Your Live URLs

After deployment, you'll have:

**Frontend:** `https://brand-chameleon-ai.vercel.app`
**Backend:** `https://your-app.railway.app`
**API Docs:** `https://your-app.railway.app/docs`

---

## Next Steps

1. Deploy frontend to Vercel
2. Deploy backend to Railway
3. Configure environment variables
4. Update CORS settings
5. Test the live application
6. Share your link! 🎉

---

**Need help?** Check the logs in Vercel and Railway dashboards for detailed error messages.

**Ready to deploy?** Start with Part 1 above! 🚀
