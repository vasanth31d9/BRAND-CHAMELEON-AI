# 🔑 API Keys Required for Brand Chameleon AI

## Required API Keys

### 1. **OpenAI API Key** (Essential)
**Purpose:** AI content generation, text analysis, brand voice training

**Get it from:** https://platform.openai.com/api-keys

**Steps:**
1. Go to https://platform.openai.com/signup
2. Create an account or sign in
3. Go to API Keys section
4. Click "Create new secret key"
5. Copy the key (starts with `sk-...`)

**Cost:** Pay-as-you-go (GPT-3.5: $0.002/1K tokens, GPT-4: $0.03/1K tokens)

**Environment Variable:**
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

---

### 2. **Supabase** (Authentication & Database)
**Purpose:** User authentication, database storage, real-time features

**Get it from:** https://supabase.com

**Steps:**
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create a new project
4. Go to Settings → API
5. Copy the keys

**Cost:** Free tier (50,000 monthly active users, 500MB database)

**Environment Variables:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### 3. **Pinecone** (Vector Database - Essential)
**Purpose:** Store brand voice embeddings for similarity matching

**Get it from:** https://www.pinecone.io

**Steps:**
1. Go to https://www.pinecone.io
2. Sign up for free account
3. Click "Create Index"
4. Fill in:
   - Index name: `brand-chameleon`
   - Dimensions: `1536` (for OpenAI text-embedding-3-small)
   - Metric: `cosine`
   - Pod Type: `Starter` (free tier)
5. Wait for index to be ready (1-2 minutes)
6. Go to API Keys section
7. Copy the API key and environment

**Cost:** Free tier (100,000 vectors, 1 pod)

**Environment Variables:**
```env
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

**Why needed:** Pinecone stores vector embeddings of your brand voice, allowing the AI to match your writing style when generating content.

---

### 4. **Clerk** (Alternative Authentication - Optional)
**Purpose:** User authentication with social logins

**Get it from:** https://clerk.com

**Steps:**
1. Go to https://clerk.com
2. Sign up
3. Create application
4. Copy API keys from Dashboard

**Cost:** Free tier (10,000 monthly active users)

**Environment Variables:**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```

---

### 4. **Twitter API** (Optional - For Twitter Integration)
**Purpose:** Post to Twitter, fetch trends, analyze tweets

**Get it from:** https://developer.twitter.com

**Steps:**
1. Go to https://developer.twitter.com/en/portal/dashboard
2. Create a project and app
3. Generate API keys

**Cost:** Free tier available (Basic: $100/month for more features)

**Environment Variables:**
```env
TWITTER_API_KEY=xxxxxxxxxxxxxxxxxxxxx
TWITTER_API_SECRET=xxxxxxxxxxxxxxxxxxxxx
TWITTER_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxx
TWITTER_ACCESS_SECRET=xxxxxxxxxxxxxxxxxxxxx
TWITTER_BEARER_TOKEN=xxxxxxxxxxxxxxxxxxxxx
```

---

### 5. **LinkedIn API** (Optional - For LinkedIn Integration)
**Purpose:** Post to LinkedIn, analyze engagement

**Get it from:** https://www.linkedin.com/developers/

**Steps:**
1. Go to https://www.linkedin.com/developers/apps
2. Create an app
3. Request API access
4. Get credentials

**Cost:** Free

**Environment Variables:**
```env
LINKEDIN_CLIENT_ID=xxxxxxxxxxxxx
LINKEDIN_CLIENT_SECRET=xxxxxxxxxxxxx
```

---

### 6. **Replicate API** (Alternative AI - Optional)
**Purpose:** Alternative to OpenAI for AI generation

**Get it from:** https://replicate.com

**Steps:**
1. Go to https://replicate.com
2. Sign up
3. Go to Account → API tokens
4. Create token

**Cost:** Pay-as-you-go (cheaper than OpenAI)

**Environment Variables:**
```env
REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxxx
```

---

### 7. **Anthropic Claude API** (Alternative AI - Optional)
**Purpose:** Alternative AI for content generation

**Get it from:** https://console.anthropic.com

**Steps:**
1. Go to https://console.anthropic.com
2. Sign up for API access
3. Create API key

**Cost:** Pay-as-you-go

**Environment Variables:**
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

---

### 8. **Vercel Analytics** (Optional - For Analytics)
**Purpose:** Track page views, user behavior

**Get it from:** Automatic with Vercel deployment

**Cost:** Free

**Environment Variables:**
```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxxxxxxxxxxxx
```

---

### 9. **Sentry** (Optional - Error Tracking)
**Purpose:** Track errors and performance

**Get it from:** https://sentry.io

**Steps:**
1. Go to https://sentry.io
2. Create account
3. Create project
4. Copy DSN

**Cost:** Free tier (5,000 errors/month)

**Environment Variables:**
```env
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxxxxxxxxx@sentry.io/xxxxx
```

---

### 10. **Resend** (Email Service)
**Purpose:** Send transactional emails, notifications

**Get it from:** https://resend.com

**Steps:**
1. Go to https://resend.com
2. Sign up
3. Create API key
4. Verify domain

**Cost:** Free tier (100 emails/day)

**Environment Variables:**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## 📋 Priority List

### Must Have (Essential)
1. ✅ **OpenAI API Key** - Core AI functionality
2. ✅ **Supabase** - Authentication & Database
3. ✅ **Pinecone** - Vector database for brand voice embeddings

### Should Have (Recommended)
3. 🔶 **Resend** - Email notifications
4. 🔶 **Vercel Analytics** - Usage tracking

### Nice to Have (Optional)
5. ⭐ **Twitter API** - Social media integration
6. ⭐ **LinkedIn API** - Professional network integration
7. ⭐ **Sentry** - Error monitoring

---

## 🔧 Setup Instructions

### Step 1: Create `.env.local` file in frontend folder

```bash
cd frontend
touch .env.local
```

### Step 2: Add your keys

```env
# Essential
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Optional
RESEND_API_KEY=re_xxxxxxxxxxxxx
TWITTER_API_KEY=xxxxxxxxxxxxxxxxxxxxx
LINKEDIN_CLIENT_ID=xxxxxxxxxxxxx

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Step 3: Create `.env` file in backend folder

```bash
cd backend
touch .env
```

```env
# Essential
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
DATABASE_URL=postgresql://user:password@localhost:5432/brandchameleon
SECRET_KEY=your-secret-key-here-generate-random-string

# Optional
TWITTER_API_KEY=xxxxxxxxxxxxxxxxxxxxx
LINKEDIN_CLIENT_ID=xxxxxxxxxxxxx
```

---

## 🔒 Security Best Practices

1. **Never commit `.env` files to Git**
   ```bash
   # Already in .gitignore
   .env
   .env.local
   .env.production
   ```

2. **Use different keys for development and production**

3. **Rotate keys regularly** (every 3-6 months)

4. **Use environment variables in deployment**
   - Vercel: Settings → Environment Variables
   - Railway: Variables tab
   - Render: Environment section

5. **Restrict API key permissions**
   - Only enable necessary scopes
   - Set usage limits
   - Monitor usage

---

## 💰 Cost Estimation (Monthly)

### Minimal Setup (Free Tier)
- OpenAI: ~$5-20 (pay-as-you-go)
- Supabase: Free
- Resend: Free (100 emails/day)
- **Total: $5-20/month**

### Full Setup (With Integrations)
- OpenAI: ~$20-50
- Supabase: Free
- Twitter API: $100 (if using premium)
- Resend: Free
- Sentry: Free
- **Total: $20-150/month**

### Production Scale
- OpenAI: $100-500
- Supabase: $25 (Pro plan)
- Twitter API: $100
- Resend: $20
- Sentry: $26
- **Total: $271-671/month**

---

## 🚀 Quick Start (Minimum Viable)

To get started quickly, you only need:

1. **OpenAI API Key** ($5 credit to start)
   - https://platform.openai.com/api-keys

2. **Supabase Account** (Free)
   - https://supabase.com

That's it! You can add other integrations later.

---

## 📝 Testing Keys

For development, you can use:

```env
# Mock mode (no real API calls)
USE_MOCK_DATA=true

# Or use test keys
OPENAI_API_KEY=sk-test-xxxxxxxxxxxxx
```

---

## ✅ Verification Checklist

After adding keys, verify:

- [ ] OpenAI API key works (test with a simple prompt)
- [ ] Supabase connection successful
- [ ] Authentication flow works
- [ ] Database queries execute
- [ ] Email sending works (if using Resend)
- [ ] No keys exposed in frontend code
- [ ] All keys in `.gitignore`

---

## 🆘 Troubleshooting

### "Invalid API Key" Error
- Check for extra spaces
- Verify key hasn't expired
- Ensure correct environment variable name

### "Rate Limit Exceeded"
- Check API usage dashboard
- Upgrade plan if needed
- Implement caching

### "CORS Error"
- Add domain to API whitelist
- Check Supabase URL settings
- Verify environment variables

---

## 📞 Support Links

- OpenAI: https://help.openai.com
- Supabase: https://supabase.com/docs
- Clerk: https://clerk.com/docs
- Twitter: https://developer.twitter.com/en/support
- LinkedIn: https://www.linkedin.com/help/linkedin

---

**Next Steps:**
1. Get OpenAI API key
2. Create Supabase project
3. Add keys to `.env.local`
4. Run the application
5. Test authentication
6. Start generating content! 🚀

