@echo off
setlocal enabledelayedexpansion

REM Brand Chameleon AI - Environment Setup Script (Windows)
REM This script helps you set up your API keys

echo ================================================================
echo.
echo         Brand Chameleon AI - Environment Setup
echo.
echo ================================================================
echo.

echo This script will help you create .env files for frontend and backend.
echo.
echo You'll need:
echo   1. OpenAI API Key (from https://platform.openai.com/api-keys)
echo   2. Supabase Project URL and Keys (from https://supabase.com)
echo.
pause
echo.

REM ============================================
REM Frontend Configuration
REM ============================================

echo ================================================================
echo   FRONTEND CONFIGURATION
echo ================================================================
echo.

set /p OPENAI_KEY="Enter OpenAI API Key (sk-proj-...): "
echo.

set /p SUPABASE_URL="Enter Supabase URL (https://xxxxx.supabase.co): "
set /p SUPABASE_ANON="Enter Supabase Anon Key (eyJ...): "
set /p SUPABASE_SERVICE="Enter Supabase Service Role Key (eyJ...): "
echo.

echo Optional - Twitter API (press Enter to skip):
set /p TWITTER_KEY="Twitter API Key: "
set /p TWITTER_SECRET="Twitter API Secret: "
set /p TWITTER_BEARER="Twitter Bearer Token: "
echo.

echo Optional - LinkedIn API (press Enter to skip):
set /p LINKEDIN_ID="LinkedIn Client ID: "
set /p LINKEDIN_SECRET="LinkedIn Client Secret: "
echo.

REM Create frontend .env.local
echo Creating frontend\.env.local...

(
echo # ============================================
echo # ESSENTIAL - Required for app to work
echo # ============================================
echo.
echo # OpenAI API Key ^(for AI content generation^)
echo OPENAI_API_KEY=%OPENAI_KEY%
echo.
echo # Supabase ^(for authentication and database^)
echo NEXT_PUBLIC_SUPABASE_URL=%SUPABASE_URL%
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=%SUPABASE_ANON%
echo SUPABASE_SERVICE_ROLE_KEY=%SUPABASE_SERVICE%
echo.
echo # ============================================
echo # OPTIONAL - For additional features
echo # ============================================
echo.
echo # Twitter API ^(optional - for Twitter integration^)
echo TWITTER_API_KEY=%TWITTER_KEY%
echo TWITTER_API_SECRET=%TWITTER_SECRET%
echo TWITTER_BEARER_TOKEN=%TWITTER_BEARER%
echo.
echo # LinkedIn API ^(optional - for LinkedIn integration^)
echo LINKEDIN_CLIENT_ID=%LINKEDIN_ID%
echo LINKEDIN_CLIENT_SECRET=%LINKEDIN_SECRET%
echo.
echo # App Configuration
echo NEXT_PUBLIC_APP_URL=http://localhost:3000
echo NEXT_PUBLIC_API_URL=http://localhost:8000
) > frontend\.env.local

echo [OK] Created frontend\.env.local
echo.

REM ============================================
REM Backend Configuration
REM ============================================

echo ================================================================
echo   BACKEND CONFIGURATION
echo ================================================================
echo.

set /p DB_PASSWORD="Enter Database Password [postgres]: "
if "%DB_PASSWORD%"=="" set DB_PASSWORD=postgres

set /p DB_NAME="Enter Database Name [brandchameleon]: "
if "%DB_NAME%"=="" set DB_NAME=brandchameleon

REM Generate random secret key
set SECRET_KEY=change-this-secret-key-%RANDOM%%RANDOM%%RANDOM%

echo.
echo Creating backend\.env...

(
echo # ============================================
echo # ESSENTIAL - Required for backend
echo # ============================================
echo.
echo # OpenAI API Key
echo OPENAI_API_KEY=%OPENAI_KEY%
echo.
echo # Database Configuration
echo DATABASE_URL=postgresql://postgres:%DB_PASSWORD%@localhost:5432/%DB_NAME%
echo.
echo # Secret Key ^(auto-generated^)
echo SECRET_KEY=%SECRET_KEY%
echo.
echo # Supabase
echo SUPABASE_URL=%SUPABASE_URL%
echo SUPABASE_KEY=%SUPABASE_ANON%
echo.
echo # ============================================
echo # OPTIONAL
echo # ============================================
echo.
echo # Twitter API
echo TWITTER_API_KEY=%TWITTER_KEY%
echo TWITTER_API_SECRET=%TWITTER_SECRET%
echo.
echo # LinkedIn API
echo LINKEDIN_CLIENT_ID=%LINKEDIN_ID%
echo LINKEDIN_CLIENT_SECRET=%LINKEDIN_SECRET%
echo.
echo # Environment
echo ENVIRONMENT=development
echo DEBUG=True
) > backend\.env

echo [OK] Created backend\.env
echo.

REM ============================================
REM Summary
REM ============================================

echo ================================================================
echo.
echo                    SETUP COMPLETE!
echo.
echo ================================================================
echo.
echo Environment files created:
echo   [OK] frontend\.env.local
echo   [OK] backend\.env
echo.
echo Next steps:
echo.
echo 1. Install dependencies:
echo    cd frontend
echo    npm install
echo    cd ..\backend
echo    pip install -r requirements.txt
echo.
echo 2. Start backend ^(in one terminal^):
echo    cd backend
echo    python main.py
echo.
echo 3. Start frontend ^(in another terminal^):
echo    cd frontend
echo    npm run dev
echo.
echo 4. Open browser:
echo    http://localhost:3000
echo.
echo 5. Create your first user:
echo    Click 'Sign Up Free' at bottom of sidebar
echo.
echo For more help, read: COMPLETE_SETUP_GUIDE.md
echo.
pause
