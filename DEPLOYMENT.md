# Deployment Guide - Brand Chameleon AI

## Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 15+
- AWS Account
- OpenAI API Key
- Pinecone Account

## Local Development Setup

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your API URLs
npm run dev
```

Frontend will run on http://localhost:3000

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your credentials
uvicorn main:app --reload
```

Backend will run on http://localhost:8000

### Database Setup

```bash
# Create PostgreSQL database
createdb brandchameleon

# Run migrations
cd backend
alembic upgrade head
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/brandchameleon
OPENAI_API_KEY=sk-...
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
SECRET_KEY=your-secret-key
```

## AWS Deployment

### Option 1: Serverless Framework

```bash
cd infrastructure
npm install -g serverless
serverless deploy --stage prod
```

### Option 2: Terraform

```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

### Frontend Deployment (Vercel)

```bash
cd frontend
npm install -g vercel
vercel --prod
```

## Database Migrations

```bash
cd backend
alembic revision --autogenerate -m "description"
alembic upgrade head
```

## Production Checklist

- [ ] Set up PostgreSQL RDS instance
- [ ] Configure S3 bucket for media storage
- [ ] Set up Redis/ElastiCache for caching
- [ ] Configure environment variables in AWS
- [ ] Set up CloudWatch for logging
- [ ] Configure API Gateway
- [ ] Set up Lambda functions
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Configure custom domain
- [ ] Set up SSL certificates
- [ ] Configure CORS properly
- [ ] Set up monitoring and alerts
- [ ] Configure backup strategy
- [ ] Set up CI/CD pipeline

## Monitoring

- CloudWatch for AWS services
- Sentry for error tracking
- PostHog/Mixpanel for analytics
- Uptime monitoring

## Scaling Considerations

- Use Lambda for serverless scaling
- Configure auto-scaling for RDS
- Use CloudFront CDN for frontend
- Implement rate limiting
- Use Redis for caching
- Consider using SQS for async tasks
