# Bug Tracking & Known Issues

## Resolved Bugs
- **[BUG-001] React 19 Framer Motion Compatibility**: Fixed prop type mismatches with Framer Motion 12 by using compatible motion wrapper elements.
- **[BUG-002] Tailwind v4 Vite Plugin Integration**: Resolved import pathing by migrating to `@tailwindcss/vite` in `vite.config.ts`.

## Known Edge Cases / Watchlist
- **Mobile Safari Overflow**: Ensure `overflow-x-hidden` on main wrapper prevents horizontal scroll bouncing during Framer Motion slide-in animations.
- **Form Mail Dispatch**: Currently simulates client dispatch; requires backend hookup for live email delivery.
