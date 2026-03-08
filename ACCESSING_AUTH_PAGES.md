# 🔐 How to Access Login & Signup Pages

## Quick Access URLs

Once your development server is running, you can access the authentication pages directly:

### Login Page
```
http://localhost:3000/login
```

### Signup Page
```
http://localhost:3000/signup
```

### Settings Page
```
http://localhost:3000/settings
```

---

## From the Sidebar

The sidebar now shows **Sign In** and **Sign Up Free** buttons at the bottom when you're not logged in.

### To See the Buttons:

1. **Start the development server:**
   ```bash
   cd frontend
   npm install  # First time only
   npm run dev
   ```

2. **Open your browser:**
   ```
   http://localhost:3000
   ```

3. **Look at the bottom of the sidebar** (left side of the screen)
   - You'll see a purple gradient "Sign In" button
   - Below it, a "Sign Up Free" button

4. **Click either button** to go to the respective page

---

## Sidebar Features

### When NOT Logged In:
- Shows "Sign In" button (purple gradient)
- Shows "Sign Up Free" button (glass effect)
- Text: "Start your AI content journey"

### When Logged In:
- Shows user profile card with avatar
- Shows username and plan type
- Shows credit usage progress bar
- Click to see dropdown menu with:
  - Profile Settings
  - Logout option

---

## Testing the Pages

### 1. Test Login Page
```bash
# Navigate to:
http://localhost:3000/login
```

**Features:**
- Email and password inputs
- Show/hide password toggle
- Remember me checkbox
- Forgot password link
- Social login (GitHub, Google)
- Animated background orbs
- Link to signup page

### 2. Test Signup Page
```bash
# Navigate to:
http://localhost:3000/signup
```

**Features:**
- Full name, email, password inputs
- Password strength indicator
- Confirm password with validation
- Terms and conditions checkbox
- Social signup (GitHub, Google)
- Animated background orbs
- Link to login page

### 3. Test Settings Page
```bash
# Navigate to:
http://localhost:3000/settings
```

**Features:**
- 5 tabs: Profile, Account, API Keys, Notifications, Appearance
- Profile: Avatar, name, email, bio
- Account: Password change, 2FA
- API Keys: OpenAI, Supabase, Twitter, LinkedIn
- Notifications: Email preferences
- Appearance: Theme selection, language

---

## Changing Login State

To test the logged-in state in the sidebar:

1. Open `frontend/components/Sidebar.tsx`
2. Find this line (around line 42):
   ```typescript
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   ```
3. Change `false` to `true`:
   ```typescript
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   ```
4. Save the file
5. The sidebar will now show the user profile card instead of login buttons

---

## Direct Navigation

You can also navigate directly by typing in the browser:

```bash
# From any page, change the URL to:
http://localhost:3000/login
http://localhost:3000/signup
http://localhost:3000/settings
```

---

## Troubleshooting

### "Cannot find module" errors
```bash
cd frontend
npm install
```

### Pages not loading
1. Make sure dev server is running:
   ```bash
   cd frontend
   npm run dev
   ```
2. Check the terminal for errors
3. Try clearing cache: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### Sidebar buttons not showing
1. Check if you're on the correct page (not /login or /signup)
2. The sidebar only shows on main app pages
3. Login/signup pages don't have the sidebar (they're standalone)

---

## Screenshots of What to Expect

### Sidebar - Not Logged In:
```
┌─────────────────────────┐
│  Brand Chameleon        │
│  AI Content Engine      │
├─────────────────────────┤
│  📊 Dashboard           │
│  ✨ Generate Content    │
│  🎤 Brand Voice         │
│  📈 Trends              │
│  📅 Scheduler           │
│  📊 Analytics           │
│  ⚙️  Settings           │
├─────────────────────────┤
│  [Sign In] 🟣          │
│  [Sign Up Free]         │
│  Start your AI journey  │
└─────────────────────────┘
```

### Sidebar - Logged In:
```
┌─────────────────────────┐
│  Brand Chameleon        │
│  AI Content Engine      │
├─────────────────────────┤
│  📊 Dashboard           │
│  ✨ Generate Content    │
│  🎤 Brand Voice         │
│  📈 Trends              │
│  📅 Scheduler           │
│  📊 Analytics           │
│  ⚙️  Settings           │
├─────────────────────────┤
│  👤 JD                  │
│  John Doe               │
│  Pro Plan               │
│  Credits: 7,500/10,000  │
│  [████████░░] 75%       │
└─────────────────────────┘
```

---

## Next Steps

1. **Start the server** if not running
2. **Navigate to** http://localhost:3000
3. **Look at the bottom** of the sidebar
4. **Click "Sign In"** or **"Sign Up Free"**
5. **Enjoy the animated auth pages!** ✨

---

## Need Help?

- Check `AUTHENTICATION_COMPLETE.md` for full documentation
- Check `API_KEYS_REQUIRED.md` for API setup
- Check `QUICK_START.md` for general setup

The pages are there and working - just look at the bottom of the sidebar! 🚀
