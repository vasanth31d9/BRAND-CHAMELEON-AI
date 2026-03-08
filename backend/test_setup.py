#!/usr/bin/env python3
"""
Quick diagnostic script to test Brand Chameleon AI setup
Run this to check if everything is configured correctly
"""

import os
import sys
from dotenv import load_dotenv

print("=" * 60)
print("  Brand Chameleon AI - Setup Diagnostic")
print("=" * 60)
print()

# Load environment variables
load_dotenv()

# Test 1: Check Python version
print("✓ Test 1: Python Version")
print(f"  Python {sys.version}")
print()

# Test 2: Check environment variables
print("✓ Test 2: Environment Variables")
openai_key = os.getenv("OPENAI_API_KEY")
supabase_url = os.getenv("SUPABASE_URL")
pinecone_key = os.getenv("PINECONE_API_KEY")

if openai_key:
    print(f"  ✅ OPENAI_API_KEY: {openai_key[:20]}...")
else:
    print("  ❌ OPENAI_API_KEY: Not found!")

if supabase_url:
    print(f"  ✅ SUPABASE_URL: {supabase_url}")
else:
    print("  ⚠️  SUPABASE_URL: Not found (optional)")

if pinecone_key:
    print(f"  ✅ PINECONE_API_KEY: {pinecone_key[:20]}...")
else:
    print("  ⚠️  PINECONE_API_KEY: Not found (optional)")
print()

# Test 3: Check required packages
print("✓ Test 3: Required Packages")
required_packages = [
    "fastapi",
    "uvicorn",
    "openai",
    "sqlalchemy",
    "pinecone",
    "httpx",
    "beautifulsoup4",
    "PyPDF2"
]

missing_packages = []
for package in required_packages:
    try:
        __import__(package.replace("-", "_"))
        print(f"  ✅ {package}")
    except ImportError:
        print(f"  ❌ {package} - NOT INSTALLED")
        missing_packages.append(package)
print()

if missing_packages:
    print("⚠️  Missing packages detected!")
    print(f"   Run: pip install {' '.join(missing_packages)}")
    print()

# Test 4: Test OpenAI connection
print("✓ Test 4: OpenAI API Connection")
if openai_key:
    try:
        import openai
        client = openai.OpenAI(api_key=openai_key)
        
        print("  Testing API call...")
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": "Say 'Hello'"}],
            max_tokens=10
        )
        print(f"  ✅ OpenAI API working!")
        print(f"  Response: {response.choices[0].message.content}")
    except Exception as e:
        print(f"  ❌ OpenAI API error: {e}")
else:
    print("  ⚠️  Skipped (no API key)")
print()

# Test 5: Check if server can start
print("✓ Test 5: FastAPI Server")
try:
    from fastapi import FastAPI
    app = FastAPI()
    print("  ✅ FastAPI can be imported")
except Exception as e:
    print(f"  ❌ FastAPI error: {e}")
print()

# Summary
print("=" * 60)
print("  SUMMARY")
print("=" * 60)

issues = []
if not openai_key:
    issues.append("OpenAI API key not configured")
if missing_packages:
    issues.append(f"{len(missing_packages)} packages missing")

if issues:
    print("❌ Issues found:")
    for issue in issues:
        print(f"   - {issue}")
    print()
    print("📚 Read: CONTENT_GENERATION_TROUBLESHOOTING.md")
else:
    print("✅ All checks passed!")
    print()
    print("🚀 You're ready to start the server:")
    print("   python main.py")

print("=" * 60)
