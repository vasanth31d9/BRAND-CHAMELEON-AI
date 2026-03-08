#!/bin/bash

echo "========================================"
echo "Fixing Frontend Dependencies"
echo "========================================"
echo ""

cd frontend

echo "Cleaning old installations..."
if [ -d "node_modules" ]; then
    echo "Removing node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "Removing package-lock.json..."
    rm package-lock.json
fi

echo ""
echo "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "✅ SUCCESS! Dependencies installed."
    echo "========================================"
    echo ""
    echo "Next steps:"
    echo "1. Restart your IDE/editor"
    echo "2. Run: npm run dev"
    echo "3. Visit: http://localhost:3000"
    echo ""
else
    echo ""
    echo "========================================"
    echo "❌ ERROR: Installation failed"
    echo "========================================"
    echo ""
    echo "Try:"
    echo "1. Update Node.js to v18+"
    echo "2. Run: npm cache clean --force"
    echo "3. Run this script again"
    echo ""
fi

cd ..
