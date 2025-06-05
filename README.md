# NexusPrime Innovations Website

A modern, responsive website for NexusPrime Innovations - showcasing AI agent development tools and platforms. Built with Next.js, Tailwind CSS, and deployed as a static site.

## 🚀 Live Demo

Visit the live website: [nexusprimeinnovations.com](https://nexusprimeinnovations.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Contributing](#contributing)

## ✨ Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Beautiful gradient backgrounds and animations
- Clean, professional UI with Tailwind CSS
- Dark/light logo variants for different backgrounds

### 🧭 **Navigation**
- Sticky header with smooth scrolling
- Dropdown menu for Products with hover effects
- Mobile-responsive hamburger menu
- Breadcrumb navigation on product pages

### 📱 **Pages & Sections**
- **Homepage**: Hero, Products Overview, Features, Testimonials, CTA
- **Product Pages**: 
  - AI Agent Builder
  - Agent Platform  
  - AI Code Editor
- **About Page**: Company mission, values, and team
- **Contact Page**: Contact form and company information

### 🔍 **SEO Optimized**
- Automatic sitemap generation
- Meta tags and Open Graph support
- Semantic HTML structure
- Fast loading times with static generation

### ⚡ **Performance**
- Static site generation for optimal performance
- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- Fast loading animations with Framer Motion

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with static export
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + [Heroicons](https://heroicons.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Deployment**: Static hosting (Cloudflare Pages, Vercel, Netlify)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nexusprimeinnovationswebsite.git
   cd nexusprimeinnovationswebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nexusprimeinnovationswebsite/
├── public/
│   ├── images/
│   │   ├── logo.svg              # Main logo (black)
│   │   └── logo-dark.svg         # Dark version logo (white)
│   └── sitemap.xml               # Auto-generated sitemap
├── scripts/
│   └── generate-sitemap.js       # Sitemap generation script
├── src/
│   ├── components/
│   │   ├── home/                 # Homepage components
│   │   │   ├── Hero.js
│   │   │   ├── Features.js
│   │   │   ├── ProductsOverview.js
│   │   │   ├── Testimonials.js
│   │   │   └── CTASection.js
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.js         # Navigation with dropdown
│   │   │   └── Footer.js
│   │   ├── products/             # Product-specific components
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.js
│   │       ├── Card.js
│   │       ├── Container.js
│   │       └── FadeIn.js
│   ├── pages/
│   │   ├── products/
│   │   │   ├── agent-builder.js
│   │   │   ├── agent-platform.js
│   │   │   └── code-editor.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   └── index.js              # Homepage
│   ├── styles/
│   │   └── globals.css           # Global styles & Tailwind
│   └── lib/                      # Utility functions
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json
└── README.md
```

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Run linting
npm run lint

# Generate sitemap only
npm run generate-sitemap
```

### Key Development Notes

1. **Static Export**: The site uses `output: 'export'` for static generation
2. **Sitemap**: Automatically generated during build process
3. **Images**: Unoptimized for static hosting compatibility
4. **Styling**: Utility-first approach with Tailwind CSS
5. **Components**: Modular, reusable component architecture

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route to `scripts/generate-sitemap.js`
3. Update navigation in `src/components/layout/Header.js` if needed

### Customizing Styles

- Edit `tailwind.config.js` for theme customization
- Add global styles in `src/styles/globals.css`
- Use Tailwind utility classes for component styling

## 🚀 Deployment

### Build Process

```bash
# Generate sitemap and build static files
npm run build
```

This creates an `out/` directory with static files ready for deployment.

### Deployment Options

#### **Cloudflare Pages** (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy automatically on push

#### **Vercel**
```bash
npm install -g vercel
vercel --prod
```

#### **Netlify**
1. Connect repository or drag & drop `out/` folder
2. Set build command: `npm run build`
3. Set publish directory: `out`

#### **GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic deployment

### Environment Variables

No environment variables required for basic deployment. The site is fully static.

## 🔍 SEO & Performance

### SEO Features
- ✅ Automatic sitemap generation
- ✅ Meta tags and Open Graph support
- ✅ Semantic HTML structure
- ✅ Fast loading times
- ✅ Mobile-responsive design
- ✅ Structured data ready

### Performance Optimizations
- Static site generation for fast loading
- Optimized component lazy loading
- Minimal JavaScript bundle
- Efficient CSS with Tailwind's purging
- Optimized images with Next.js Image component

### Lighthouse Scores
Target scores for production:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🎨 Brand Guidelines

### Logo Usage
- **Light backgrounds**: Use `/images/logo.svg` (black logo)
- **Dark backgrounds**: Use `/images/logo-dark.svg` (white logo)
- **Minimum size**: 120px width
- **Clear space**: Maintain 20px minimum around logo

### Color Palette
```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-600: #2563eb;
--primary-700: #1d4ed8;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-600: #4b5563;
--gray-900: #111827;
```

### Typography
- **Headings**: System font stack with bold weights
- **Body**: System font stack, 16px base size
- **Code**: Monospace font family

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and structure
- Test on multiple devices and browsers
- Ensure accessibility standards are met
- Update documentation for new features
- Keep components modular and reusable

## 📞 Support

For questions or support:
- **Email**: hello@nexusprimeinnovations.com
- **Website**: [nexusprimeinnovations.com](https://nexusprimeinnovations.com)

## 📄 License

This project is proprietary and confidential. All rights reserved by NexusPrime Innovations.

---

**Built with ❤️ by the NexusPrime Innovations team** 