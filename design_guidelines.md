# Design Guidelines: Shivasai Krishna Goud Bathini - AI Engineer Portfolio

## Design Approach
**Selected Approach:** Hybrid - Combining reactbits.dev's modern, animated aesthetic with mattfarley.ca's clean professionalism, tailored for a technical AI/ML portfolio

**Design Philosophy:** Create a visually striking, interactive portfolio that demonstrates technical sophistication through thoughtful animations and modern design patterns. The site should feel cutting-edge yet professional, mirroring the innovative nature of GenAI work.

## Color Palette

### Dark Mode (Primary)
- **Background Primary:** 6 5% 8% (deep charcoal, almost black)
- **Background Secondary:** 240 7% 12% (slightly lighter surface)
- **Background Tertiary:** 240 6% 16% (card/elevated surfaces)
- **Primary Brand:** 220 90% 60% (vibrant blue - represents AI/tech)
- **Accent:** 280 85% 65% (purple - for highlights and CTAs)
- **Text Primary:** 0 0% 98% (near white)
- **Text Secondary:** 240 5% 70% (muted gray for descriptions)
- **Success/Tech:** 160 75% 55% (teal green for skills/achievements)

### Light Mode (Secondary)
- **Background:** 0 0% 98%
- **Surface:** 0 0% 100%
- **Primary:** 220 85% 50%
- **Text:** 240 10% 15%

## Typography

### Font Families
- **Primary (Headings):** 'Inter' or 'Satoshi' - Modern, clean geometric sans-serif from Google Fonts
- **Secondary (Body):** 'Inter' - Same family for consistency
- **Accent (Code/Tech):** 'Fira Code' or 'JetBrains Mono' - For technical elements

### Type Scale
- **Hero Title:** 4xl to 6xl (responsive), font-weight: 700, tracking: -0.02em
- **Section Headings:** 3xl to 4xl, font-weight: 600
- **Project Titles:** xl to 2xl, font-weight: 600
- **Body Text:** base to lg, font-weight: 400, line-height: 1.7
- **Labels/Tags:** sm, font-weight: 500, uppercase with letter-spacing

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8, gap-12
- Container max-width: max-w-6xl to max-w-7xl with px-6 to px-8

**Grid Strategy:**
- Hero: Single column, centered content
- Projects: 2-column grid (lg:grid-cols-2), single column mobile
- Skills: 3-column grid (lg:grid-cols-3), responsive stack
- Timeline: Single column with offset content

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-lg bg-background/80)
- Smooth scroll-to-section links with active state indicators
- Mobile: Slide-in drawer with animated menu items
- Logo/Name on left, nav links center/right, social icons far right

### Hero Section
- **Layout:** Full viewport height (min-h-screen) with centered content
- **Content:** Animated name reveal with staggered letter animation
- **Subtitle:** "Generative AI Engineer | 3+ Years Building LLM Solutions"
- **Background:** Subtle animated gradient orbs (similar to reactbits.dev)
- **CTA Buttons:** Primary "View Projects" + Secondary "Download Resume" with arrow icons
- **Scroll Indicator:** Animated bounce arrow at bottom

### About Section
- **Layout:** 2-column on desktop (image/content split), stacked mobile
- **Avatar:** Geometric gradient placeholder (no photo needed) with animated border
- **Content:** Brief professional summary (3-4 lines from resume)
- **Stats Cards:** 3 animated cards showing "3+ Years", "5+ Projects", "15+ Technologies"
- **Tech Stack Pills:** Animated, hoverable badges for key technologies

### Projects Showcase
- **Card Design:** 
  - Large card with gradient border (hover state)
  - Project icon/placeholder at top (geometric shapes, no images)
  - Title + tech stack tags
  - Brief description (2-3 lines)
  - "Learn More" link with arrow
  - Hover: Lift effect (translateY: -8px) + glow
- **Featured Projects:** All 5 projects from resume displayed prominently
- **Interaction:** Click to expand with modal/slide-out showing full details

### Skills Section
- **Layout:** 3 categorized columns (ML/AI, Cloud, Programming)
- **Display:** Animated skill tags that float/drift slightly
- **Hover:** Individual tags scale and glow
- **Entry Animation:** Stagger reveal on scroll into view

### Experience Timeline
- **Design:** Vertical timeline with animated connection line
- **Cards:** Alternate left/right positioning (desktop), stacked (mobile)
- **Animation:** Fade-in + slide as user scrolls
- **Content:** University of Bridgeport role with key achievements

### Education
- **Layout:** Card-based with degree information
- **Visual:** Institution logo placeholder (geometric shape)
- **Details:** Degree, dates, relevant coursework in clean list

### Contact Section
- **Design:** Centered content with large, clickable contact cards
- **Cards:** Email, LinkedIn, GitHub with animated icons (Heroicons)
- **Hover:** Card expansion with reveal of additional info
- **Background:** Gradient overlay similar to hero

### Footer
- Minimal with copyright, built with React/Tailwind mention
- Social links repeat
- Subtle animated gradient background

## Animations

**Framework:** Framer Motion for React

### Animation Principles
- **Hero:** Letter-by-letter text reveal (0.05s stagger)
- **Scroll Animations:** Fade-in + translateY on section entry
- **Hover States:** Smooth scale (1.05), shadow expansion, color shifts
- **Page Load:** Staggered content reveal (hero → sections)
- **Background:** Subtle gradient orb movement (very slow, 20-30s duration)
- **Transitions:** All transitions 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Specific Interactions
- **Project Cards:** Flip on click to show back side with details
- **Skill Tags:** Gentle floating animation (translateY: ±4px, 3s duration)
- **Contact Cards:** Expand width on hover revealing full email/link
- **Navigation:** Smooth scroll with easing (scroll-behavior: smooth)

## Images

**Hero Section:** No large hero image - use animated gradient background with geometric orbs
**About Section:** Geometric gradient avatar placeholder (circular or hexagonal)
**Project Cards:** Use geometric shapes or abstract tech patterns as placeholders (no actual project screenshots)
**Icons:** Use Heroicons for all iconography (GitHub, LinkedIn, Email, etc.)

## Accessibility & Dark Mode
- **Contrast:** Ensure 4.5:1 minimum ratio for all text
- **Focus States:** Visible outline (ring-2 ring-primary ring-offset-2)
- **Dark Mode:** Default dark, toggle in header for light mode
- **Keyboard Nav:** Full keyboard accessibility for all interactive elements
- **Reduced Motion:** Respect prefers-reduced-motion, disable animations when set

## Unique Interactive Features
1. **Cursor Trailer:** Subtle glow effect following cursor (desktop only)
2. **Scroll Progress:** Thin line at top showing page scroll progress
3. **Easter Egg:** Hidden "AI Mode" that changes UI to matrix-style (toggle via keyboard shortcut)
4. **Particle Effect:** Subtle tech-themed particles on hero background
5. **Project Timeline:** Interactive timeline showing project chronology with connecting lines

This design creates a modern, engaging portfolio that showcases technical expertise through thoughtful interaction design and clean visual hierarchy.