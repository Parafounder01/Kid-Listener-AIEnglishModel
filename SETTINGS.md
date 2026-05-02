# ⚙️ SETTINGS.md - EduSpeak Junior

> Complete setup & configuration guide for the **Kid English Learning Web App**  
> For PKG to 6th Standard Slow Learners 🎓

---

## 📑 Table of Contents

1. [Project Info](#-project-info)
2. [System Requirements](#-system-requirements)
3. [Installation](#-installation)
4. [Environment Variables](#-environment-variables)
5. [Tech Stack](#-tech-stack)
6. [Folder Structure](#-folder-structure)
7. [Available Scripts](#-available-scripts)
8. [Configuration Files](#-configuration-files)
9. [API Keys Setup](#-api-keys-setup)
10. [Browser Support](#-browser-support)
11. [Deployment](#-deployment)
12. [Troubleshooting](#-troubleshooting)

---

## 📌 Project Info

| Key | Value |
|-----|-------|
| **Project Name** | EduSpeak Junior |
| **Repository** | Kid-english-learning- |
| **Version** | 1.0.0 |
| **Target Users** | Slow Learners (PKG - 6th Std) |
| **Focus** | English Listening & Speaking |
| **License** | MIT |
| **Maintainer** | Parafounder01 |

---

## 💻 System Requirements

### Minimum Requirements

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (or yarn/pnpm)
- **Git:** v2.30+
- **RAM:** 4 GB minimum
- **OS:** Windows 10+, macOS 10.15+, Ubuntu 20.04+

### Check Your Versions

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone git@github.com:Parafounder01/Kid-english-learning-.git
cd Kid-english-learning-
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup Environment Variables

```bash
cp .env.example .env
```

Then edit `.env` with your values (see below).

### Step 4: Run Development Server

```bash
npm run dev
```

App will run at: **http://localhost:5173**

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

### Frontend (`.env`)

```env
# App Settings
VITE_APP_NAME=EduSpeak Junior
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# API URLs
VITE_API_BASE_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000

# Speech Recognition
VITE_SPEECH_LANG=en-IN
VITE_SPEECH_RATE=0.8

# Firebase (Client-side - safe to expose)
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id

# Feature Flags
VITE_ENABLE_OFFLINE_MODE=true
VITE_ENABLE_PARENT_DASHBOARD=true
VITE_ENABLE_VOICE_RECORDING=true
```

### Backend (`.env`) - Keep these SECRET

```env
# Google Cloud (Speech-to-Text) - SERVER ONLY
GOOGLE_API_KEY=your_google_api_key_here

# ElevenLabs (Text-to-Speech) - SERVER ONLY
ELEVENLABS_API_KEY=your_elevenlabs_key_here

# AWS S3 (Audio Storage) - SERVER ONLY
AWS_BUCKET_NAME=eduspeak-audio
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

> ⚠️ **NEVER commit `.env` files to GitHub!** They're in `.gitignore`.
> 🔒 **Security:** API keys for Google/ElevenLabs/AWS must only be in backend `.env` - never in `VITE_*` vars!

---

## 🛠️ Tech Stack

### Frontend

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI library |
| react-dom | ^18.3.0 | DOM rendering |
| react-router-dom | ^6.26.0 | Routing |
| vite | ^5.4.0 | Build tool |
| tailwindcss | ^4.0.0 | Styling |
| framer-motion | ^11.0.0 | Animations |
| howler | ^2.2.4 | Audio playback |
| lucide-react | ^0.400.0 | Icons |
| zustand | ^4.5.0 | State management |
| axios | ^1.7.0 | HTTP client |

### Backend (Optional)

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.19.0 | Server framework |
| mongoose | ^8.5.0 | MongoDB ODM |
| firebase-admin | ^12.0.0 | Auth verification |
| cors | ^2.8.5 | CORS handling |
| dotenv | ^16.4.0 | Env variables |

---

## 📂 Folder Structure

```
Kid-english-learning/
│
├── public/
│   ├── favicon.ico
│   └── manifest.json          # PWA config
│
├── src/
│   ├── assets/
│   │   ├── audio/             # MP3 lesson files
│   │   ├── images/            # Pictures, mascot
│   │   └── animations/        # Lottie JSON
│   │
│   ├── components/
│   │   ├── Buddy.jsx          # Mascot character
│   │   ├── BigButton.jsx      # Kid-friendly button
│   │   ├── MicButton.jsx      # Speech recognition
│   │   └── StarReward.jsx     # Celebration popup
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── GradeSelect.jsx
│   │   ├── ListeningModule.jsx
│   │   ├── SpeakingModule.jsx
│   │   └── ParentDashboard.jsx
│   │
│   ├── hooks/
│   │   ├── useSpeechRecognition.js
│   │   └── useTextToSpeech.js
│   │
│   ├── utils/
│   │   ├── lessons.js         # Lesson data
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env                        # Environment vars (NOT in git)
├── .env.example                # Sample env file
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── SETTINGS.md                 # This file
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 5173)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier

# Testing (if added)
npm run test             # Run tests
npm run test:watch       # Watch mode
```

---

## ⚙️ Configuration Files

### `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable in production for security
  },
})
```

### Tailwind CSS v4 Note

> ⚠️ **Tailwind v4 does NOT use `tailwind.config.js`**. Configuration is done via CSS directives in your main CSS file.

Add to `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --font-family-kid: 'Comic Sans MS', 'Baloo 2', cursive;
  --color-primary: #FFD93D;
  --color-secondary: #FF6B6B;
  --color-success: #6BCB77;
  --color-info: #4D96FF;
}
```

---

## 🔑 API Keys Setup

### 1. Google Cloud Speech-to-Text

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project → Enable **Speech-to-Text API**
3. Create credentials → API Key
4. Add to `.env` as `VITE_GOOGLE_API_KEY`

### 2. ElevenLabs (Text-to-Speech)

1. Sign up at [elevenlabs.io](https://elevenlabs.io)
2. Go to Profile → API Keys
3. Copy and add to `.env`

### 3. Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create project → Add web app
3. Copy config values to `.env`

---

## 🌐 Browser Support

| Browser | Min Version | Speech Recognition |
|---------|-------------|-------------------|
| Chrome | 90+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Safari | 14.1+ | ⚠️ Limited |
| Firefox | 88+ | ❌ Use Polyfill |
| Opera | 76+ | ✅ Full Support |

> 💡 **Recommended:** Use Chrome for the best experience with Web Speech API.

---

## 🚢 Deployment

### Frontend (Vercel)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Frontend (Netlify)

```bash
npm run build
# Drag 'dist' folder to netlify.com/drop
```

### Backend (Render)

1. Push to GitHub
2. Connect repo at [render.com](https://render.com)
3. Set environment variables
4. Deploy

---

## 🎨 App Settings (User Preferences)

These settings are stored in `localStorage` and configurable per user:

```javascript
{
  audioSpeed: 0.75,           // 0.5x, 0.75x, 1x
  voiceGender: "female",      // male, female
  language: "en-IN",          // en-IN, en-US, en-GB
  difficultyLevel: "easy",    // easy, medium, hard
  soundEffects: true,
  backgroundMusic: false,
  fontSize: "large",          // small, medium, large
  highContrast: false,
  autoReplay: true,           // Auto-replay audio 2x
  rewardAnimation: true,
  childName: "",
  childGrade: "1st",
  parentEmail: ""
}
```

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Microphone not working

- Use **HTTPS** or `localhost` only
- Allow mic permission in browser settings
- Check Chrome: `chrome://settings/content/microphone`

### Issue: Port 5173 already in use

```bash
# Run on different port
npm run dev -- --port 3000
```

### Issue: Speech Recognition not detected

- Only works on **Chrome/Edge**
- Must run on `https://` or `localhost`
- Check `navigator.mediaDevices` is available

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/Parafounder01/Kid-english-learning/issues)
- **Email:** support@eduspeakjunior.com
- **Docs:** See `README.md`

---

## 📝 Changelog

### v1.0.0 (Current)
- Initial setup with React + Vite
- Tailwind CSS integration
- Basic routing structure
- Speech recognition hook

---

**Made with ❤️ for slow learners** 🌟 