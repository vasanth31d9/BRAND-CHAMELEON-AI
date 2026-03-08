@echo off
echo ========================================
echo GitHub Setup - Brand Chameleon AI
echo ========================================
echo.

echo Step 1: Checking Git installation...
git --version
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✓ Git is installed
echo.

echo Step 2: Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Failed to initialize Git repository
    pause
    exit /b 1
)
echo ✓ Git repository initialized
echo.

echo Step 3: Adding all files...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files
    pause
    exit /b 1
)
echo ✓ Files added
echo.

echo Step 4: Creating initial commit...
git commit -m "Initial commit: Brand Chameleon AI with content generation"
if %errorlevel% neq 0 (
    echo ERROR: Failed to create commit
    pause
    exit /b 1
)
echo ✓ Initial commit created
echo.

echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Repository name: brand-chameleon-ai
echo    Description: AI-powered content engine for multi-platform social media posts
echo    Choose: Private or Public
echo    DO NOT initialize with README or .gitignore
echo.
echo 3. After creating the repository, run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/brand-chameleon-ai.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo Replace YOUR_USERNAME with your GitHub username
echo.
echo ========================================
echo.
echo Read GITHUB_SETUP.md for detailed instructions
echo.
pause
