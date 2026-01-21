# CSS Modules Usage Guide

This guide explains how to use CSS modules effectively in the HUTMC Theatre Club website project.

## Overview

CSS Modules provide locally scoped CSS by automatically generating unique class names. This prevents style conflicts and enables better maintainability.

## Basic Usage

### 1. Creating a CSS Module

Create a CSS file with the `.module.css` extension:

```css
/* Button.module.css */
.button {
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary {
  background: var(--color-primary);
  color: white;
}

.secondary {
  background: var(--color-secondary);
  color: var(--color-text-primary);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

### 2. Using CSS Modules in Components

Import and use the styles in your React component:

```jsx
// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

export default Button;
```

### 3. Conditional Classes

Use template literals or utility functions for conditional classes:

```jsx
// Using template literals
const className = `${styles.card} ${isActive ? styles.active : ''} ${styles[size]}`;

// Using a utility function (recommended)
import { clsx } from 'clsx';

const className = clsx(
  styles.card,
  {
    [styles.active]: isActive,
    [styles.disabled]: disabled,
  },
  styles[size]
);
```

## Design System Integration

### CSS Custom Properties

The project uses CSS custom properties for consistent theming:

```css
/* base.module.css - Design tokens */
:root {
  /* Colors */
  --color-primary: 42 75% 50%;
  --color-secondary: 220 12% 18%;
  --color-background: 220 20% 6%;
  --color-text-primary: 45 10% 92%;
  --color-text-secondary: 220 10% 70%;
  
  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Borders */
  --radius: 8px;
  --border-width: 1px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Using Design Tokens

Reference design tokens in your CSS modules:

```css
/* Component.module.css */
.container {
  padding: var(--spacing-lg);
  background: hsl(var(--color-background));
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
}

.title {
  font-family: var(--font-display);
  color: hsl(var(--color-text-primary));
  margin-bottom: var(--spacing-md);
}

.text {
  font-family: var(--font-body);
  color: hsl(var(--color-text-secondary));
  line-height: 1.6;
}
```

## Advanced Patterns

### 1. Composition

Compose styles from multiple classes:

```css
/* Card.module.css */
.card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
}

.elevated {
  box-shadow: var(--shadow-lg);
}

.interactive {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.interactive:hover {
  transform: translateY(-2px);
}
```

```jsx
// Card.jsx
const Card = ({ elevated, interactive, children }) => {
  const className = clsx(
    styles.card,
    {
      [styles.elevated]: elevated,
      [styles.interactive]: interactive,
    }
  );
  
  return <div className={className}>{children}</div>;
};
```

### 2. Responsive Design

Use CSS custom properties for responsive breakpoints:

```css
/* base.module.css */
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

```css
/* Component.module.css */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 3. Animation and Transitions

Create reusable animation classes:

```css
/* animations.module.css */
.fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

.slideUp {
  animation: slideUp 0.4s ease-out;
}

.bounce {
  animation: bounce 0.6s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

## Best Practices

### 1. Naming Conventions

Use descriptive, semantic class names:

```css
/* Good */
.navigationMenu { }
.primaryButton { }
.heroSection { }
.cardTitle { }

/* Avoid */
.nav { }
.btn { }
.big { }
.red { }
```

### 2. File Organization

Organize CSS modules alongside their components:

```
components/
├── Button/
│   ├── Button.jsx
│   ├── Button.module.css
│   └── index.js
├── Card/
│   ├── Card.jsx
│   ├── Card.module.css
│   └── index.js
└── ui/
    ├── button.jsx
    ├── button.module.css
    ├── card.jsx
    └── card.module.css
```

### 3. Global vs Local Styles

Use global styles for:
- CSS reset/normalize
- Design tokens (custom properties)
- Typography base styles
- Utility classes

Use CSS modules for:
- Component-specific styles
- Layout styles
- Interactive states
- Responsive behavior

### 4. Performance Optimization

- Keep CSS modules focused and small
- Use CSS custom properties for values that change
- Avoid deep nesting (max 3 levels)
- Use efficient selectors

```css
/* Good */
.card { }
.cardHeader { }
.cardTitle { }

/* Avoid */
.card .header .title .text { }
```

## Debugging CSS Modules

### 1. Class Name Generation

CSS modules generate unique class names. In development, they're readable:

```
Button_button__2Xk1a
Button_primary__3Yl2b
```

### 2. Browser DevTools

Use browser DevTools to inspect generated class names and debug styles.

### 3. CSS Module Viewer

You can log the styles object to see all available classes:

```jsx
console.log(styles); // { button: 'Button_button__2Xk1a', primary: 'Button_primary__3Yl2b' }
```

## Migration from Tailwind CSS

This project was migrated from Tailwind CSS to CSS modules. Here are the key differences:

### Before (Tailwind)
```jsx
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Title</h2>
  <p className="text-gray-600 leading-relaxed">Content</p>
</div>
```

### After (CSS Modules)
```jsx
<div className={styles.card}>
  <h2 className={styles.title}>Title</h2>
  <p className={styles.content}>Content</p>
</div>
```

```css
.card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.content {
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

## Conclusion

CSS modules provide a powerful way to write maintainable, scoped CSS. By following these patterns and best practices, you can create a scalable styling system that grows with your application.

For more information, see:
- [CSS Modules GitHub](https://github.com/css-modules/css-modules)
- [Vite CSS Modules Documentation](https://vitejs.dev/guide/features.html#css-modules)