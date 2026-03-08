# Troubleshooting Guide

## Frontend Issues

### Error: "Cannot find module 'react'"

**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

If still not working:
1. Restart your IDE/editor
2. In VS Code: Press Ctrl+Shift+P → "TypeScript: Restart TS Server"

### Error: "Module not found: Can't resolve '@/components/...'"

**Solution:**
Check `tsconfig.json` has correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Port 3000 already in use

**Solution:**
```bash
# Find and kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

Or use a different port:
```bash
npm run dev -- -p 3001
```

## Backend Issues

### Error: "No module named 'fastapi'"

**Solution:**
Make sure virtual environment is activated:
```bash
# Windows
cd backend
venv\Scripts\activate
pip install -r requirements.txt

# Mac/Linux
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

### Error: "Could not connect to database"

**Solution:**
1. Make sure PostgreSQL is running
2. Check DATABASE_URL in `.env`:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/brandchameleon
   ```
3. Create database:
   ```bash
   createdb brandchameleon
   ```

### Error: "OpenAI API key not found"

**Solution:**
Add your OpenAI API key to `backend/.env`:
```
OPENAI_API_KEY=sk-your-actual-key-here
```

Get your key from: https://platform.openai.com/api-keys

### Port 8000 already in use

**Solution:**
```bash
# Use different port
uvicorn main:app --reload --port 8001

# Or kill process on port 8000
# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:8000 | xargs kill -9
```

## Installation Issues

### npm install fails

**Solution:**
1. Update Node.js to version 18+
2. Clear npm cache:
   ```bash
   npm cache clean --force
   npm install
   ```

### pip install fails

**Solution:**
1. Update pip:
   ```bash
   python -m pip install --upgrade pip
   ```
2. Install with verbose output:
   ```bash
   pip install -r requirements.txt -v
   ```

### Permission denied errors (Mac/Linux)

**Solution:**
```bash
chmod +x install.sh
sudo chown -R $USER:$USER .
```

## API Integration Issues

### Pinecone connection fails

**Solution:**
1. Check API key in `.env`
2. Verify environment name
3. Make sure index is created in Pinecone dashboard

### OpenAI rate limit errors

**Solution:**
1. Check your OpenAI account has credits
2. Implement rate limiting in code
3. Use exponential backoff for retries

## Build Issues

### Next.js build fails

**Solution:**
```bash
cd frontend
rm -rf .next
npm run build
```

### TypeScript errors during build

**Solution:**
```bash
# Check for type errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

## Runtime Issues

### "CORS error" in browser console

**Solution:**
Check `backend/main.py` CORS settings:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Content generation not working

**Solution:**
1. Check OpenAI API key is valid
2. Check backend logs for errors
3. Verify API endpoint is accessible: http://localhost:8000/docs

### Slow performance

**Solution:**
1. Enable Redis caching
2. Optimize database queries
3. Use CDN for static assets
4. Implement pagination for large datasets

## Getting More Help

If you're still experiencing issues:

1. Check backend logs: Look at terminal running `uvicorn`
2. Check browser console: Press F12 in browser
3. Check API docs: Visit http://localhost:8000/docs
4. Review error messages carefully
5. Search for specific error messages online

## Common Error Messages

| Error | Likely Cause | Solution |
|-------|--------------|----------|
| EADDRINUSE | Port already in use | Kill process or use different port |
| Module not found | Missing dependency | Run npm/pip install |
| Connection refused | Service not running | Start backend/database |
| 401 Unauthorized | Invalid API key | Check .env file |
| 500 Internal Server Error | Backend error | Check backend logs |
