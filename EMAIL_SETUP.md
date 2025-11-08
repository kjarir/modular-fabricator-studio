# Email Setup Instructions

## Option 1: Backend Server (Recommended - Works Immediately)

### Setup Steps:

1. **Install dependencies:**
   ```bash
   npm install express nodemailer cors dotenv
   ```

2. **Create a `.env` file in the root directory:**
   ```env
   PORT=3001
   EMAIL_USER=arifshaikh@gmail.com
   EMAIL_PASSWORD=your_gmail_app_password_here
   ```

3. **Get Gmail App Password:**
   - Go to your Google Account: https://myaccount.google.com/
   - Click on **Security**
   - Enable **2-Step Verification** if not already enabled
   - Go to **App Passwords** (search for it if not visible)
   - Create a new app password for "Mail"
   - Copy the 16-character password and use it in `.env` file

4. **Run the backend server:**
   ```bash
   node server.js
   ```

5. **Update frontend `.env` file (create if doesn't exist):**
   ```env
   VITE_API_ENDPOINT=http://localhost:3001/api/send-email
   ```

6. **For production, deploy the backend server** to a service like:
   - Heroku
   - Railway
   - Render
   - Vercel (serverless function)
   - AWS Lambda

---

## Option 2: EmailJS (Free, No Backend Required)

### Setup Steps:

1. **Sign up for EmailJS:**
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Create an Email Service:**
   - Go to **Email Services**
   - Add a new service (Gmail recommended)
   - Connect your Gmail account
   - Copy the **Service ID**

3. **Create an Email Template:**
   - Go to **Email Templates**
   - Create a new template
   - Use these variables in your template:
     - `{{to_email}}` - Recipient email (arifshaikh@gmail.com)
     - `{{from_name}}` - Sender name
     - `{{from_email}}` - Sender email
     - `{{phone}}` - Phone number
     - `{{company}}` - Company name
     - `{{message}}` - Message content
   - Copy the **Template ID**

4. **Get Public Key:**
   - Go to **Account** > **General**
   - Copy your **Public Key**

5. **Create `.env` file in root:**
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

---

## Option 3: Web3Forms (Free, Easy Setup)

### Setup Steps:

1. **Get Access Key:**
   - Go to https://web3forms.com/
   - Enter your email: arifshaikh@gmail.com
   - Copy the access key

2. **Create `.env` file:**
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

---

## Quick Start (Backend Server - Easiest)

1. Install dependencies:
   ```bash
   npm install express nodemailer cors dotenv
   ```

2. Create `.env` file:
   ```env
   EMAIL_USER=arifshaikh@gmail.com
   EMAIL_PASSWORD=your_gmail_app_password
   PORT=3001
   ```

3. Run server:
   ```bash
   node server.js
   ```

4. Update frontend `.env`:
   ```env
   VITE_API_ENDPOINT=http://localhost:3001/api/send-email
   ```

5. Start frontend:
   ```bash
   npm run dev
   ```

That's it! The contact form will now send emails directly to arifshaikh@gmail.com without opening the email client.

---

## Production Deployment

For production, you need to:
1. Deploy the backend server (server.js) to a hosting service
2. Update `VITE_API_ENDPOINT` in your frontend to point to the deployed backend URL
3. Make sure to set environment variables on your hosting platform

### Recommended Hosting:
- **Backend:** Railway, Render, or Heroku
- **Frontend:** Vercel, Netlify, or your existing hosting

