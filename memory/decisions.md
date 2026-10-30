# Architecture Decision Records (ADRs)

## ADR-001: Centralized Data File over CMS/Backend for Initial MVP
- **Status**: Approved & Implemented
- **Context**: The portfolio requires high-speed rendering with zero API latency.
- **Decision**: Centralize all copy, project data, personal identity, and timeline steps in `src/data/portfolioData.ts` as strongly typed TypeScript objects.
- **Consequences**: Fast builds, instant page load times, 0 runtime fetch failures. Updating content requires editing `portfolioData.ts`.

## ADR-002: Tailwind CSS v4 Integration via `@tailwindcss/vite`
- **Status**: Approved & Implemented
- **Context**: Migrate to Tailwind CSS v4 for improved build times and native Vite integration.
- **Decision**: Use `@tailwindcss/vite` plugin in `vite.config.ts` and `@import "tailwindcss";` in `src/index.css`.
- **Consequences**: Lightning-fast utility styling, reduced CSS bundle size, native CSS variable support.

## ADR-003: Framer Motion 12 for Motion Engineering
- **Status**: Approved & Implemented
- **Context**: Need fluid, GPU-accelerated micro-interactions and preloader animations without heavy external GSAP dependencies.
- **Decision**: Standardize on `framer-motion` for exit animations, keyframe counts, and component entry variants.
- **Consequences**: Declarative animation syntax across TSX components, smooth 60fps renders.

## ADR-004: Rust-based Oxlint for Linter Enforcement
- **Status**: Approved & Implemented
- **Context**: Standard ESLint can slow down build cycles in modern Vite pipelines.
- **Decision**: Use `oxlint` as the primary lint script (`npm run lint`).
- **Consequences**: Sub-millisecond lint checks across the entire TSX codebase.

## ADR-005: Viewport-Aware Media Lifecycle via IntersectionObserver
- **Status**: Approved & Implemented
- **Context**: Background video in Hero component continued playing when user scrolled down the page, consuming resources and audio bandwidth.
- **Decision**: Implement an `IntersectionObserver` in `Hero.tsx` targeting `sectionRef` to pause the video when scrolled out of view and resume when visible (unless manually paused by user).
- **Consequences**: Automatic resource conservation and clean audio/video lifecycle on scroll.

## ADR-006: FormSubmit AJAX API for Client-side Contact Form Email Delivery
- **Status**: Approved & Implemented
- **Context**: Contact modal required real email delivery to `Pranavmaheshwari86@gmail.com` without introducing server infrastructure.
- **Decision**: Implement AJAX POST integration to FormSubmit in `ContactModal.tsx` passing visitor Name, Email, and Project Details.
- **Consequences**: Direct email delivery with reply-to headers, loading states, error fallback handling, and zero backend maintenance.

## ADR-007: Official Content Rules & Publishing Constraints Specification
- **Status**: Approved & Implemented
- **Context**: Content generation, copywriting, and project showcase posts require strict brand consistency, verified domain identity, and factual length limits.
- **Decision**: Establish `CONTENT_RULES.md` as the authoritative source of truth. Verified that no in-app post publishing or DB limit exists in this client-side architecture; documented card display constraints and external distribution limits (X: 280 chars, LinkedIn: 3000 chars) with standardized output format.
- **Consequences**: Persistent, zero-hallucination reference for all future copywriting, social updates, and case studies.
