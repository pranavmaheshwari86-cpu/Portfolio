# Duplication Analysis

## Identified Patterns & DRY Audit

### 1. Button & CTA Styling Patterns
- High repetition of glassmorphism / gradient border CTA styles across `Hero.tsx`, `Navbar.tsx`, `Projects.tsx`, and `ContactModal.tsx`.
- *Recommendation*: Extract shared UI Button primitives (e.g., `<Button variant="primary">`) to `src/components/ui/Button.tsx`.

### 2. Badge Pill Elements
- Decorative badge pills (`bg-[#1E1E1E] text-xs px-3 py-1 rounded-full border border-white/10`) are duplicated across `Hero.tsx`, `About.tsx`, and `Projects.tsx`.
- *Recommendation*: Create a reusable `<Badge>` component.
