# Shivasai Krishna Goud Bathini - AI Engineer Portfolio

## Overview

This is a modern, interactive portfolio website for Shivasai Krishna Goud Bathini, a Generative AI Engineer with 3+ years of experience. The application showcases projects, skills, work experience, and provides contact information through a visually striking, animated interface built with React, Vite, and Express.

The portfolio emphasizes technical sophistication through thoughtful animations, modern design patterns, and a dark-mode-first aesthetic that reflects expertise in AI/ML technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing
- Single-page application (SPA) architecture with component-based sections

**UI Component System**
- **shadcn/ui** components with Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component library follows the "New York" style variant with custom theming
- Dark mode as primary theme with light mode support via ThemeProvider context

**Animation & Interactivity**
- **Framer Motion** for declarative animations, scroll-triggered effects, and page transitions
- Custom cursor implementation with blend modes and hover states
- **Lottie** animations for hero section visual elements
- Intersection Observer patterns (via Framer Motion's `useInView`) for scroll-based animations

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- React Context API for theme management and UI state (ThemeProvider)
- Component-level state with React hooks

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for HTTP server and API routing
- Minimal REST API structure with `/api` prefix convention
- In-memory storage implementation (MemStorage) for development/demo purposes

**Development Setup**
- Vite middleware integration in development mode for seamless HMR
- Hot reloading with custom error overlay (@replit/vite-plugin-runtime-error-modal)
- Static file serving in production after build

**Database Layer**
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- Database schema includes users table with UUID primary keys
- Zod validation schemas integrated via drizzle-zod
- Currently using in-memory storage; database integration prepared but not actively used

### Design System

**Typography**
- **Inter** font family from Google Fonts for headings and body text
- **Fira Code** for technical/code elements
- Responsive type scale from base to 6xl with custom tracking

**Color System**
- Dark mode primary palette with deep charcoal backgrounds (HSL: 240 6% 8-16%)
- Vibrant blue primary brand color (220 90% 60%) representing AI/tech
- Purple accent color (280 85% 65%) for highlights and CTAs
- Teal green for success/tech indicators (160 75% 55%)
- CSS custom properties for theme switching

**Layout Patterns**
- Maximum container width of 6-7xl (1280-1536px)
- Consistent spacing primitives using Tailwind's spacing scale
- Responsive grid layouts: 2-column for projects, 3-column for skills
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile

### Component Architecture

**Page Structure**
- Single Home page component composing multiple section components
- Modular sections: Hero, About, Projects, Skills, Experience, Contact, Footer
- Navigation component with scroll detection and mobile menu

**Reusable Patterns**
- ProjectCard component for consistent project display
- AnimatedText component for staggered text animations
- CustomCursor component for enhanced interactivity
- Extensive shadcn/ui component library (40+ components)

## External Dependencies

### Third-Party Services

**Neon Database**
- PostgreSQL serverless database via @neondatabase/serverless
- Connection configured through DATABASE_URL environment variable
- Used with Drizzle ORM for type-safe database operations

**Font Hosting**
- Google Fonts for Inter and Fira Code font families
- Preconnect optimization for performance

### Key Libraries

**UI & Styling**
- @radix-ui/* (20+ primitives) - Accessible, unstyled component primitives
- tailwindcss - Utility-first CSS framework
- class-variance-authority - Type-safe variant management
- framer-motion - Production-ready animation library
- @lottiefiles/react-lottie-player - Animation playback

**Data & Validation**
- @tanstack/react-query - Async state management
- drizzle-orm - TypeScript ORM
- drizzle-zod - Schema validation
- zod - TypeScript-first schema validation

**Development Tools**
- tsx - TypeScript execution for Node.js
- esbuild - Fast JavaScript bundler for production
- @replit/vite-plugin-* - Replit-specific development tooling

### Build & Deployment

**Build Process**
1. Client build via Vite → outputs to `dist/public`
2. Server build via esbuild → bundles to `dist/index.js`
3. Production server serves static files and API routes

**Environment Requirements**
- Node.js environment with ES modules support
- DATABASE_URL environment variable for PostgreSQL connection
- Production mode uses bundled server, development uses Vite middleware