#!/bin/bash

echo "========================================"
echo "GitHub Setup - Brand Chameleon AI"
echo "========================================"
echo ""

echo "Step 1: Checking Git installation..."
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed!"
    echo "Please install Git from: https://git-scm.com"
    exit 1
fi
git --version
echo "✓ Git is installed"
echo ""

echo "Step 2: Initializing Git repository..."
git init
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to initialize Git repository"
    exit 1
fi
echo "✓ Git repository initialized"
echo ""

echo "Step 3: Adding all files..."
git add .
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to add files"
    exit 1
fi
echo "✓ Files added"
echo ""

echo "Step 4: Creating initial commit..."
git commit -m "Initial commit: Brand Chameleon AI with content generation"
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to create commit"
    exit 1
fi
echo "✓ Initial commit created"
echo ""

echo "========================================"
echo "Next Steps:"
echo "========================================"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Repository name: brand-chameleon-ai"
echo "   Description: AI-powered content engine for multi-platform social media posts"
echo "   Choose: Private or Public"
echo "   DO NOT initialize with README or .gitignore"
echo ""
echo "3. After creating the repository, run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Replace YOUR_USERNAME with your GitHub username"
echo ""
echo "========================================"
echo ""
echo "Read GITHUB_SETUP.md for detailed instructions"
echo ""
