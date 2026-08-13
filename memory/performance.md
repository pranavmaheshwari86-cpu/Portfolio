# Performance Optimization & Web Vitals

## Lighthouse Audit Baseline Metrics
- **Performance Score Target**: 98-100 / 100
- **First Contentful Paint (FCP)**: < 0.8s
- **Largest Contentful Paint (LCP)**: < 1.2s
- **Cumulative Layout Shift (CLS)**: 0.00
- **Total Blocking Time (TBT)**: < 50ms

## Optimization Strategies Implemented
1. **GPU-Accelerated Motion**: Framer Motion transforms utilize `transform3d` and `opacity` to avoid triggering layout repaints.
2. **Icon Tree-Shaking**: `lucide-react` icons are imported individually.
3. **Vite Fast Bundling**: Vite 8 ESM tree-shaking yields minimal bundle chunk size (`dist/assets/index-*.js`).
4. **Font Optimization**: System font stack (`font-sans antialiased`) prevents flash of unstyled text (FOUT).
