# Project Changelog

## [Unreleased]
### Changed
- Replaced tab lightning symbol (`⚡`) with custom brand monogram (`P.`) favicon in `index.html`.
- Removed word "Luxury" from browser tab title (`index.html`) and across Hero, Projects, Timeline, and portfolio data copy.
- Removed lightning bolt icon from Explore buttons in `Projects.tsx` for clean, text-only button presentation.

### Fixed
- Removed sparkle icon symbol from "Explore" project card button in `Projects.tsx`.
- Fixed project screenshot visibility in `Projects.tsx`: removed heavy `bg-gradient-to-t` bottom dark overlay, changed container aspect ratio to 16:9 (`aspect-video`), and moved year badge to category metadata to prevent obscuring UI elements.
- Padded `public/smart-bharat-ai.jpg` to precise 16:9 ratio to prevent cropping left navigation text and right 3D graphics.

### Added
- Added "Aetheris" AI employee verification ecosystem with Next.js 15, Express 5, Prisma/MongoDB, Gemini API, GitHub repo, and screenshot in `public/aetheris.jpg`.
- Added graceful "Demo Coming Soon" badge fallback in `Projects.tsx` for projects without an active live URL.
- Added "Parlee Agro" beverage brand and commerce showcase with Next.js 16/React 19 stack, live demo, GitHub URL, and screenshot in `public/parlee-agro.jpg`.
- Added "Smart Bharat AI" project with monorepo tech stack, live URL, GitHub URL, and custom screenshot in `public/smart-bharat-ai.jpg`.

### Changed
- Updated Flowshield project `liveUrl` to `https://flowshield-one.vercel.app/`.

## [1.0.0] - 2026-08-06

### Added
- Created complete Project Intelligence System (`/memory`, `/code-review-graph`, `/graphify`).
- Implemented responsive glassmorphism Navbar with mobile menu drawer.
- Built interactive Preloader component with count-up animation.
- Implemented Hero section with experience stats, badge, and resume CTA.
- Created About section with tech stack showcase cards.
- Built Process Timeline component ("How We Work") with rotated cards.
- Implemented Projects section displaying featured engineering work.
- Created Contact Modal with interactive confetti particle explosion on submit.
- Configured Oxlint, TypeScript 6, Tailwind CSS v4, and Vite 8 build engine.
