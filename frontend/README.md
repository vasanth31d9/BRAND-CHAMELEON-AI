# Brand Chameleon AI - Frontend

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## Fix "Cannot find module" Errors

If you see errors like:
```
Cannot find module 'react'
Cannot find module 'lucide-react'
```

Run:
```bash
npm install
```

Then restart your editor.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code

## Project Structure

```
app/
├── page.tsx              # Dashboard
├── generate/             # Content Generator
├── brand-voice/          # Brand Voice Training
├── trends/               # Trending Topics
├── scheduler/            # Smart Scheduler
├── analytics/            # Analytics
├── team/                 # Team Workspace
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── Sidebar.tsx           # Navigation
└── ui/                   # ShadCN components
    ├── button.tsx
    └── card.tsx

lib/
└── utils.ts              # Utilities
```

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- ShadCN UI
- Lucide React Icons

## Pages

1. **Dashboard** (`/`) - Overview and stats
2. **Content Generator** (`/generate`) - Create multi-platform content
3. **Brand Voice** (`/brand-voice`) - Train AI on your style
4. **Trends** (`/trends`) - Discover trending topics
5. **Scheduler** (`/scheduler`) - Schedule posts
6. **Analytics** (`/analytics`) - Track performance
7. **Team** (`/team`) - Collaborate with team

## Common Issues

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
Restart TS Server in VS Code:
`Ctrl+Shift+P` → "TypeScript: Restart TS Server"

## Need Help?

See main project documentation:
- `../TROUBLESHOOTING.md`
- `../SETUP.md`
- `../QUICK_START.md`
