# Architecture Graph

```mermaid
graph TD
    subgraph Root Layer
        Main[src/main.tsx] --> App[src/App.tsx]
    end

    subgraph Component Layer
        App --> Preloader[src/components/Preloader.tsx]
        App --> Navbar[src/components/Navbar.tsx]
        App --> Hero[src/components/Hero.tsx]
        App --> About[src/components/About.tsx]
        App --> ProcessTimeline[src/components/ProcessTimeline.tsx]
        App --> Projects[src/components/Projects.tsx]
        App --> Footer[src/components/Footer.tsx]
        App --> ContactModal[src/components/ContactModal.tsx]
    end

    subgraph Data & Config Layer
        Data[src/data/portfolioData.ts] --> Hero
        Data --> About
        Data --> ProcessTimeline
        Data --> Projects
    end

    subgraph Asset & Style Layer
        Style[src/index.css] --> App
        Confetti[canvas-confetti] --> ContactModal
        Icons[lucide-react] --> Navbar
        Icons --> Hero
        Icons --> About
        Icons --> ProcessTimeline
        Icons --> Projects
        Icons --> Footer
        Icons --> ContactModal
    end
```

## Architecture Evaluation
- **Simplicity Score**: 9/10 — Clean top-down composition.
- **Maintainability Score**: 9/10 — Low component coupling.
- **Architecture Score**: 9/10 — Clear separation of presentation, data, and motion layers.
