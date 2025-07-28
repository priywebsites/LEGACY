# LEGACY BARBERS BARBERSHOP Website

## Overview

This repository contains a premium, modern barbershop website for "LEGACY BARBERS BARBERSHOP 💈" built with React, TypeScript, and a full-stack architecture. The application is designed as a single-page website showcasing the barbershop's services, work gallery, client reviews, and contact information with heavy emphasis on animations and mobile-first responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for scroll animations and UI transitions
- **State Management**: TanStack Query (React Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Development**: Hot module replacement via Vite integration

### Component Structure
The frontend follows a component-based architecture with:
- **Pages**: Single home page with multiple sections
- **Components**: Modular section components (Hero, About, Services, Work Gallery, Reviews, Contact, Footer)
- **UI Components**: Reusable shadcn/ui components
- **Hooks**: Custom hooks for scroll animations and mobile detection

## Key Components

### Core Sections
1. **Navigation**: Fixed navigation with smooth scrolling to sections
2. **Hero Section**: Full-screen hero with gradient overlay and call-to-action
3. **About Section**: Brand story with statistics and animations
4. **Services Section**: Grid of barbershop services with icons and pricing
5. **Work Gallery**: Image gallery with modal functionality
6. **Reviews Section**: Client testimonials with star ratings
7. **Contact Section**: Business information, hours, and Google Maps integration
8. **Footer**: Social links and branding

### Animation System
- **Scroll Animations**: Custom hook using Intersection Observer API
- **Framer Motion**: Used extensively for entrance, scale, and fade animations
- **CSS Transitions**: Tailwind CSS transitions for hover effects

### Theming System
- **Design System**: Black, gray, white color scheme with red and blue accents
- **CSS Variables**: Custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Inter font family for modern, clean appearance

## Data Flow

### Client-Side Rendering
- Single-page application with component-based sections
- Static content rendered client-side
- Smooth scrolling navigation between sections
- Modal state management for image gallery

### Development Workflow
- Vite dev server with hot module replacement
- TypeScript compilation and type checking
- Tailwind CSS processing with PostCSS
- Component development with Radix UI primitives

## External Dependencies

### UI and Styling
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety and development experience
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing

### Database Setup (Prepared)
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Schema validation integration

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets served from public directory

### Production Configuration
- Environment-based configuration
- Static file serving via Express
- Node.js runtime for server-side functionality

### Development Environment
- Local development with Vite dev server
- Hot module replacement for rapid development
- TypeScript checking and error reporting
- Replit-specific plugins for cloud development

## Recent Changes (July 28, 2025)

### Updated Design & Animations
- **Color Scheme**: Professional black, gray, and white palette with subtle blue/red accents for gradient text and shape highlights
- **Services Section**: Removed prices and service descriptions, changed "Straight Slice Shaves" to "Line Up"
- **Hero Background**: Enhanced with dynamic glassy gradient background, shimmer effects, floating orbs, and enhanced particle system
- **Mobile Navigation**: Fixed to always display with logo, "LEGACY" text, and hamburger menu when scrolling
- **Enhanced Animations**: Added extensive Framer Motion animations throughout:
  - 3D rotations and transforms on scroll with enhanced complexity
  - Spring animations with custom stiffness/damping
  - Blur and scale effects for dramatic entrances
  - Complex hover animations with multiple properties including rotateX, rotateY, rotateZ
  - Staggered animations for better visual flow
  - Pulsing particle effects with colored particles (blue/red/white)
  - Floating geometric shapes with varied sizes and movements
  - Enhanced work gallery with dramatic entrance animations

### Asset Updates
- **About Section**: Replaced placeholder image with actual barbershop interior photo
- **Work Gallery**: Updated with 4 new authentic barbershop photos showing actual client work
- **Hero Effects**: Lighter, glassy background with multiple animation layers for visual interest

### Button Styling
- **Hero Button**: Removed gradient colors, returned to clean white with enhanced hover animations
- **Accent Colors**: Maintained blue/red accents in text gradients and floating shapes, but removed from buttons

### Vercel Deployment Ready
- **Configuration**: Added vercel.json for proper deployment setup
- **Asset Management**: Local image assets properly imported via Vite
- **Build Process**: Optimized for Vercel's serverless architecture

The application now features dramatically enhanced animations with glassy/glossy hero effects, authentic barbershop imagery, and a persistent mobile navigation while maintaining the professional aesthetic with subtle color accents as requested.