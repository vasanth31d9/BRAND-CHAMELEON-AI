# 🗄️ Database Setup - Quick Summary

## What Databases Do We Use?

Brand Chameleon AI uses **TWO databases**:

### 1. PostgreSQL (via Supabase) 🐘
**Purpose**: User data, posts, analytics, authentication

**What it stores**:
- User accounts and profiles
- Generated posts
- Analytics data
- Settings and preferences

**Why**: Structured data, relationships, authentication

### 2. Pinecone 📌
**Purpose**: Brand voice embeddings (AI vectors)

**What it stores**:
- Vector embeddings of your writing style
- Semantic similarity data
- Brand voice patterns

**Why**: Fast similarity search for matching your brand voice

---

## 🚀 Quick Setup

### Step 1: Get Supabase (2 minutes)
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create project: `brand-chameleon`
4. Copy: URL + Anon Key + Service Key

### Step 2: Get Pinecone (2 minutes)
1. Go to https://www.pinecone.io
2. Sign up for free
3. Create index:
   - Name: `brand-chameleon`
   - Dimensions: `1536`
   - Metric: `cosine`
4. Copy: API Key + Environment

### Step 3: Add to .env Files

**Frontend** (`frontend/.env.local`):
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxx

# Pinecone
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

**Backend** (`backend/.env`):
```env
# Supabase
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJxxxxx

# Pinecone
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

---

## 💡 How They Work Together

```
User uploads past posts
        ↓
Saved to PostgreSQL (structured data)
        ↓
OpenAI creates embeddings (vectors)
        ↓
Vectors saved to Pinecone
        ↓
When generating new content:
  1. Query Pinecone for similar posts
  2. Use similar posts as context
  3. Generate content matching your style
  4. Save to PostgreSQL
```

---

## 💰 Cost

Both are **FREE** for development and small projects!

| Service | Free Tier | Enough For |
|---------|-----------|------------|
| Supabase | 500MB, 50K users | 1000+ users |
| Pinecone | 100K vectors | 1000+ users |

---

## ✅ Checklist

- [ ] Create Supabase project
- [ ] Copy Supabase URL and keys
- [ ] Create Pinecone index (dimensions: 1536)
- [ ] Copy Pinecone API key and environment
- [ ] Add all keys to `.env` files
- [ ] Test connection (run servers)

---

## 🆘 Need Help?

Read these files:
- `DATABASE_ARCHITECTURE.md` - Full technical details
- `COMPLETE_SETUP_GUIDE.md` - Step-by-step setup
- `API_KEYS_REQUIRED.md` - All API keys explained

---

## 🎯 Summary

**You need 3 services**:
1. ✅ OpenAI - AI generation
2. ✅ Supabase - User data & auth
3. ✅ Pinecone - Brand voice vectors

All three have free tiers! 🎉
