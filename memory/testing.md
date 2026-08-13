# Testing & Quality Assurance

## Linting Engine
- Linter: `oxlint` (Rust-based ultra-fast linter)
- Command: `npm run lint`
- Configuration: `.oxlintrc.json`

## Type Verification
- TypeScript compiler: `tsc -b`
- Command: `npm run build`

## Manual Verification Suite
1. **Preloader Test**: Refresh browser -> Verify 0 to 100 countdown -> Verify smooth exit fade.
2. **Modal Test**: Click "Get in Touch" / "Hire Me" -> Verify overlay opens -> Submit form -> Verify `canvas-confetti` trigger -> Verify close.
3. **Mobile Drawer Test**: Shrink viewport < 768px -> Click hamburger menu -> Verify slide-out navigation options.
