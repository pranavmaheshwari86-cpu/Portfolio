# Edge Types & Directional Semantics

| Edge Type | Notation | Semantics | Example |
|---|---|---|---|
| `imports` | `A --> B` | File A imports module B | `App.tsx --> Hero.tsx` |
| `renders` | `A ==> B` | Component A renders Component B | `App ==> Navbar` |
| `depends_on` | `A ..-> B` | Component A depends on Data B | `Projects ..-> portfolioData.ts` |
| `communicates_with` | `A --> B` | Component calls external lib B | `ContactModal --> canvas-confetti` |
| `configures` | `A --> B` | Config A configures Tool B | `vite.config.ts --> tailwindcss` |
