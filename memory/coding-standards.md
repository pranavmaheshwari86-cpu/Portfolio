# Coding Standards & Guidelines

## 1. Component Architecture
- Use functional React components (`React.FC<Props>`) with explicit interface props definition.
- Avoid class components or untyped `any` parameters.
- Export components as named exports (`export const ComponentName = ...`) and export default where appropriate.

## 2. TypeScript Rules
- Strict mode enabled (`tsconfig.app.json`).
- Explicitly define interfaces for data structures (e.g. `Project`, `ProcessStep`, `TechItem`).
- Prefer interfaces over inline type declarations for component props.

## 3. Styling & Class Conventions
- Use Tailwind CSS v4 utility classes.
- Use `clsx` and `tailwind-merge` (`cn` helper utility) for conditional class concatenation.
- Color theme standard:
  - Background: `#111111` (Deep dark)
  - Secondary surface: `#181818` / `#1E1E1E`
  - Accent Red: `#FF2A2A`
  - Text Primary: `#F4F4F4`
  - Text Secondary: `#888888` / `#A1A1AA`

## 4. Accessibility (a11y)
- Every interactive icon button must include `aria-label`.
- Modals must support keyboard ESC closing and background backdrop click closing.
- Semantic HTML tags (`<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`).
