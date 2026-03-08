@echo off
echo ========================================
echo Fixing Frontend Dependencies
echo ========================================
echo.

cd frontend

echo Cleaning old installations...
if exist node_modules (
    echo Removing node_modules...
    rmdir /s /q node_modules
)

if exist package-lock.json (
    echo Removing package-lock.json...
    del package-lock.json
)

echo.
echo Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo ✅ SUCCESS! Dependencies installed.
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Restart your IDE/editor
    echo 2. Run: npm run dev
    echo 3. Visit: http://localhost:3000
    echo.
) else (
    echo.
    echo ========================================
    echo ❌ ERROR: Installation failed
    echo ========================================
    echo.
    echo Try:
    echo 1. Update Node.js to v18+
    echo 2. Run: npm cache clean --force
    echo 3. Run this script again
    echo.
)

cd ..
pause
