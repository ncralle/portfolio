# Nina Cralle — Portfolio Site

A clean, responsive, static portfolio site built with HTML, CSS, and vanilla JavaScript.
Designed to host on GitHub Pages and easy to edit by hand.

---

## 📁 Folder Structure

```
nina-portfolio/
├── index.html                  ← Homepage
├── projects.html               ← All projects grid
├── about.html                  ← About page
├── contact.html                ← Contact page
│
├── projects/
│   ├── myability.html          ← MyAbility case study (fully built)
│   ├── cookmate.html           ← CookMate (template, needs final copy)
│   ├── sunnyside.html          ← Sunnyside Communities (template)
│   ├── recre.html              ← RecRe Proposal Design (template)
│   └── sakura.html             ← Sakura Café (template)
│
├── css/
│   └── styles.css              ← All styles (one file, well commented)
│
├── js/
│   └── script.js               ← Nav toggle, scroll effects, animations
│
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── myability/      ← Put MyAbility images here
│   │   │   ├── cookmate/       ← Put CookMate images here
│   │   │   ├── sunnyside/      ← Put Sunnyside images here
│   │   │   ├── recre/          ← Put RecRe images here
│   │   │   └── sakura/         ← Put Sakura images here
│   │   └── about/              ← Put your headshot here
│   └── resume/
│       └── nina-cralle-resume.pdf  ← Drop your resume PDF here
│
└── README.md                   ← This file
```

---

## 🚀 Running Locally

### Option 1 — VS Code Live Server (recommended)
1. Open the `nina-portfolio/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Your browser opens at `localhost:5500` with live reloading

### Option 2 — Python server
```bash
cd nina-portfolio
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

### Option 3 — Node http-server
```bash
npm install -g http-server
cd nina-portfolio
http-server
```

> **Note:** Always run through a local server, not by double-clicking the HTML files directly.
> File-path issues will appear if you open HTML files as `file://` URLs.

---

## 📦 Publishing to GitHub Pages

### First time setup
1. Create a new GitHub repository (e.g. `portfolio`)
2. In the `nina-portfolio/` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Updating the site
```bash
git add .
git commit -m "Update projects page"
git push
```
GitHub Pages will automatically redeploy within ~1 minute.

> **Custom domain:** If you want `ninacralle.com`, go to Settings → Pages → Custom Domain and add your domain. You'll also need a CNAME record with your DNS provider.

---

## ✏️ How to Edit Content

### Updating text
Search for `[ADD FINAL COPY]` and `REPLACE` comments throughout the HTML files.
They mark exactly where to swap in real text.

### Adding images
1. Drop your image files into the correct folder under `assets/images/`
2. Find the comment block that looks like:
   ```html
   <!-- REPLACE with:
     <img src="../assets/images/projects/myability/hero.jpg" alt="..." class="project-img" />
   -->
   ```
3. Delete the `<div class="img-placeholder">` tag above it
4. Uncomment the `<img>` tag (remove `<!--` and `-->`)
5. Update the `alt=""` attribute with a real description

### Recommended image sizes
| Image type | Recommended size | Format |
|---|---|---|
| Project hero (wide) | 1400 × 600px | JPG or WebP |
| Project card cover | 800 × 540px | JPG or WebP |
| Solution / feature screenshots | 600 × 450px | PNG or JPG |
| Wireframe / process images | 400 × 400px | PNG or JPG |
| Headshot | 600 × 750px | JPG |

Compress all images before uploading. Use [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com).

### Updating your email and LinkedIn
Search for `your.email@example.com` and `linkedin.com/in/ninacralle` and replace with your real values.

### Adding your resume
Drop your PDF at `assets/resume/nina-cralle-resume.pdf`. The Resume button on the About and Contact pages will automatically link to it.

---

## ➕ Adding a New Project

1. Duplicate any existing project file (e.g. `projects/cookmate.html`)
2. Rename it (e.g. `projects/newproject.html`)
3. Update the title, meta tags, content, and image paths
4. Add a new `<a href="projects/newproject.html" class="card">` block to:
   - `index.html` (featured projects grid)
   - `projects.html` (full projects grid)
5. Update the `← Previous` / `Next project →` links in the adjacent project pages

---

## 🎨 Customizing the Design

All design tokens (colors, fonts, spacing) live at the top of `css/styles.css` inside the `:root {}` block.

```css
:root {
  --color-accent: #B07A52;   /* ← Change this to update the accent color everywhere */
  --font-display: 'Cormorant Garamond', ...;  /* ← Swap in a different Google Font here */
}
```

**To change the accent color:** Update `--color-accent` in `css/styles.css`.
**To change the font:** Update the Google Fonts `<link>` in each HTML `<head>` and update the `--font-display` / `--font-body` variables in CSS.

---

## ✅ Pre-Launch Checklist

- [ ] Replace all `[ADD FINAL COPY]` placeholders with real content
- [ ] Replace all `img-placeholder` divs with real `<img>` tags
- [ ] Update email address in `contact.html`
- [ ] Update LinkedIn URL in all files (search for `linkedin.com/in/ninacralle`)
- [ ] Add your resume PDF at `assets/resume/nina-cralle-resume.pdf`
- [ ] Add your headshot at `assets/images/about/headshot.jpg`
- [ ] Fill in project years (search for `[YEAR]`)
- [ ] Test on mobile and tablet
- [ ] Test keyboard navigation (tab through the site)
- [ ] Run through [WAVE accessibility checker](https://wave.webaim.org/)
- [ ] Compress all images before pushing

---

## 🔧 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JS** — mobile nav toggle, scroll effects, intersection observer animations
- **Google Fonts** — Cormorant Garamond + DM Sans
- No frameworks, no build tools, no dependencies

---

Made with care. — Nina Cralle
