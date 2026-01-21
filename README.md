# 🎭 HUTMC Theatre Club Website

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A modern, responsive website for the Hull University Theatre and Music Club**

[🚀 Live Demo](#) • [📖 Documentation](#documentation) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 CSS Modules & Design System](#-css-modules--design-system)
- [🧪 Testing](#-testing)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📊 Performance](#-performance)
- [📄 License](#-license)

## ✨ Features

### 🎯 Core Features
- 📱 **Fully Responsive** - Seamless experience across all devices
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with Radix UI
- 🎨 **Modern Design** - Clean, professional aesthetic with smooth animations
- � **Lightning Fast** - Optimized performance with Vite and code splitting
- � **SEO Optimized** - Meta tags, semantic HTML, and structured data

### 🎭 Theatre Club Specific
- 🏠 **Dynamic Homepage** - Hero section, about preview, portfolio showcase
- 📅 **Events Management** - Upcoming shows, workshops, and club activities  
- 🖼️ **Interactive Gallery** - Photo galleries with lightbox functionality
- 👥 **Member Profiles** - Leadership team and department showcases
- 🎵 **Music & Theatre** - Separate sections for different performance types
- 📞 **Contact Forms** - Validated forms with error handling and success states
- 📱 **Mobile Navigation** - Hamburger menu with smooth animations

### 🔧 Developer Experience
- 🧪 **Comprehensive Testing** - Visual regression and functional behavior tests
- 🎯 **Type Safety** - PropTypes for runtime validation
- 📝 **Code Quality** - ESLint configuration with React best practices
- 🔄 **Hot Reload** - Instant development feedback with Vite HMR
- 📊 **Performance Monitoring** - Built-in performance analysis tools

## 🛠️ Technology Stack

<table>
<tr>
<td>

**Frontend**
- ⚛️ React 18.3.1
- 🏗️ Vite 5.4.19
- 🎨 CSS Modules
- 📱 JavaScript (ES2020)
- 🧭 React Router 6.30.1

</td>
<td>

**UI & Styling**
- 🎛️ Radix UI Components
- 🎬 Framer Motion
- 🎨 CSS Custom Properties
- 📐 Responsive Design
- 🌙 Theme System

</td>
<td>

**Development**
- 📋 ESLint 9.32.0
- 🧪 Custom Testing Suite
- 📊 Performance Analysis
- 🔍 PropTypes Validation
- 🛠️ Development Tools

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm** - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/hutmc-theatre-club.git
cd hutmc-theatre-club

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev
```

🎉 **That's it!** Open [http://localhost:5173](http://localhost:5173) to see the website.

### 📜 Available Scripts

```bash
# 🔧 Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run build:dev    # Build for development (unminified)
npm run preview      # Preview production build locally

# 🧹 Code Quality
npm run lint         # Run ESLint for code quality checks

# 🧪 Testing
npm run test:visual     # Run visual regression tests
npm run test:functional # Run functional behavior tests
```

## 📁 Project Structure

```
HUTMC/
├── 📂 src/
│   ├── 🧩 components/          # Reusable React components
│   │   ├── 🎛️ ui/             # Base UI components (buttons, inputs, etc.)
│   │   ├── 🏗️ layout/         # Layout components (navbar, footer)
│   │   └── 🏠 home/           # Home page specific components
│   ├── 📄 pages/              # Page components and routing
│   ├── 🪝 hooks/              # Custom React hooks
│   ├── 📚 lib/                # Utility functions and services
│   ├── 🎨 styles/             # Global styles and CSS modules
│   └── 🖼️ assets/             # Images and static assets
├── 🌐 public/                 # Static public assets
├── 🔧 scripts/                # Build and testing scripts
├── 📊 reports/                # Generated test reports
└── 📋 docs/                   # Additional documentation
```

## 🎨 CSS Modules & Design System

### 🧩 Component Styling

This project uses **CSS Modules** for component-scoped styling:

```jsx
// ✅ Component file
import styles from './Component.module.css';

function Component() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}
```

```css
/* 🎨 Component.module.css */
.container {
  padding: var(--spacing-lg);
  background: var(--color-background);
  border-radius: var(--radius);
}

.title {
  font-family: var(--font-display);
  color: var(--color-foreground);
}
```

### 🎯 Design Tokens

The project uses a comprehensive design token system:

<details>
<summary>🎨 <strong>Color Palette</strong></summary>

```css
/* Primary Colors */
--color-primary: hsl(43, 74%, 66%);
--color-primary-foreground: hsl(43, 74%, 10%);

/* Background Colors */
--color-background: hsl(240, 5%, 6%);
--color-foreground: hsl(240, 5%, 90%);

/* Accent Colors */
--color-gold: hsl(43, 74%, 66%);
--color-gold-bright: hsl(43, 84%, 76%);
--color-charcoal-deep: hsl(240, 5%, 8%);
```
</details>

<details>
<summary>📝 <strong>Typography</strong></summary>

```css
/* Font Families */
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```
</details>

<details>
<summary>📏 <strong>Spacing & Layout</strong></summary>

```css
/* Spacing Scale */
--spacing-xs: 0.5rem;
--spacing-sm: 0.75rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;

/* Border Radius */
--radius: 0.5rem;
--radius-sm: 0.25rem;
--radius-lg: 0.75rem;
```
</details>

## 🧪 Testing

### 📸 Visual Regression Testing

Ensure UI consistency across changes:

```bash
npm run test:visual
```

**Features:**
- 📷 Automated screenshot comparison
- 🎯 Component-level testing
- 📊 HTML reports with visual diffs
- 🔄 Baseline management

### ⚡ Functional Behavior Testing

Test user interactions and workflows:

```bash
npm run test:functional
```

**Coverage:**
- 🧭 Navigation and routing
- 📝 Form validation and submission
- 🖱️ User interactions (clicks, hovers)
- 📱 Responsive behavior
- ♿ Accessibility compliance

### 🛠️ Development Testing

Access the testing interface at `/visual-tests` during development for:
- 🎛️ Interactive component testing
- 📱 Responsive design validation
- 🎨 Visual debugging tools

## 📦 Deployment

### 🏗️ Production Build

```bash
npm run build
```

**Output:**
- 📦 **JavaScript Bundle**: ~509KB (gzipped: ~158KB)
- 🎨 **CSS Bundle**: ~109KB (gzipped: ~15KB)
- 🖼️ **Optimized Assets**: Images and fonts compressed
- 📄 **Static Files**: Ready for CDN deployment

### 🔍 Build Analysis

```bash
npm run build && npm run preview
```

Preview the production build locally to verify:
- ⚡ Loading performance
- 🎨 Visual consistency
- 📱 Responsive behavior
- 🔗 Link functionality

### 🚀 Deployment Platforms

This project is ready for deployment on:

- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment from Git
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable cloud hosting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 🔄 Development Workflow

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **💻 Develop** your changes with proper testing
4. **🧹 Lint** your code: `npm run lint`
5. **🧪 Test** thoroughly: `npm run test:visual && npm run test:functional`
6. **📝 Commit** with clear messages: `git commit -m 'Add amazing feature'`
7. **🚀 Push** to your branch: `git push origin feature/amazing-feature`
8. **📬 Submit** a Pull Request

### 📋 Contribution Guidelines

- ✅ Follow the existing code style and patterns
- 🧪 Add tests for new features
- 📝 Update documentation as needed
- 🎯 Keep commits focused and atomic
- 📱 Ensure responsive design compatibility
- ♿ Maintain accessibility standards

### 🐛 Bug Reports

When reporting bugs, please include:
- 🖥️ Browser and version
- 📱 Device and screen size
- 🔄 Steps to reproduce
- 📷 Screenshots if applicable
- 🔍 Console errors

## 📊 Performance

### 🚀 Optimization Features

- **⚡ Code Splitting** - Automatic route-based splitting
- **🗜️ Asset Compression** - Gzip/Brotli compression ready
- **🖼️ Image Optimization** - WebP format with fallbacks
- **📦 Bundle Analysis** - Size monitoring and optimization
- **🔄 Caching Strategy** - Optimal cache headers for static assets

### 📈 Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| 🏃 First Contentful Paint | < 1.5s | ~0.8s |
| 🎯 Largest Contentful Paint | < 2.5s | ~1.2s |
| 📱 Mobile Performance Score | > 90 | 95+ |
| 🖥️ Desktop Performance Score | > 95 | 98+ |

### 🔍 Monitoring

```bash
# Analyze bundle size
npm run build -- --analyze

# Performance audit
npm run preview
# Then use Lighthouse in Chrome DevTools
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| 🌐 Chrome | 90+ |
| 🦊 Firefox | 88+ |
| 🧭 Safari | 14+ |
| 🔷 Edge | 90+ |

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 🎭 **Hull University Theatre and Music Club** - For the opportunity to build this platform
- ⚛️ **React Team** - For the amazing framework
- 🎛️ **Radix UI** - For accessible component primitives
- 🎨 **CSS Modules Community** - For scoped styling solutions
- 🚀 **Vite Team** - For the lightning-fast build tool

## 📞 Support & Contact

- 🐛 **Bug Reports**: [Create an Issue](../../issues/new?template=bug_report.md)
- 💡 **Feature Requests**: [Create an Issue](../../issues/new?template=feature_request.md)
- 📧 **General Questions**: Contact the Hull University Theatre and Music Club
- 📖 **Documentation**: Check the [docs](./docs) folder

---

<div align="center">

**Made with ❤️ for the Hull University Theatre and Music Club**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
