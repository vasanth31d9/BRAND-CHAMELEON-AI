# 🚀 GitHub Setup Guide

## Quick Setup (Automated)

I'll help you push this project to GitHub in 3 steps!

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to: https://github.com/new
2. Repository name: `brand-chameleon-ai` (or your preferred name)
3. Description: `AI-powered content engine for multi-platform social media posts`
4. Choose: **Private** or **Public**
5. **DO NOT** check "Initialize with README" (we already have one)
6. **DO NOT** add .gitignore (we already have one)
7. Click: **"Create repository"**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create brand-chameleon-ai --private --source=. --remote=origin
```

---

## Step 2: Initialize Git and Push

After creating the repository on GitHub, run these commands:

### Windows (PowerShell):

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Brand Chameleon AI with content generation"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Mac/Linux:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Brand Chameleon AI with content generation"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Verify

1. Go to your GitHub repository URL
2. You should see all your files!
3. Check that README.md displays correctly

---

## ⚠️ Important: Protect Your Secrets

### Files Already Protected by .gitignore:

✅ `backend/.env` - Your API keys (NOT pushed to GitHub)
✅ `frontend/.env.local` - Frontend config (NOT pushed to GitHub)
✅ `node_modules/` - Dependencies (NOT pushed)
✅ `venv/` - Python virtual environment (NOT pushed)
✅ `.next/` - Build files (NOT pushed)

### What IS Pushed to GitHub:

✅ All source code
✅ Documentation files
✅ Configuration templates
✅ Scripts
✅ README and guides

### What is NOT Pushed:

❌ API keys and secrets
❌ Environment files
❌ Dependencies (node_modules, venv)
❌ Build outputs
❌ Database files

---

## 🔐 Security Checklist

Before pushing, verify:

- [ ] `backend/.env` is in .gitignore ✅
- [ ] `frontend/.env.local` is in .gitignore ✅
- [ ] No API keys in source code ✅
- [ ] No passwords in source code ✅
- [ ] .gitignore file exists ✅

**All checks passed!** Your secrets are safe. ✅

---

## 📝 Recommended Repository Settings

After pushing, configure these on GitHub:

### 1. Add Repository Description

```
AI-powered content engine that converts one idea into multiple optimized social media posts while maintaining your brand voice.
```

### 2. Add Topics (Tags)

- `ai`
- `content-generation`
- `social-media`
- `nextjs`
- `fastapi`
- `openai`
- `typescript`
- `python`

### 3. Add README Sections

Your README.md already includes:
- ✅ Quick start guide
- ✅ Documentation links
- ✅ Setup instructions
- ✅ Troubleshooting

### 4. Enable GitHub Features

- ✅ Issues - For bug tracking
- ✅ Discussions - For community
- ✅ Wiki - For extended docs (optional)

---

## 🔄 Future Updates

After initial push, to update your repository:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## 🌿 Branching Strategy (Optional)

For team collaboration:

```bash
# Create development branch
git checkout -b develop

# Create feature branch
git checkout -b feature/new-feature

# Merge back to main
git checkout main
git merge feature/new-feature
git push
```

---

## 📦 What Gets Pushed

### Root Files:
- README.md
- All documentation (.md files)
- .gitignore
- package.json
- All scripts (.sh, .bat)

### Frontend:
- All source code (app/, components/, lib/)
- Configuration files
- package.json
- NOT: node_modules/, .next/, .env.local

### Backend:
- All source code (api/, services/, models/)
- requirements.txt
- main.py
- NOT: venv/, __pycache__/, .env

### Infrastructure:
- Terraform files
- Serverless config
- Deployment scripts

---

## 🎯 Repository Structure on GitHub

```
brand-chameleon-ai/
├── README.md
├── .gitignore
├── package.json
├── Documentation files (*.md)
├── Scripts (*.sh, *.bat)
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── package.json
│   └── Configuration files
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── main.py
│   └── requirements.txt
└── infrastructure/
    ├── terraform/
    └── serverless.yml
```

---

## 🚨 Troubleshooting

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
```

### Error: "failed to push some refs"

```bash
git pull origin main --rebase
git push -u origin main
```

### Error: "Permission denied"

1. Check your GitHub credentials
2. Use personal access token instead of password
3. Or use SSH key authentication

### Generate Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Copy token and use as password

---

## 🔗 Clone Repository Later

To clone your repository on another machine:

```bash
git clone https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
cd brand-chameleon-ai

# Install dependencies
cd frontend
npm install

cd ../backend
pip install -r requirements.txt

# Setup environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Add your API keys to .env files
```

---

## 📚 Additional Resources

- **GitHub Docs**: https://docs.github.com
- **Git Basics**: https://git-scm.com/book/en/v2
- **GitHub CLI**: https://cli.github.com

---

## ✅ Quick Checklist

- [ ] Create repository on GitHub
- [ ] Run `git init`
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Run `git remote add origin [URL]`
- [ ] Run `git push -u origin main`
- [ ] Verify files on GitHub
- [ ] Add repository description
- [ ] Add topics/tags
- [ ] Configure repository settings

---

## 🎉 Success!

Once pushed, your repository will be live at:
```
https://github.com/YOUR_USERNAME/brand-chameleon-ai
```

Share it with your team or keep it private! 🚀

---

## 💡 Pro Tips

1. **Commit often** - Small, frequent commits are better
2. **Write good commit messages** - Describe what changed and why
3. **Use branches** - Keep main branch stable
4. **Review before pushing** - Check what you're committing
5. **Keep secrets safe** - Never commit API keys
6. **Document changes** - Update README when adding features

---

**Ready to push? Follow Step 1 and Step 2 above!** 🚀
