# Ahnaf Ahtasyafi - Personal Portfolio

A high-performance, futuristic portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a "Deep Blue/Corporate Tech" aesthetic with glassmorphism, 3D-style shadows, and smooth animations.

## 🚀 Features

- **Dual Typing Animations**: Name and cycling interests in the hero section
- **Real-time Weather Widget**: Displays current weather for Surabaya
- **Scroll-triggered Animations**: All sections fade in and slide up on scroll
- **Glassmorphism Design**: Modern glass-effect cards throughout
- **3D Hover Effects**: Cards lift and glow on hover
- **Responsive Design**: Optimized for all screen sizes
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron (Display), Inter (Body)

## 📦 Installation

1. **Clone or extract the project**

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx          # Root layout with fonts
│   ├── page.jsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.jsx          # Navigation with weather
│   ├── Hero.jsx            # Hero section with typing animations
│   ├── About.jsx           # About section with stats
│   ├── Research.jsx        # Research papers and certificates
│   ├── Projects.jsx        # Projects grid
│   ├── ProjectCard.jsx     # Individual project card
│   ├── DigitalProducts.jsx # Digital products section
│   ├── ProductCard.jsx     # Individual product card
│   ├── WeatherWidget.jsx   # Real-time weather display
│   ├── SectionTitle.jsx    # Reusable section headers
│   └── Footer.jsx          # Footer with social links
├── lib/
│   └── data.js             # Static data (projects, certs, etc.)
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.js` to customize:
- Projects
- Certificates
- Research papers
- Digital products
- About text and stats
- Social links

### Change Colors

Modify the color scheme in `app/globals.css`:
```css
:root {
  --color-primary: #0ea5e9;
  --color-accent: #06b6d4;
  --color-glow: #22d3ee;
}
```

### Update Typing Animations

Edit the interests array in `components/Hero.jsx`:
```javascript
const interests = ['Computer Vision', 'Riset AI', 'Robotics', 'Website Dev'];
```

### Weather Location

Change the default coordinates in `components/WeatherWidget.jsx`:
```javascript
const lat = -7.2575;  // Your latitude
const lon = 112.7521; // Your longitude
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📱 Features Breakdown

### Hero Section
- Typing animation for name
- Cycling interests with type/delete effect
- 3D animated orb with floating particles
- CTA buttons with glow effects

### Weather Widget
- Real-time weather data from Open-Meteo API
- Auto-detects temperature and conditions
- Glassmorphism styling
- Updates every 10 minutes

### Scroll Animations
- All sections use `whileInView` from Framer Motion
- Fade in and slide up effects
- Staggered delays for cards

### Hover Effects
- Scale transform on cards
- Glow effect on hover
- Color transitions
- Smooth animations

## 🎯 Performance Tips

- Images are lazy-loaded automatically by Next.js
- Animations use GPU-accelerated transforms
- Weather API calls are cached
- Framer Motion uses optimized motion values

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to add a feature? Feel free to open an issue or submit a PR.

## 📞 Contact

- **Email**: ahnaf@example.com
- **LinkedIn**: [linkedin.com/in/ahnaf](https://linkedin.com/in/ahnaf)
- **GitHub**: [github.com/ahnaf](https://github.com/ahnaf)

---

Built with ❤️ by Ahnaf Ahtasyafi using Next.js and Framer Motion
