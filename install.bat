@echo off
echo 🚀 Brand Chameleon AI - Installation Script
echo ===========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Python is not installed. Please install Python 3.11+ first.
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ Python version:
python --version
echo.

REM Install Frontend Dependencies
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install frontend dependencies
    exit /b 1
)
echo ✅ Frontend dependencies installed successfully
cd ..

REM Set up Backend
echo.
echo 🐍 Setting up backend...
cd backend

REM Create virtual environment
if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
)

REM Activate virtual environment and install dependencies
echo Installing backend dependencies...
call venv\Scripts\activate.bat
pip install -r requirements.txt
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install backend dependencies
    exit /b 1
)
echo ✅ Backend dependencies installed successfully
cd ..

REM Create .env files if they don't exist
echo.
echo 📝 Setting up environment files...

if not exist "frontend\.env.local" (
    copy frontend\.env.example frontend\.env.local
    echo ✅ Created frontend\.env.local
)

if not exist "backend\.env" (
    copy backend\.env.example backend\.env
    echo ✅ Created backend\.env
)

echo.
echo 🎉 Installation complete!
echo.
echo Next steps:
echo 1. Edit backend\.env with your API keys (OpenAI, Pinecone, etc.)
echo 2. Start backend: cd backend ^&^& venv\Scripts\activate ^&^& uvicorn main:app --reload
echo 3. Start frontend: cd frontend ^&^& npm run dev
echo.
echo Visit http://localhost:3000 to see your app!
pause
