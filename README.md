# PortfolioCheck

PortfolioCheck is a high-impact personal portfolio built with React, TypeScript, GSAP, and Tailwind CSS.

## Highlights

- Cinematic hero entrance with layered motion and typography.
- Velocity-style skills loop with star separators and subtle wave animation.
- Featured Projects section with overlap-layer scroll behavior and focus transitions.
- Interactive genre buttons with animated cyan border glow and hover context cards.
- Scroll-driven Services reveal with expanding panel transitions and image-based hover trail.
- Contact form with bold editorial typography and large decorative visual overlay.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scrolling

## Local Development

- Install dependencies:

```bash
npm install
```

- Start development server:

```bash
npm run dev
```

- Build production bundle:

```bash
npm run build
```

## Deployment (GitHub Pages)

- Deploys automatically from `main` using GitHub Actions.
- Build artifacts are generated with Vite and published through Pages workflow.
- Site URL (after first successful deployment):

```text
https://denysovski.github.io/PortfolioCheck/
```

## Notes

- Vite `base` is configured for project-page hosting at `/PortfolioCheck/`.
- If repository name changes, update `base` in `vite.config.ts`.
