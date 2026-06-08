# Akshat Raj — Portfolio

A clean, professional portfolio built with React. Easy to customize and host for free.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm start
# Opens at http://localhost:3000
```

---

## ✏️ How to Customize

**All your content lives in one file:**

```
src/data.js
```

Open it and update:
- Your name, bio, and links
- Stats (CGPA, projects count, etc.)
- Skills and tech stack
- Projects (title, description, GitHub/live links)
- Experience (internships, roles)
- Education
- Achievements

**No coding required** — just fill in the fields and save. The page hot-reloads instantly.

---

## 🎨 Changing Colors / Fonts

Open `src/index.css` and edit the `:root` block at the top:

```css
:root {
  --accent-mid: #4F46E5;   /* ← Change this for the main accent color */
  --bg: #F9F8F5;           /* ← Page background */
  --text-primary: #0F0F0F; /* ← Main text */
}
```

Fonts are loaded from Google Fonts in `public/index.html`. Change the `<link>` tag there and update `--font-display` / `--font-body` in the CSS.

---

## 📦 Build for Production

```bash
npm run build
```

Creates an optimized `build/` folder ready to deploy.

---

## 🌐 Free Hosting Options

### Option 1 — Vercel (Recommended, easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Click Deploy — done! You get a free `yourname.vercel.app` URL

### Option 2 — Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build` | Publish dir: `build`

### Option 3 — GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run: `npm run deploy`

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          ← Add meta tags, favicon here
├── src/
│   ├── data.js             ← ✏️  ALL YOUR CONTENT (edit this!)
│   ├── index.css           ← 🎨  All styles (edit for theme)
│   ├── App.js              ← Main layout
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Education.jsx
│       ├── Achievements.jsx
│       └── Contact.jsx
└── package.json
```

---

## 💌 Contact Form

The form currently opens your mail client via `mailto:`. For a real form backend:

1. **Formspree** (free, easiest): Sign up at [formspree.io](https://formspree.io), get a form ID, and replace the `handleSubmit` logic in `Contact.jsx`:
```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

2. **EmailJS** — another good free option.

---

Made with ❤️ using React
