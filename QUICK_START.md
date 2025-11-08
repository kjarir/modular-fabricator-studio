# Quick Start - Direct Email Sending

## 🚀 Setup in 3 Steps

### Step 1: Install Backend Dependencies
```bash
npm install
```

### Step 2: Setup Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Create a new app password for "Mail"
5. Copy the 16-character password

### Step 3: Create .env File

Create a `.env` file in the root directory:

```env
# Backend Server Configuration
PORT=3001
EMAIL_USER=arifshaikh@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here

# Frontend Configuration (optional - for production)
VITE_API_ENDPOINT=http://localhost:3001/api/send-email
```

### Step 4: Run the Application

**Terminal 1 - Start Backend Server:**
```bash
npm run server
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

That's it! 🎉 

Now when users submit the contact form, emails will be sent directly to **arifshaikh@gmail.com** without opening the email client.

---

## 📧 Testing

1. Open http://localhost:8080
2. Go to Contact page
3. Fill out the form
4. Submit - Email will be sent directly!

---

## 🔧 Alternative Options

If you don't want to use the backend server, check `EMAIL_SETUP.md` for:
- EmailJS setup (free, no backend)
- Web3Forms setup (free, easy)

---

## 🌐 Production Deployment

1. Deploy backend server to: Railway, Render, or Heroku
2. Update `VITE_API_ENDPOINT` to your deployed backend URL
3. Deploy frontend to: Vercel, Netlify, or your hosting

For detailed instructions, see `EMAIL_SETUP.md`

