# Quick Setup Guide - Brand Chameleon AI

## Step 1: Install Frontend Dependencies

```bash
cd frontend
npm install
```

This will install:
- React 18
- Next.js 14
- Tailwind CSS
- ShadCN UI components
- Lucide React icons
- All other dependencies

## Step 2: Install Backend Dependencies

```bash
cd backend
python -m venv venv

# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

## Step 3: Set Up Environment Variables

### Frontend
```bash
cd frontend
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Backend
```bash
cd backend
cp .env.example .env
```

Edit `.env` with your API keys:
```
DATABASE_URL=postgresql://user:password@localhost:5432/brandchameleon
OPENAI_API_KEY=sk-your-key-here
PINECONE_API_KEY=your-pinecone-key
SECRET_KEY=your-secret-key
```

## Step 4: Run the Application

### Terminal 1 - Backend
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn main:app --reload
```

Backend runs on: http://localhost:8000

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

Frontend runs on: http://localhost:3000

## Troubleshooting

### "Cannot find module 'react'" error
- Make sure you ran `npm install` in the frontend directory
- Try deleting `node_modules` and running `npm install` again
- Restart your IDE/editor

### Python module errors
- Make sure virtual environment is activated
- Run `pip install -r requirements.txt` again

### Database connection errors
- Make sure PostgreSQL is running
- Check DATABASE_URL in .env file
- Create database: `createdb brandchameleon`

## Next Steps

1. Visit http://localhost:3000 to see the dashboard
2. Configure your OpenAI API key for content generation
3. Set up Pinecone for brand voice training
4. Start creating content!
