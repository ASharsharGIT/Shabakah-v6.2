# SHABAKAH Integrated Technology - Premium Website

## 🎯 Project Overview

A premium, enterprise-grade, fully bilingual (Arabic/English) multi-page website for SHABAKAH Integrated Technology - a Saudi-based ICT enterprise with 28+ years of excellence.

### ✨ Key Features

- **Glassmorphism Design**: Modern iOS-inspired frosted glass effects throughout
- **Fully Bilingual**: Seamless Arabic (RTL) and English (LTR) support
- **Premium Animations**: Parallax scrolling, 3D card tilts, magnetic cursor, scroll animations
- **Responsive Design**: Mobile-first, tablet-optimized, desktop-enhanced
- **Performance Optimized**: Fast loading, lazy loading, optimized assets
- **Accessibility**: WCAG 2.1 AA compliant
- **Enterprise Credibility**: Professional, sophisticated visual identity

## 📁 Project Structure

```
Shabakah v1.2/
├── index.html                  # Homepage
├── about.html                  # About page with timeline
├── services.html               # Services overview (to be added)
├── contact.html                # Contact page (to be added)
├── partners.html               # Partners page (to be added)
├── solutions.html              # Solutions page (to be added)
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Core styles & variables
│   │   ├── glassmorphism.css   # Glass effect system
│   │   ├── animations.css      # Animation library
│   │   ├── components.css      # Component-specific styles
│   │   └── pages.css           # Page-specific styles
│   │
│   ├── js/
│   │   ├── main.js             # Main application logic
│   │   ├── language.js         # Bilingual system
│   │   ├── animations.js       # Animation controllers
│   │   └── particles.js        # Particle background system
│   │
│   └── images/                 # Image assets
│       ├── certifications/     # Certification badges
│       ├── about/              # About page images
│       └── ...
│
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML/CSS/JavaScript

### Installation

1. **Clone or download** this project to your local machine

2. **Open in browser**:
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended):
   
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # VS Code Live Server
   # Right-click index.html → "Open with Live Server"
   ```

3. **Navigate** to `http://localhost:8000` (or your server port)

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#0A1628`
- **Primary Blue**: `#1E3A8A`
- **Accent Blue**: `#3B82F6`
- **Accent Cyan**: `#06B6D4`
- **Accent Gold**: `#F59E0B` (Saudi identity)

### Typography
- **English**: Inter, SF Pro Display
- **Arabic**: Tajawal, IBM Plex Sans Arabic
- **Fluid Typography**: Responsive scaling with `clamp()`

### Glassmorphism Specifications
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.125);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
border-radius: 16px;
```

## 🌐 Bilingual System

### Language Switching
- **Toggle Button**: Top navigation (EN | العربية)
- **Persistent**: Language preference saved in localStorage
- **URL Structure**: `/en/...` vs `/ar/...` (optional)
- **RTL Support**: Complete right-to-left layout for Arabic

### Adding Translations
Edit `assets/js/language.js`:
```javascript
const translations = {
    en: { /* English content */ },
    ar: { /* Arabic content */ }
};
```

## 🎪 Interactive Features

### Implemented
- ✅ Custom magnetic cursor (desktop)
- ✅ Scroll progress bar
- ✅ Loading screen animation
- ✅ Sticky header with blur effect
- ✅ Mobile hamburger menu
- ✅ 3D card tilt effects
- ✅ Animated counters
- ✅ Parallax scrolling
- ✅ Particle background
- ✅ Scroll-triggered animations
- ✅ Testimonial carousel
- ✅ Back-to-top button
- ✅ Cookie consent banner
- ✅ Search modal
- ✅ Interactive timeline

## 📱 Responsive Breakpoints

```css
Mobile:        320px - 767px
Tablet:        768px - 1023px
Desktop:       1024px - 1439px
Large Desktop: 1440px+
```

## ♿ Accessibility

- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast (WCAG AA)
- Screen reader support
- `prefers-reduced-motion` respect

## 🔧 Customization

### Changing Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --primary-navy: #0A1628;
    --accent-cyan: #06B6D4;
    /* ... */
}
```

### Adding New Pages
1. Copy `about.html` as a template
2. Update navigation links
3. Add page-specific content
4. Include in sitemap

### Modifying Animations
Edit `assets/js/animations.js` for animation controllers
Edit `assets/css/animations.css` for keyframe animations

## 📊 Performance

### Optimization Techniques
- **Lazy Loading**: Images load on scroll proximity
- **Code Splitting**: Modular JavaScript
- **CSS Minification**: Production-ready
- **Asset Compression**: Optimized images
- **Reduced Motion**: Respects user preferences

### Target Metrics
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🛠️ Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome for Android (latest)

## 📝 To-Do / Roadmap

### Pages to Add
- [ ] Services individual pages (7 pages)
- [ ] Solutions page
- [ ] Partners page
- [ ] Contact page with map
- [ ] Projects/Case Studies page
- [ ] Blog/Insights page

### Features to Add
- [ ] Service Worker for offline support
- [ ] Dark mode toggle
- [ ] Advanced search functionality
- [ ] Newsletter subscription backend
- [ ] Contact form backend
- [ ] CMS integration (Strapi/Contentful)

### Enhancements
- [ ] Add more micro-interactions
- [ ] Implement A/B testing
- [ ] Add analytics integration
- [ ] SEO optimization (meta tags, structured data)
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)

## 📦 Dependencies

### Fonts (CDN)
- Google Fonts (Inter, Tajawal)

### Icons
- Custom icon font/SVG sprites (to be implemented)
- Or use Font Awesome / Feather Icons

### External Libraries (Optional)
- **GSAP**: Advanced animations
- **Swiper.js**: Touch sliders
- **AOS**: Animate on scroll
- None currently used - pure vanilla JS!

## 🎓 Learning Resources

- **Glassmorphism**: https://glassmorphism.com/
- **CSS Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Intersection Observer**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## 📄 License

© 2024 SHABAKAH Integrated Technology. All rights reserved.

This is a proprietary project developed for SHABAKAH Integrated Technology.

## 👥 Credits

**Design & Development**: Custom premium design system
**Client**: SHABAKAH Integrated Technology
**Year**: 2024

## 📞 Support

For questions or issues:
- **Email**: info@shabakah.sa
- **Phone**: +966 XX XXX XXXX
- **Location**: Riyadh, Saudi Arabia

---

**Built with ❤️ for enterprise excellence** | SHABAKAH Integrated Technology
