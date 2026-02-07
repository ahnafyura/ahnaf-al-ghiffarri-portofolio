# Quick Start Guide

## Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Customize Your Content

#### Update Personal Info
Edit `lib/data.js` to change:
- Your projects
- Certificates and achievements
- Research papers
- Digital products
- Social media links

#### Update Hero Section
Edit `components/Hero.jsx` to change:
- Your name
- Your interests (cycling text)
- Hero description

#### Update About Section
Edit the `aboutText` object in `lib/data.js`:
- Bio text
- Stats (years experience, projects, etc.)

#### Change Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --color-primary: #0ea5e9;    /* Main blue */
  --color-accent: #06b6d4;     /* Cyan accent */
  --color-glow: #22d3ee;       /* Glow color */
}
```

### 4. Build for Production
```bash
npm run build
npm start
```

## Common Customizations

### Add a New Project
In `lib/data.js`, add to the `projects` array:
```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description",
  tags: ["Tag1", "Tag2"],
  link: "https://your-link.com",
  image: "/projects/your-image.jpg"
}
```

### Change Weather Location
In `components/WeatherWidget.jsx`, update coordinates:
```javascript
const lat = -7.2575;  // Your latitude
const lon = 112.7521; // Your longitude
```

### Add More Social Links
In `lib/data.js`, add to `socialLinks`:
```javascript
{
  name: "Twitter",
  url: "https://twitter.com/yourusername",
  icon: "Twitter"
}
```

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure all imports use the correct case and paths.

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your portfolio is live 🚀
