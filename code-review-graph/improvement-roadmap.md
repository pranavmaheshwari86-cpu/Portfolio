# Architectural Improvement Roadmap

## Phase 1: Refactoring & UI Component Primitives (Near Term)
- Extract reusable `<Button>`, `<Badge>`, and `<Card>` primitives to `src/components/ui/`.
- Standardize animation variants into a shared `src/data/animations.ts` file.

## Phase 2: Live Form Dispatch & API Integration (Mid Term)
- Attach serverless API function (Vercel Serverless / Netlify Function) for `ContactModal.tsx` live email processing.
- Add honeypot field to `ContactModal.tsx` for spam prevention.

## Phase 3: Analytics & Visual Enhancements (Long Term)
- Integrate Privacy-friendly web analytics (e.g. Plausible / PostHog).
- Add Three.js WebGL canvas background shaders for the Hero section.
