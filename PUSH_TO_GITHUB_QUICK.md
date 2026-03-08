# 🚀 Push to GitHub - Quick Guide

## Super Quick (3 Steps)

### Step 1: Create GitHub Repository

Go to: **https://github.com/new**

- Name: `brand-chameleon-ai`
- Description: `AI-powered content engine for multi-platform social media posts`
- Choose: Private or Public
- **DO NOT** check any boxes
- Click: **Create repository**

---

### Step 2: Run Setup Script

**Windows:**
```bash
push-to-github.bat
```

**Mac/Linux:**
```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

This will:
- ✅ Initialize Git
- ✅ Add all files
- ✅ Create first commit

---

### Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Manual Method (If Script Doesn't Work)

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Create commit
git commit -m "Initial commit: Brand Chameleon AI with content generation"

# 4. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🔐 Your Secrets Are Safe

These files are NOT pushed to GitHub (protected by .gitignore):

- ❌ `backend/.env` - Your API keys
- ❌ `frontend/.env.local` - Frontend config
- ❌ `node_modules/` - Dependencies
- ❌ `venv/` - Python environment
- ❌ `.next/` - Build files

Instead, we push:
- ✅ `backend/.env.example` - Template without secrets
- ✅ `frontend/.env.example` - Template without secrets

---

## ✅ Verify It Worked

1. Go to: `https://github.com/YOUR_USERNAME/brand-chameleon-ai`
2. You should see all your files!
3. Check README.md displays correctly
4. Verify .env files are NOT there (good!)

---

## 🔄 Future Updates

To push changes later:

```bash
git add .
git commit -m "Description of changes"
git push
```

---

## 🆘 Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
```

### "failed to push"
```bash
git pull origin main --rebase
git push -u origin main
```

### "Permission denied"
Use a Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select: `repo` scope
4. Use token as password when pushing

---

## 📚 More Help

Read: **[GITHUB_SETUP.md](GITHUB_SETUP.md)** for detailed guide

---

**That's it! Your code will be on GitHub in 3 steps!** 🎉
