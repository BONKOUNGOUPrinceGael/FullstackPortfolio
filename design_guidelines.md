# Design Guidelines: Full-Stack Developer Portfolio

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios (Linear, Vercel, GitHub profiles) combined with portfolio platforms like Behance and Dribbble. Focus: Clean, professional aesthetic with strategic visual impact that showcases technical expertise.

## Layout Strategy

**Hero Section (100vh)**
- Full-viewport split layout: 60% content area (left) + 40% visual element (right on desktop)
- Left: Large display name, role title, brief tagline, dual CTAs ("View Projects" + "Download CV")
- Right: Professional headshot or abstract geometric illustration with subtle gradient treatment
- Implement parallax scroll effect on visual element

**Projects Gallery (Natural height)**
- Featured project: Full-width showcase with large preview image, detailed description, tech stack badges, live demo + GitHub links
- Grid layout: 2 columns on desktop (grid-cols-1 md:grid-cols-2), alternating image-left/right for visual rhythm
- Each project card: Large preview image (16:9 ratio), project title, 2-3 line description, tech stack pills, interaction buttons

**Skills Matrix**
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3): Frontend | Backend | Tools & DevOps
- Each column: Category header, skill items with icon + proficiency indicator (subtle progress bars)
- Intersperse with mini code snippets or terminal-style text blocks for authenticity

**Contact Section**
- 2-column split: Contact form (left 60%) + Information card (right 40%)
- Form: Name, Email, Subject, Message fields with clear labels and validation states
- Info card: Email, LinkedIn, GitHub links, location, availability status

## Typography System

**Font Families**
- Primary (Headings): Inter or Manrope (700, 600 weights)
- Secondary (Body): Inter or System UI (400, 500 weights)
- Code snippets: JetBrains Mono or Fira Code (400 weight)

**Type Scale**
- Hero title: text-6xl md:text-7xl (bold)
- Section headers: text-4xl md:text-5xl (semibold)
- Project titles: text-2xl md:text-3xl (semibold)
- Body text: text-base md:text-lg
- Labels/metadata: text-sm

## Spacing System

**Tailwind Units**: 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

## Component Library

**Navigation**
- Fixed header with blur backdrop (backdrop-blur-md)
- Logo/name (left), navigation links (center), theme toggle + CTA (right)
- Smooth scroll anchors, active state indicators

**Cards**
- Project cards: Elevated with subtle shadow, hover lift effect, rounded corners (rounded-xl)
- Skill cards: Clean background, icon at top, centered text
- Testimonial cards (if included): Quote, author info, company logo

**Buttons**
- Primary CTA: Solid fill, medium size (px-6 py-3), rounded-lg
- Secondary: Outlined style, same sizing
- Icon buttons: Square (w-10 h-10), rounded-full for theme toggle

**Form Elements**
- Inputs: Full-width, clear borders, rounded-md, generous padding (px-4 py-3)
- Focus states: Distinct ring treatment
- Labels: Above input, text-sm, medium weight
- Validation: Inline error messages below fields

**Tech Stack Badges**
- Small pills (px-3 py-1.5, rounded-full, text-xs)
- Display as flex-wrap row below project descriptions

## Animations

**Strategic Use Only**
- Hero: Gentle fade-up on load (200ms delay between elements)
- Projects: Scroll-triggered fade-in as they enter viewport
- Cards: Subtle hover lift (transform: translateY(-4px))
- Theme toggle: Smooth transition for all color properties (300ms)

**Avoid**: Continuous animations, distracting parallax, carousel auto-play

## Images

**Required Images**
1. **Hero**: Professional headshot or creative developer illustration (1200x1200px minimum)
2. **Project Previews**: 6-8 project screenshots (1920x1080px, 16:9 ratio)
   - Desktop app screenshots, website mockups, mobile app screens
   - High-quality, showing actual UI/functionality
3. **Optional**: Company/client logos for experience section (SVG preferred)

**Image Treatment**
- Hero image: Subtle shadow, optional gradient overlay
- Project images: Contained in cards with rounded corners, no overlays at rest
- Lazy loading for below-fold images

## Dark/Light Mode

**Implementation**
- Toggle in header (sun/moon icon)
- Affects: Backgrounds, text, borders, card shadows
- Maintain contrast ratios for accessibility (WCAG AA minimum)
- Persist preference in localStorage

## Responsive Breakpoints
- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px)
- Single column on mobile, multi-column on desktop
- Hamburger menu below md breakpoint

This portfolio should feel modern, professional, and technically impressive while remaining scannable and user-friendly.