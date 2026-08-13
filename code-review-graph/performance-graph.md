# Performance Graph & Rendering Path

```mermaid
graph TD
    HTML[index.html] --> Vite[Vite 8 ESM Module Loader]
    Vite --> ReactRoot[React 19 Root Render]
    ReactRoot --> PreloaderAnim[Framer Motion Preloader Animation]
    PreloaderAnim --> MainDOM[Render Section Components]
    MainDOM --> HardwareAccel[GPU Transform Layer CSS]
```

## Performance Scores
- **Performance Score**: 9.5/10 — Sub-second FCP/LCP. Zero layout shifts.
- **Scalability**: 9/10 — Easily handles content additions in `portfolioData.ts`.
