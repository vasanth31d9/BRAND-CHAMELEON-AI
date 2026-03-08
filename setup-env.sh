#!/bin/bash

# Brand Chameleon AI - Environment Setup Script
# This script helps you set up your API keys

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║        🎨 Brand Chameleon AI - Environment Setup 🎨          ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Function to read input with default value
read_with_default() {
    local prompt="$1"
    local default="$2"
    local value
    
    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " value
        echo "${value:-$default}"
    else
        read -p "$prompt: " value
        echo "$value"
    fi
}

echo "This script will help you create .env files for frontend and backend."
echo ""
echo "You'll need:"
echo "  1. OpenAI API Key (from https://platform.openai.com/api-keys)"
echo "  2. Supabase Project URL and Keys (from https://supabase.com)"
echo ""
read -p "Press Enter to continue..."
echo ""

# ============================================
# Frontend Configuration
# ============================================

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  FRONTEND CONFIGURATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "Enter your OpenAI API Key:"
OPENAI_KEY=$(read_with_default "OpenAI API Key (sk-proj-...)" "")

echo ""
echo "Enter your Supabase details:"
SUPABASE_URL=$(read_with_default "Supabase URL (https://xxxxx.supabase.co)" "")
SUPABASE_ANON=$(read_with_default "Supabase Anon Key (eyJ...)" "")
SUPABASE_SERVICE=$(read_with_default "Supabase Service Role Key (eyJ...)" "")

echo ""
echo "Optional - Twitter API (press Enter to skip):"
TWITTER_KEY=$(read_with_default "Twitter API Key" "")
TWITTER_SECRET=$(read_with_default "Twitter API Secret" "")
TWITTER_BEARER=$(read_with_default "Twitter Bearer Token" "")

echo ""
echo "Optional - LinkedIn API (press Enter to skip):"
LINKEDIN_ID=$(read_with_default "LinkedIn Client ID" "")
LINKEDIN_SECRET=$(read_with_default "LinkedIn Client Secret" "")

# Create frontend .env.local
echo ""
echo "Creating frontend/.env.local..."

cat > frontend/.env.local << EOF
# ============================================
# ESSENTIAL - Required for app to work
# ============================================

# OpenAI API Key (for AI content generation)
OPENAI_API_KEY=$OPENAI_KEY

# Supabase (for authentication and database)
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON
SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE

# ============================================
# OPTIONAL - For additional features
# ============================================

# Twitter API (optional - for Twitter integration)
TWITTER_API_KEY=$TWITTER_KEY
TWITTER_API_SECRET=$TWITTER_SECRET
TWITTER_BEARER_TOKEN=$TWITTER_BEARER

# LinkedIn API (optional - for LinkedIn integration)
LINKEDIN_CLIENT_ID=$LINKEDIN_ID
LINKEDIN_CLIENT_SECRET=$LINKEDIN_SECRET

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
EOF

echo "✅ Created frontend/.env.local"

# ============================================
# Backend Configuration
# ============================================

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  BACKEND CONFIGURATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Generate random secret key
SECRET_KEY=$(openssl rand -hex 32 2>/dev/null || echo "change-this-secret-key-$(date +%s)")

echo "Enter database configuration:"
DB_PASSWORD=$(read_with_default "Database Password" "postgres")
DB_NAME=$(read_with_default "Database Name" "brandchameleon")

# Create backend .env
echo ""
echo "Creating backend/.env..."

cat > backend/.env << EOF
# ============================================
# ESSENTIAL - Required for backend
# ============================================

# OpenAI API Key
OPENAI_API_KEY=$OPENAI_KEY

# Database Configuration
DATABASE_URL=postgresql://postgres:$DB_PASSWORD@localhost:5432/$DB_NAME

# Secret Key (auto-generated)
SECRET_KEY=$SECRET_KEY

# Supabase
SUPABASE_URL=$SUPABASE_URL
SUPABASE_KEY=$SUPABASE_ANON

# ============================================
# OPTIONAL
# ============================================

# Twitter API
TWITTER_API_KEY=$TWITTER_KEY
TWITTER_API_SECRET=$TWITTER_SECRET

# LinkedIn API
LINKEDIN_CLIENT_ID=$LINKEDIN_ID
LINKEDIN_CLIENT_SECRET=$LINKEDIN_SECRET

# Environment
ENVIRONMENT=development
DEBUG=True
EOF

echo "✅ Created backend/.env"

# ============================================
# Summary
# ============================================

echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║                    ✅ SETUP COMPLETE! ✅                      ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""
echo "Environment files created:"
echo "  ✅ frontend/.env.local"
echo "  ✅ backend/.env"
echo ""
echo "Next steps:"
echo ""
echo "1. Install dependencies:"
echo "   cd frontend && npm install"
echo "   cd ../backend && pip install -r requirements.txt"
echo ""
echo "2. Start backend (in one terminal):"
echo "   cd backend"
echo "   python main.py"
echo ""
echo "3. Start frontend (in another terminal):"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "4. Open browser:"
echo "   http://localhost:3000"
echo ""
echo "5. Create your first user:"
echo "   Click 'Sign Up Free' at bottom of sidebar"
echo ""
echo "📚 For more help, read: COMPLETE_SETUP_GUIDE.md"
echo ""
