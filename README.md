# ListenUp - English Listening App

> An interactive English listening web application for **Schools, Colleges, Professors and Slow Learners** 🎧

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Click_Here-blue?style=for-the-badge)](https://parafounder01.github.io/Kid-english-learning-/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/Parafounder01/Kid-english-learning-)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## Table of Contents

- [About](#about)
- [Target Users](#target-users)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About

**ListenUp** is a full-featured English listening learning platform designed for learners at all levels. Whether you're a school student, college student, professor, or a slow learner, this app provides the tools you need to improve your English listening skills.

### Design System
- **Style:** Claymorphism (Soft 3D, playful, bubbly)
- **Heading Font:** Baloo 2
- **Body Font:** Comic Neue
- **Primary Color:** #4F46E5 (Indigo)
- **CTA Color:** #22C55E (Green)

---

## Target Users

| User | Level | Features |
|------|-------|----------|
| School Students | Beginner | Structured lessons, simple interface |
| College Students | Intermediate-Advanced | Academic content, transcripts |
| Professors | Expert | Upload content, track student progress |
| Slow Learners | All Levels | Speed control, loops, repetition |

---

## Features

### Core Features

- [x] **Audio Player**
  - Play/Pause controls
  - Speed control (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x)
  - A-B Loop (repeat difficult sections)
  - Progress bar with seek
  - Volume control
  - Skip forward/backward (10 seconds)

- [x] **Content Library**
  - Categories: School, College, Professor, Slow Learners
  - Difficulty levels: Beginner, Intermediate, Advanced
  - Search functionality
  - Add custom audio (for professors)

- [x] **Transcript Viewer**
  - Word-by-word sync ready
  - Multiple language support (English, Hindi, Tamil, Telugu)
  - Toggle transcript visibility

- [x] **Progress Tracking**
  - Save listening sessions
  - Track completed lessons
  - Listening statistics
  - Clear progress option

### User Experience

- 🎨 **Claymorphism Design** - Soft 3D, kid-friendly interface
- 📱 **Responsive** - Works on mobile, tablet, desktop
- 🌐 **Single HTML File** - Easy to host anywhere
- 💾 **LocalStorage** - No backend required

---

## Tech Stack

### Built With
- **HTML5** - Semantic structure
- **Tailwind CSS** - Styling (via CDN)
- **JavaScript** - Interactivity
- **LocalStorage** - Data persistence

### Fonts
- [Baloo 2](https://fonts.google.com/specimen/Baloo+2) - Headings
- [Comic Neue](https://fonts.google.com/specimen/Comic+Neue) - Body text

### Icons
- [Lucide](https://lucide.dev) - SVG icons

---

## Getting Started

### Quick Start (Local)

1. Clone the repository:
```bash
git clone https://github.com/Parafounder01/Kid-english-learning-.git
cd Kid-english-learning-
```

2. Open `index.html` in your browser:
```bash
# Double-click index.html
# OR
npx serve index.html
```

3. That's it! The app works offline.

### Requirements
- Any modern browser (Chrome, Firefox, Edge, Safari)
- No server needed
- No installation required

---

## Deployment

### GitHub Pages (Free Hosting)

1. **Push to GitHub**
```bash
git add index.html README.md
git commit -m "Add ListenUp English Listening App"
git push origin main
```

2. **Enable GitHub Pages**
   - Go to Repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save

3. **Your site is live at:**
   ```
   https://parafounder01.github.io/Kid-english-learning-/
   ```

### Alternative Hosting

| Platform | Instructions |
|----------|-------------|
| **Vercel** | Drag & drop the HTML file |
| **Netlify** | Drag & drop the HTML file |
| **Cloudflare Pages** | Connect GitHub repo |
| **Replit** | Create repl, upload HTML |

---

## How to Use

### For Students
1. Open the app
2. Browse lessons by category
3. Click a lesson to start
4. Use speed control to slow down
5. Set A-B loop for difficult sections
6. Track your progress

### For Professors
1. Open the app
2. Go to Player section
3. Add new audio with title and URL
4. Set category and difficulty
5. Add transcript if available

---

## Adding Custom Audio

The app supports external audio URLs:

```html
<!-- Supported formats -->
MP3:  https://example.com/audio.mp3
OGG:  https://example.com/audio.ogg
WAV:  https://example.com/audio.wav

<!-- YouTube URLs -->
https://www.youtube.com/watch?v=...
```

---

## Configuration

### Changing Default Lessons

Edit the `defaultLessons` array in the JavaScript section:

```javascript
const defaultLessons = [
    {
        id: 1,
        title: "Your Lesson Title",
        description: "Lesson description",
        category: "school",  // school, college, professor, slow
        difficulty: "beginner",  // beginner, intermediate, advanced
        url: "https://your-audio-url.mp3",
        transcript: "Your transcript text..."
    }
];
```

### Supported Audio Sources

- Direct MP3/WAV/OGG URLs
- Any publicly accessible audio file
- CDN-hosted audio files

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

---

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Support

- **Issues:** [GitHub Issues](https://github.com/Parafounder01/Kid-english-learning-/issues)
- **Email:** support@example.com

---

## Roadmap

- [x] Audio player with speed control
- [x] A-B loop functionality
- [x] Content library with categories
- [x] Progress tracking
- [x] Responsive design
- [ ] YouTube audio support
- [ ] Word-by-word highlighting
- [ ] Multiple language transcripts
- [ ] Cloud sync

---

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Google Fonts](https://fonts.google.com) - Typography
- [Lucide](https://lucide.dev) - Icons

---

## Developer

- **GitHub:** [@Parafounder01](https://github.com/Parafounder01)

---

<div align="center">

**Made with ❤️ for English Learners** 🌟

[Live Demo](https://parafounder01.github.io/Kid-english-learning-/) • [Report Bug](https://github.com/Parafounder01/Kid-english-learning-/issues)

</div>