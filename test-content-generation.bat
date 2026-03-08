@echo off
echo ========================================
echo Testing Content Generation Setup
echo ========================================
echo.

echo Step 1: Checking backend health...
curl -s http://localhost:8000/health
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Backend is not running!
    echo Please start backend first:
    echo   cd backend
    echo   python main.py
    echo.
    pause
    exit /b 1
)

echo.
echo Step 2: Checking OpenAI API key...
cd backend
python -c "import os; from dotenv import load_dotenv; load_dotenv(); key = os.getenv('OPENAI_API_KEY'); print('✓ API Key found!' if key else '✗ No API key found!')"

echo.
echo Step 3: Running full diagnostic...
python test_setup.py

echo.
echo ========================================
echo Test Complete!
echo ========================================
echo.
echo If all checks passed, try generating content at:
echo http://localhost:3000/generate
echo.
pause
