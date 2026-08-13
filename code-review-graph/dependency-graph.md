# Dependency Graph

```mermaid
graph LR
    App.tsx --> Preloader.tsx
    App.tsx --> Navbar.tsx
    App.tsx --> Hero.tsx
    App.tsx --> About.tsx
    App.tsx --> ProcessTimeline.tsx
    App.tsx --> Projects.tsx
    App.tsx --> Footer.tsx
    App.tsx --> ContactModal.tsx

    Hero.tsx --> portfolioData.ts
    About.tsx --> portfolioData.ts
    ProcessTimeline.tsx --> portfolioData.ts
    Projects.tsx --> portfolioData.ts

    ContactModal.tsx --> canvas-confetti
    Preloader.tsx --> framer-motion
    Navbar.tsx --> lucide-react
    Hero.tsx --> lucide-react
```

## Critical Dependencies Mapping
- **Hub Module**: `src/data/portfolioData.ts` (consumed by 4 presentation components).
- **Controller Module**: `src/App.tsx` (orchestrates modal state and preloader sequence).
- **Circular Dependencies**: 0 circular dependencies detected.
