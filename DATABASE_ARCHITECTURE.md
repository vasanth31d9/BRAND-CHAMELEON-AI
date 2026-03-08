# 🗄️ Database Architecture - Brand Chameleon AI

## Overview

Brand Chameleon AI uses a **hybrid database architecture** combining:
1. **PostgreSQL (via Supabase)** - Structured data, user management, authentication
2. **Pinecone** - Vector embeddings for brand voice similarity matching

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Brand Chameleon AI                          │
└────────────┬────────────────────────────────┬───────────────────┘
             │                                │
             │                                │
    ┌────────▼────────┐              ┌───────▼────────┐
    │   PostgreSQL    │              │    Pinecone    │
    │   (Supabase)    │              │  Vector Store  │
    │                 │              │                │
    │  • Users        │              │  • Embeddings  │
    │  • Posts        │              │  • Vectors     │
    │  • Brand Voice  │              │  • Metadata    │
    │  • Analytics    │              │                │
    └─────────────────┘              └────────────────┘
         Structured                      Unstructured
         Relational                      Vector Search
```

---

## 1️⃣ PostgreSQL (Supabase)

### Purpose
- User authentication and management
- Structured data storage
- Relational data (posts, analytics, settings)
- Real-time subscriptions

### Tables

#### `users`
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    hashed_password VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

#### `posts`
```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    platform VARCHAR(50),
    content TEXT,
    virality_score FLOAT,
    engagement_rate FLOAT,
    reach INTEGER,
    likes INTEGER,
    comments INTEGER,
    shares INTEGER,
    created_at TIMESTAMP DEFAULT NOW(),
    scheduled_at TIMESTAMP,
    published_at TIMESTAMP
);
```

#### `brand_voices`
```sql
CREATE TABLE brand_voices (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) UNIQUE,
    tone VARCHAR(100),
    vocabulary TEXT,  -- JSON array
    sentence_structure VARCHAR(100),
    style_score FLOAT,
    pinecone_namespace VARCHAR(255),  -- Links to Pinecone
    updated_at TIMESTAMP DEFAULT NOW()
);
```

#### `analytics`
```sql
CREATE TABLE analytics (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    platform VARCHAR(50),
    metric_type VARCHAR(50),
    metric_value FLOAT,
    recorded_at TIMESTAMP DEFAULT NOW()
);
```

### Why PostgreSQL?
- ✅ ACID compliance for data integrity
- ✅ Complex queries and joins
- ✅ Built-in authentication (Supabase)
- ✅ Real-time capabilities
- ✅ Row-level security
- ✅ Free tier available

---

## 2️⃣ Pinecone (Vector Database)

### Purpose
- Store brand voice embeddings
- Semantic similarity search
- Fast vector retrieval
- Brand voice matching

### Index Configuration

```python
# Index Settings
index_name = "brand-chameleon"
dimension = 1536  # OpenAI text-embedding-3-small
metric = "cosine"  # Similarity metric
pod_type = "starter"  # Free tier
```

### Data Structure

Each vector in Pinecone represents a piece of content with metadata:

```python
{
    "id": "user_123_post_456",
    "values": [0.123, -0.456, ...],  # 1536 dimensions
    "metadata": {
        "user_id": "123",
        "content_type": "post",
        "platform": "linkedin",
        "tone": "professional",
        "timestamp": "2024-01-15T10:30:00Z"
    }
}
```

### Namespaces

Pinecone uses namespaces to separate user data:

```
brand-chameleon/
├── user_123/          # User 1's brand voice
│   ├── post_1
│   ├── post_2
│   └── post_3
├── user_456/          # User 2's brand voice
│   ├── post_1
│   └── post_2
└── ...
```

### Why Pinecone?
- ✅ Fast vector similarity search
- ✅ Scalable to millions of vectors
- ✅ Low latency (<100ms)
- ✅ Managed service (no infrastructure)
- ✅ Free tier (100K vectors)
- ✅ Built for AI/ML workloads

---

## 🔄 Data Flow

### Brand Voice Training Flow

```
1. User uploads past posts
   ↓
2. Posts stored in PostgreSQL (brand_voices table)
   ↓
3. OpenAI generates embeddings (1536 dimensions)
   ↓
4. Embeddings stored in Pinecone with metadata
   ↓
5. Pinecone namespace ID saved to PostgreSQL
   ↓
6. Brand voice profile complete
```

### Content Generation Flow

```
1. User requests content generation
   ↓
2. Retrieve user's Pinecone namespace from PostgreSQL
   ↓
3. Query Pinecone for similar brand voice vectors
   ↓
4. Get top 5 most similar past posts
   ↓
5. Use similar posts as context for GPT-4
   ↓
6. Generate new content matching brand voice
   ↓
7. Save generated post to PostgreSQL
```

---

## 🔑 API Keys Required

### Supabase
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Pinecone
```env
PINECONE_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=brand-chameleon
```

---

## 📊 Data Storage Breakdown

| Data Type | Storage | Why |
|-----------|---------|-----|
| User accounts | PostgreSQL | Structured, relational |
| Posts | PostgreSQL | Structured, queryable |
| Analytics | PostgreSQL | Time-series, aggregations |
| Settings | PostgreSQL | Structured, user-specific |
| Brand voice embeddings | Pinecone | Vector similarity search |
| Content embeddings | Pinecone | Semantic matching |

---

## 🚀 Setup Instructions

### 1. Set Up Supabase

```bash
# 1. Go to https://supabase.com
# 2. Create new project
# 3. Wait for database to initialize
# 4. Go to Settings → API
# 5. Copy URL and keys
```

### 2. Set Up Pinecone

```bash
# 1. Go to https://www.pinecone.io
# 2. Sign up for free account
# 3. Create new index:
#    - Name: brand-chameleon
#    - Dimensions: 1536
#    - Metric: cosine
#    - Pod: Starter (free)
# 4. Copy API key and environment
```

### 3. Initialize Databases

```python
# PostgreSQL (automatic with Supabase)
# Tables created on first run

# Pinecone (initialize in code)
import pinecone

pinecone.init(
    api_key=os.getenv("PINECONE_API_KEY"),
    environment=os.getenv("PINECONE_ENVIRONMENT")
)

index = pinecone.Index("brand-chameleon")
```

---

## 🔒 Security

### PostgreSQL (Supabase)
- Row-level security (RLS)
- User can only access their own data
- Service role key for admin operations
- Encrypted at rest and in transit

### Pinecone
- API key authentication
- Namespace isolation per user
- Encrypted connections
- No public access

---

## 💰 Cost Breakdown

### Free Tier Limits

| Service | Free Tier | Paid Tier Starts |
|---------|-----------|------------------|
| **Supabase** | 500MB database, 50K users | $25/month (8GB) |
| **Pinecone** | 100K vectors, 1 pod | $70/month (1M vectors) |

### Estimated Costs

**Development (Free)**:
- Supabase: Free
- Pinecone: Free
- Total: $0/month

**Small Business (100 users)**:
- Supabase: Free
- Pinecone: Free (if <100K vectors)
- Total: $0/month

**Growing Business (1000 users)**:
- Supabase: $25/month
- Pinecone: $70/month
- Total: $95/month

---

## 🧪 Testing

### Test PostgreSQL Connection

```python
from backend.models.database import SessionLocal, User

db = SessionLocal()
users = db.query(User).all()
print(f"Found {len(users)} users")
```

### Test Pinecone Connection

```python
import pinecone

pinecone.init(
    api_key=os.getenv("PINECONE_API_KEY"),
    environment=os.getenv("PINECONE_ENVIRONMENT")
)

index = pinecone.Index("brand-chameleon")
stats = index.describe_index_stats()
print(f"Vectors in index: {stats['total_vector_count']}")
```

---

## 📚 Additional Resources

- **Supabase Docs**: https://supabase.com/docs
- **Pinecone Docs**: https://docs.pinecone.io
- **PostgreSQL Docs**: https://www.postgresql.org/docs
- **Vector Embeddings Guide**: https://platform.openai.com/docs/guides/embeddings

---

## 🆘 Troubleshooting

### "Can't connect to Supabase"
- Check URL and keys in `.env` files
- Verify project is active in Supabase dashboard
- Check internet connection

### "Pinecone index not found"
- Verify index name matches in `.env`
- Check index is created in Pinecone dashboard
- Wait 1-2 minutes after creating index

### "Dimension mismatch"
- Ensure Pinecone index dimensions = 1536
- This matches OpenAI text-embedding-3-small
- Recreate index if dimensions are wrong

---

## ✅ Summary

Brand Chameleon AI uses:
- **PostgreSQL (Supabase)** for structured data
- **Pinecone** for vector embeddings
- Both are required for full functionality
- Both have generous free tiers
- Easy to set up and scale

**Next Steps**: Follow `COMPLETE_SETUP_GUIDE.md` to configure both databases! 🚀
