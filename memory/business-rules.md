# Business Logic & Rules

## 1. Preloader Completion Rule
- Preloader MUST run on initial page load until counter hits 100%.
- Once 100% is reached, preloader fades out and `isPreloaderActive` flips to `false`.

## 2. Contact Modal Interactivity Rule
- Triggered from "Hire Me" or "Get in Touch" buttons.
- Form requires non-empty `name`, `email`, and `message`.
- Upon successful validation and submit click, `canvas-confetti` fires particle explosion, displays success message, resets form, and closes modal after delay.

## 3. External Link Security Rule
- All external target links MUST open in `_blank` with `rel="noopener noreferrer"`.

## 4. Theme & Aesthetic Rule
- Deep luxury dark aesthetic (`#111111` background, `#FF2A2A` red accent, glassmorphism backdrop blurs).
