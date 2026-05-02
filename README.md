# 🎓 EduSpeak Junior

> An interactive English learning web app designed for **slow learners** (PKG to 6th Standard)  
> Focus: **Listening & Speaking Skills** 🎧 🗣️

[![Demo](https://img.shields.io/badge/🚀_Live_Demo-Click_Here-blue?style=for-the-badge)](https://parafounder01.github.io/Kid-english-learning-/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/Parafounder01/Kid-english-learning-)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 📌 About the Project

**EduSpeak Junior** is a specialized web application built to help slow learners (PKG to 6th Standard) improve their English listening and speaking skills through interactive exercises, voice recognition, and gamified learning.

### Target Audience
- Slow learners from PKG (Pre-Kindergarten) to 6th Standard
- Students needing extra support in English pronunciation
- Teachers and parents looking for assistive learning tools

---

## ✨ Features

- 🎧 **Listening Modules** - Audio-based lessons with visual aids
- 🗣️ **Speaking Practice** - Voice recognition for pronunciation feedback
- 🎮 **Gamified Learning** - Stars, rewards, and progress tracking
- 👨‍👩‍👧‍👦 **Parent Dashboard** - Monitor child's progress
- 🎨 **Kid-Friendly UI** - Bright colors, large buttons, simple navigation
- 🔊 **Text-to-Speech** - Hear correct pronunciation
- 📱 **Responsive Design** - Works on tablets and desktops
- 🌐 **Offline Mode** - Continue learning without internet

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS v3** - Styling
- **React Router** - Navigation
- **Zustand** - State management
- **Howler.js** - Audio playback
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Planned Backend
- **Node.js + Express** - REST API
- **MongoDB** - Database
- **Firebase** - Authentication
- **Google Cloud Speech-to-Text** - Voice processing
- **ElevenLabs** - Text-to-speech

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Parafounder01/Kid-english-learning-.git
   cd Kid-english-learning-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys (see Configuration below)
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   App runs at **http://localhost:5173**

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server (port 5173)

# Production
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
```

---

## 📂 Project Structure

```
Kid-english-learning-/
│
├── public/              # Static assets
│   └── favicon.svg
│
├── src/
│   ├── assets/         # Images, audio, animations
│   │   ├── audio/
│   │   ├── images/
│   │   └── animations/
│   │
│   ├── components/     # Reusable UI components
│   │   ├── Buddy.jsx          # Mascot character
│   │   ├── BigButton.jsx      # Kid-friendly buttons
│   │   ├── MicButton.jsx      # Speech recognition button
│   │   └── StarReward.jsx     # Celebration animations
│   │
│   ├── pages/          # Application pages
│   │   ├── Home.jsx
│   │   ├── GradeSelect.jsx
│   │   ├── ListeningModule.jsx
│   │   ├── SpeakingModule.jsx
│   │   └── ParentDashboard.jsx
│   │
│   ├── hooks/          # Custom React hooks
│   │   ├── useSpeechRecognition.js
│   │   └── useTextToSpeech.js
│   │
│   ├── utils/         # Helper functions
│   │   ├── lessons.js
│   │   └── helpers.js
│   │
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Tailwind styles
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── SETTINGS.md        # Detailed configuration guide
└── README.md         # This file
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# App Settings
VITE_APP_NAME=EduSpeak Junior
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# API URLs
VITE_API_BASE_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000

# Firebase (Client-side)
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id

# Feature Flags
VITE_ENABLE_OFFLINE_MODE=true
VITE_ENABLE_PARENT_DASHBOARD=true
VITE_ENABLE_VOICE_RECORDING=true
```

> ⚠️ **Security Note:** Sensitive API keys (Google, ElevenLabs, AWS) must be stored in backend `.env` only - never in `VITE_*` variables!

For detailed configuration, see **[SETTINGS.md](./SETTINGS.md)**.

---

## 🚢 Deployment

### Frontend (Vercel - Recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Frontend (Netlify)

```bash
npm run build
# Drag and drop the `dist/` folder to netlify.com/drop
```

### Backend (Render)

1. Push code to GitHub
2. Connect repo at [render.com](https://render.com)
3. Set environment variables
4. Deploy

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/Parafounder01/Kid-english-learning-/issues)
- **Email:** support@eduspeakjunior.com
- **Documentation:** See [SETTINGS.md](./SETTINGS.md)
- **Portfolio:** [My Portfolio](https://Parafounder01.github.io/My-portfolio-/)

---

## 🎯 Roadmap

- [x] Initial project setup (React + Vite + Tailwind)
- [x] Basic routing structure
- [ ] Listening module implementation
- [ ] Speaking module with speech recognition
- [ ] Parent dashboard
- [ ] Backend API integration
- [ ] Offline mode support
- [ ] Progress tracking
- [ ] Multi-language support

---

## 🙏 Acknowledgments

- Designed for slow learners with ❤️
- Icons by [Lucide](https://lucide.dev)
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)

## 👤 Developer

- **Portfolio:** [My Portfolio](https://Parafounder01.github.io/My-portfolio-/)
- **GitHub:** [@Parafounder01](https://github.com/Parafounder01)

---

<div align="center">

**Made with ❤️ for slow learners** 🌟

[View Demo](https://parafounder01.github.io/Kid-english-learning-/) • [Report Bug](https://github.com/Parafounder01/Kid-english-learning-/issues) • [Request Feature](https://github.com/Parafounder01/Kid-english-learning-/issues)

</div>
