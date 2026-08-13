# Navigation & Routing Architecture

## SPA Section Anchor Navigation

Navigation is handled via HTML5 smooth scrolling to section ID targets:

| Anchor | Target Component | Description |
|---|---|---|
| `#hero` | `Hero.tsx` | Landing section & call-to-actions |
| `#about` | `About.tsx` | Experience, biography, tech stack cards |
| `#process` | `ProcessTimeline.tsx` | 4-step engineering workflow |
| `#projects` | `Projects.tsx` | Selected engineering work showcase |
| `#contact` | Modal Trigger | Triggers `ContactModal` overlay |

## Dynamic Modal Overlays
- `ContactModal` opens over the viewport when triggered by `isContactOpen = true`.
- Background body scrolling lock or backdrop overlay blur enabled when modal is active.
