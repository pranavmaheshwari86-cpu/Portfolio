# Code Review Graph System

The `/code-review-graph` system maps structural dependencies, component interactions, risk profiles, code duplication, and continuous quality metrics across the `portfolio-new` codebase.

## Directory Index

| Graph File | Focus Area |
|---|---|
| [`architecture-graph.md`](./architecture-graph.md) | High-level system architecture & component topology |
| [`dependency-graph.md`](./dependency-graph.md) | Module import/export relationship mapping |
| [`component-graph.md`](./component-graph.md) | UI component render tree & prop flows |
| [`api-graph.md`](./api-graph.md) | Event callbacks & client API interface map |
| [`database-graph.md`](./database-graph.md) | Data model schemas & state flow graph |
| [`security-graph.md`](./security-graph.md) | Security controls, sanitization, and attack surface analysis |
| [`performance-graph.md`](./performance-graph.md) | Render path, animation pipelines, and bundle efficiency |
| [`risk-analysis.md`](./risk-analysis.md) | High dependency files & single points of failure identification |
| [`duplication-analysis.md`](./duplication-analysis.md) | Pattern duplication & abstraction review |
| [`complexity-analysis.md`](./complexity-analysis.md) | Cyclomatic & structural complexity scores |
| [`improvement-roadmap.md`](./improvement-roadmap.md) | Prioritized quality & architecture roadmap |

## Continuous Quality Scores Summary

| Subsystem | Simplicity | Maintainability | Architecture | Security | Performance | Scalability |
|---|---|---|---|---|---|---|
| **App Core (`App.tsx`)** | 9/10 | 9/10 | 9/10 | 9/10 | 9.5/10 | 8.5/10 |
| **Component Suite (`src/components`)** | 8.5/10 | 9/10 | 9/10 | 9/10 | 9.5/10 | 9/10 |
| **Data Layer (`portfolioData.ts`)** | 9.5/10 | 8.5/10 | 9/10 | 10/10 | 10/10 | 8/10 |
| **Styling Engine (`index.css`)** | 9/10 | 9/10 | 9.5/10 | 10/10 | 9.5/10 | 9/10 |
