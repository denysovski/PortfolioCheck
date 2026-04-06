# PortfolioCheck

PortfolioCheck is a personal portfolio site built to showcase visual work, motion design, and interactive front-end UI patterns. The experience leans into cinematic transitions, large typography, and layered content sections rather than a traditional minimal portfolio layout.

## Project Overview

The site is structured as a single-page portfolio with additional route-based gallery pages for specific categories of work. The main landing page introduces the profile, services, selected work, and contact flow, while the secondary routes present dedicated project collections.

### Core Sections

- Hero area with motion-led introduction and strong editorial styling.
- Scrolling marquee strip for quick positioning and visual rhythm.
- Work section for featured projects and case-study style presentation.
- Services section that uses staged reveals and animated interaction.
- About section with personal and professional context.
- Contact section with a more expressive visual treatment.
- Floating social navigation for quick access to external profiles.

### Route Structure

- `/` - main portfolio landing page.
- `/photography` - photography collection page.
- `/web-design` - web design collection page.
- `/poster-ads` - poster and advertising work page.
- `*` - fallback not-found view.

## Technical Stack

- React 18
- TypeScript
- Vite 5
- React Router
- TanStack React Query
- Tailwind CSS
- GSAP and ScrollTrigger
- Lenis for smooth scrolling
- shadcn/ui primitives built on Radix UI
- Sonner for toast notifications

## Architecture Notes

- The application entry point wires global providers for routing, query state, tooltips, and toast systems.
- Page composition lives in `src/pages`, while reusable sections and UI primitives live under `src/components`.
- Motion behavior is handled through dedicated hooks such as `use-gsap` and `use-lenis`.
- Styling is utility-driven with Tailwind and custom component composition for reusable UI blocks.
- The project includes testing support with Vitest and Playwright for UI and end-to-end coverage.

## Workflow

The repository is set up for local development, production builds, linting, and automated tests through the standard package scripts defined in `package.json`.

## Deployment

- The project is configured for GitHub Pages deployment.
- The app uses hash-based client routing so category pages continue to work on GitHub Pages without a server rewrite.
- Vite still emits assets with the correct project base during production builds.
- Build output is generated through Vite and published by the GitHub Actions Pages workflow.

## Implementation Notes

- The app uses route-level navigation instead of a purely static one-page document so work categories can have their own space.
- Motion and scroll behavior are a core part of the design system, not just decorative extras.
- The portfolio is tuned for strong presentation of visual work, so spacing, overlays, and transitions are part of the product rather than incidental styling.
