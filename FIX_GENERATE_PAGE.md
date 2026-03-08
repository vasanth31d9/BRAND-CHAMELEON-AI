# Fix: "Cannot find module 'react'" Error in Generate Page

## The Problem
You're seeing this error in `frontend/app/generate/page.tsx`:
```
Cannot find module 'react' or its corresponding type declarations.
Cannot find module 'lucide-react' or its corresponding type declarations.
```

## Root Cause
The npm dependencies haven't been installed yet. The project files exist, but the `node_modules` folder with React and other packages is missing.

## Solution

### Option 1: Automated Fix (Recommended)

#### On Windows:
```bash
cd frontend
npm install
```

#### On Mac/Linux:
```bash
cd frontend
npm install
```

### Option 2: Complete Reset
If Option 1 doesn't work, do a clean install:

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell:
```powershell
cd frontend
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Option 3: Use Installation Script

#### Windows:
```bash
# From project root
install.bat
```

#### Mac/Linux:
```bash
# From project root
chmod +x install.sh
./install.sh
```

## Verify Installation

After running npm install, check that these folders exist:
```
frontend/
├── node_modules/          ← Should exist now
│   ├── react/
│   ├── lucide-react/
│   └── ... (many more)
└── package-lock.json      ← Should exist now
```

## Restart Your Editor

After installation:

### VS Code
1. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
2. Type "TypeScript: Restart TS Server"
3. Press Enter

### Other IDEs
- Close and reopen the project
- Or restart the IDE completely

## Test the Fix

1. Open `frontend/app/generate/page.tsx`
2. The red squiggly lines should be gone
3. No more "Cannot find module" errors

## Still Not Working?

### Check Node.js Version
```bash
node --version
```
Should be v18.0.0 or higher.

If not, update Node.js from: https://nodejs.org/

### Check npm Version
```bash
npm --version
```
Should be v9.0.0 or higher.

### Clear npm Cache
```bash
npm cache clean --force
cd frontend
npm install
```

### Check package.json
Make sure `frontend/package.json` exists and contains:
```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "lucide-react": "^0.344.0",
    ...
  }
}
```

## Run the Application

Once fixed, start the app:

### Terminal 1 - Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

Visit: http://localhost:3000/generate

## Expected Result

You should see:
- No TypeScript errors
- Generate page loads successfully
- All imports work correctly
- UI renders properly

## Quick Checklist

- [ ] Ran `npm install` in frontend directory
- [ ] `node_modules` folder exists
- [ ] Restarted TypeScript server / IDE
- [ ] No errors in `generate/page.tsx`
- [ ] Can run `npm run dev` successfully
- [ ] Page loads at http://localhost:3000/generate

## Need More Help?

See these files:
- `TROUBLESHOOTING.md` - Common issues
- `SETUP.md` - Detailed setup
- `QUICK_START.md` - Quick start guide
