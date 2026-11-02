# Priyansh Manav — Premium Multi-Page Developer Portfolio

> An award-winning, agency-grade developer portfolio engineered with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js**.

---

## 🌟 Overview & Brand Identity

- **Developer:** Priyansh Manav
- **Title:** Full-Stack Developer | Creative Coder
- **Education:** B.Tech in Computer Science Engineering (3rd Year)
- **Primary Stack:** React.js, Tailwind CSS, Python, Django, PostgreSQL, REST APIs, Git & GitHub

### Featured Real-World Projects:
1. **Expense Manager:** Full-stack personal finance application with a React frontend, Django REST backend, PostgreSQL database, and dynamic data visualization.
2. **StyleX E-Commerce:** Modern fashion storefront featuring interactive product browsing, dynamic cart drawer, wishlist management, and fluid animations.
3. **Daily Sadhana:** Mindful prayer and routine web application designed with clean interfaces and responsive touch interactions.

---

## 🎨 Signature Design System

- **Primary Background:** `#050816`
- **Secondary Background:** `#0A1024`
- **Card Surfaces:** `#101A32`
- **Electric Blue:** `#3B82F6`
- **Neon Violet:** `#8B5CF6`
- **Cyan Accent:** `#22D3EE`
- **Primary Text:** `#F8FAFC`
- **Secondary Text:** `#94A3B8`
- **Subtle Borders:** `rgba(148, 163, 184, 0.18)`

### Typography:
- **Headings:** Space Grotesk (Weights 500, 600, 700)
- **Body & Interface:** Inter (Weights 400, 500, 600)
- **Technical & Code:** JetBrains Mono (Weights 400, 500)

---

## 🗺️ Multi-Page Website Architecture (10 Genuine Routes)

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Cinematic hero, cycling role text, 3D interactive mesh, floating code panel, project & skill previews, contact banner. |
| `/about` | **About Me** | Engineering mindset, education details, problem-solving approach, and core development philosophy. |
| `/skills` | **Skills Matrix** | Interactive categorization across Frontend, Backend, Databases, Tools, and UI Engineering (no fake percentages). |
| `/projects` | **Projects Showcase** | Searchable, filterable showcase of featured full-stack projects with live links and GitHub repositories. |
| `/projects/:slug` | **Project Details** | Dedicated case study template featuring architecture details, problem/solution, and technical challenges. |
| `/experience` | **Experience & Journey** | Transparent academic timeline (B.Tech 3rd Year) and verified project milestones. |
| `/services` | **Services** | Core offerings: Frontend Development, Full-Stack Development, Responsive Design, UI Prototyping, REST APIs, and Redesign. |
| `/resume` | **Resume** | Printable & downloadable curriculum vitae with built-in printable styling and PDF download trigger. |
| `/contact` | **Contact** | Interactive contact form with client-side validation, direct email copy widget, and social channels. |
| `*` | **Custom 404** | Stylized not-found page with quick route navigation back to safety. |

---

## 🚀 Complete Installation Guide (Windows)

### Step 1: Check Prerequisites
Open PowerShell or Command Prompt in VS Code:
```powershell
node -v
npm -v
```
*Note: Recommended Node.js version is LTS (v20+ or v24+). If Node.js is missing, download it from [nodejs.org](https://nodejs.org/).*

### Step 2: Navigate to Project Directory
```powershell
cd priyansh-portfolio
```

### Step 3: Install Dependencies
```powershell
npm install
```
Installed packages:
- `react` & `react-dom` (React 19)
- `react-router-dom` (v7)
- `framer-motion` (v14)
- `tailwindcss` & `@tailwindcss/vite` (Tailwind CSS v4)
- `three` (High-performance 3D canvas)
- `lucide-react` (Iconography)

### Step 4: Start the Development Server
```powershell
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173`).

### Step 5: Test the Production Build
```powershell
npm run build
npm run preview
```

---

## 📁 Project Structure

```
priyansh-portfolio/
├── public/
│   ├── favicon.svg          # Custom SVG PM Monogram favicon
│   └── resume.pdf           # Downloadable PDF resume file
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── BackToTop.jsx         # Smooth scroll-to-top floating button
│   │   ├── FloatingCodeCard.jsx  # Floating code snippet terminal with syntax highlights
│   │   ├── Footer.jsx            # Agency-grade dark footer with quick links
│   │   ├── MagneticButton.jsx    # Physics-based hover attraction button
│   │   ├── Navbar.jsx            # Glassmorphism navigation with mobile drawer
│   │   ├── PageTransition.jsx    # Silky route exit/entry animations
│   │   ├── ProjectCard.jsx       # 3D tilt interactive card with tech tags
│   │   ├── Scene3D.jsx           # Three.js icosahedron/particles with fallback
│   │   ├── ScrollProgress.jsx    # Reading scroll progress indicator
│   │   ├── SectionHeading.jsx    # Reusable editorial section title component
│   │   └── SocialIcons.jsx       # Clean SVG icons for GitHub, LinkedIn, etc.
│   ├── data/
│   │   ├── experience.js    # Academic timeline and development philosophy
│   │   ├── navigation.js    # Route links and social contact entries
│   │   ├── projects.js      # Central configuration for all featured projects
│   │   ├── services.js      # List of development and engineering services
│   │   └── skills.js        # Categorized technical skills matrix
│   ├── layouts/
│   │   └── MainLayout.jsx   # Global layout shell with ambient gradients & grid
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── index.css            # Tailwind CSS v4 @theme, custom scrollbars, & utilities
│   ├── App.jsx              # React Router v7 routes with AnimatePresence
│   └── main.jsx             # React entry point
├── index.html               # Google Fonts (Space Grotesk, Inter, JetBrains Mono)
├── package.json
└── vite.config.js           # Vite plugin configuration with code-splitting chunks
```

---

## 🛠️ Customization & Updating Content

- **Adding / Editing Projects:** Open `src/data/projects.js`. You can add new objects or edit URLs, descriptions, and feature lists.
- **Updating Skills:** Edit `src/data/skills.js` to add tools or adjust descriptions.
- **Replacing Resume PDF:** Save your exported PDF file as `public/resume.pdf`. The download link on `/resume` will automatically serve this file.
- **Connecting Contact Form to a Backend:**
  In `src/pages/Contact.jsx`, replace the mock `setTimeout` in `handleSubmit` with your API endpoint or service (e.g. Formspree endpoint `https://formspree.io/f/YOUR_FORM_ID` or your Django REST backend).

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended):
1. Push your code to a new GitHub repository:
   ```powershell
   git remote add origin https://github.com/your-username/priyansh-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import the GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Vercel will build and provide a live production URL with automatic HTTPS and global CDN caching.

### Single Page Application (SPA) Routing on Vercel:
Create a `vercel.json` in the root folder if you need rewrite rules for deep linking:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📄 License & Credits
Designed and engineered with pride by **Priyansh Manav**.
