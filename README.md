# 🎨 Aleksandar Jovanović — Portfolio Website

A modern, elegant, and fully responsive portfolio website built for professional photographer & graphic designer **Aleksandar Jovanović**.

Developed with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [Swiper.js](https://swiperjs.com/), and [Animate.css](https://animate.style/).  
_Integrated with [Sanity CMS](https://www.sanity.io/), so the client can manage all content independently._

---

## ✨ Key Features

### 📸 Portfolio Categories (with Modal Galleries)
- Each category contains multiple works (photos)
- Click a category to open a fullscreen modal gallery
- Click a photo to enter **ImageGalleryModal** with:
  - Swipe navigation (left/right)
  - Keyboard navigation (ESC, ←, →)
  - Smooth transitions
- **Fully responsive:**  
  &nbsp;&nbsp;• Desktop — grid layout  
  &nbsp;&nbsp;• Mobile — Swiper slider for horizontal category scroll

### 📰 News / Blog Section
- Modern blog style layout in a Swiper carousel
- Cards open to fullscreen NewsModal
- Supports unlimited posts (Sanity-ready)
- Smooth animations and responsive breakpoints

### 🧾 About Section
- Fully editable text + image (CMS-ready)
- Fade-in animations on scroll
- Clean, professional typography

### 🖼 Hero Section
- Fullscreen hero with background image
- Animated scroll indicator
- Sanity-ready: editable image & text

### 📱 Mobile-Optimized Navigation
- Transparent navbar transitions on scroll
- Active section highlighting (custom React hook)
- Smooth scroll behavior
- Hamburger menu for mobile with animated overlay

### 📬 Contact Form (Web3Forms Integration)
- Secure, backend-free form handling
- `.env` protected API key
- Validations, error handling, and success feedback

### 🖥 Ultra-Wide Monitor Optimization
- Tailwind extended breakpoints: `1600px`, `1800px`, `2000px`
- Looks polished on 27–34" monitors

---

## 🔧 System Architecture

| Layer         | Technology              |
| ------------- | ---------------------- |
| **Frontend**  | React + Vite           |
| **Styling**   | Tailwind CSS v3        |
| **Animations**| Animate.css            |
| **Carousels** | Swiper.js              |
| **State**     | React Hooks & Custom   |
| **CMS**       | Sanity                 |
| **Deployment**| Hostinger + GitHub Actions |
| **Contact**   | Web3Forms API          |

---

## 🔐 Security & Best Practices

- API keys and CMS config stored in `.env` (never committed)
- Sanity will use public read-only tokens (frontend)
- Full write access restricted to protected subdomain (Studio)
- Git repo safe for public (no secrets ever committed)

---

## 🛠 Sanity CMS Integration

Client will be able to completely manage:

- **Hero:** Bg image, Main title, Subtitle
- **About:** Image, Bio/description
- **Portfolio:** Unlimited categories and photos
- **News / Blog:** Posts with title, cover image, content, tags, publish date

_Also includes:_
- Automatic image optimization (WebP, blur-up placeholders)
- Lazy loading for all gallery images
- GROQ queries for efficient filtering

---

## ⚡ Performance

- Lazy-load images
- Optimized modals
- GPU-accelerated transitions (Swiper)
- Tailwind JIT (tiny CSS bundle)
- Vite build (fast production bundling)

---

## 🧭 Quality of Life Features

- Smooth section scroll
- Active link highlighting
- Scroll lock for modals
- Custom Swiper arrows & pagination
- Touch-friendly mobile UI

---

## 🚀 Deployment Pipeline

> Automatic deployment with GitHub Actions (FTP upload):

- **Frontend:** Deploys to Hostinger (`public_html`)
- **Sanity Studio:** Deploys to subdomain (`public_html/dashboard`)
- **GitHub Actions:** Uses FTP (`FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_PORT`)

---

## 💡 Future Improvements

- Replace static data fully with Sanity datasets
- Photo alt-text generator for accessibility
- SEO + Open Graph thumbnails
- Multi-language support _(optional)_
- Video support in portfolio categories

---

## 👤 Author

**Jovan Ljusić**
[Portfolio Website](https://jovanljusic.com)
[GitHub: therealyhn](https://github.com/therealyhn)
