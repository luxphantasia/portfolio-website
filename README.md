# paradyse Portfolio Website

**Status:** 🟢 LIVE (v1.0 - Placeholder Content)  
**Built:** February 20, 2026  
**Vibe:** Dark, chill, neutral, minimal

---

## 📁 Files

- `index.html` — Main page structure
- `styles.css` — Dark theme styling
- `script.js` — Interactive functionality (commission status, smooth scroll)
- `README.md` — This file

---

## 🚀 How to View Locally

```bash
cd website
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 🌐 Deploy Options

### Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd website
vercel --prod
```

### Netlify (Free)
```bash
# Drag & drop the website folder to netlify.com
# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages (Free)
```bash
# Create a GitHub repo, push files
# Enable GitHub Pages in repo settings
```

---

## 📝 TODO: Add Your Content

### Portfolio Pieces (Priority)
When you have images/videos ready, send them to me and I'll:
1. Add them to `/website/images/` folder
2. Update the portfolio grid in `index.html`
3. Add titles + descriptions

**What I need from you:**
- 10-20 portfolio images (PNG/JPG) or short videos (MP4/GIF)
- 1-2 sentence description for each
- Project name / client (or "Personal Project" if anonymous)

### Commission Status (Live Data)
Currently hardcoded in `script.js`. To make it live:
- Connect to your Google Sheet commission tracker
- Auto-update based on active commissions
- I'll set this up once you confirm the site structure

### Blog/News Section
To add blog posts:
- Copy the `<article>` structure in `index.html`
- Update date, title, and content
- Or I can set up a simple CMS (Sanity, Contentful) if you want easier updates

---

## 🎨 Customization

### Colors
Edit in `styles.css` under `:root`:
```css
--bg-primary: #0a0a0a;     /* Main background */
--bg-secondary: #121212;   /* Cards, sections */
--accent: #7c7c7c;         /* Buttons, links */
```

### Text Content
All text is in `index.html` — just edit the content between tags.

### Fonts
Currently using system fonts. To add a custom font:
1. Add Google Fonts link in `<head>`
2. Update `font-family` in `styles.css`

---

## 📊 Analytics (Optional)

To add analytics later:
- **Plausible** (privacy-focused, paid): Add script tag to `<head>`
- **Google Analytics** (free): Add GA4 tag to `<head>`
- **Fathom** (simple, paid): Add script tag

---

## ✅ Current Features

- [x] Dark, neutral theme
- [x] Responsive (mobile-friendly)
- [x] About section with stats
- [x] Services + pricing breakdown
- [x] Portfolio grid (placeholders)
- [x] Commission status tracker
- [x] Blog/News section
- [x] Credits section
- [x] Contact info (Discord + email)
- [x] Smooth scroll navigation
- [x] Fade-in animations

---

## 🔧 Future Enhancements

- [ ] Connect live commission data
- [ ] Add portfolio images
- [ ] Blog CMS integration
- [ ] Contact form (Formspree, EmailJS)
- [ ] Analytics
- [ ] Social media links (when set up)
- [ ] Testimonials section
- [ ] Process/workflow section

---

**Built by:** Clawa ⚡  
**Questions?** DM me or edit the files directly.
