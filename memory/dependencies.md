# Dependencies Breakdown

## Core Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.3.3",
  "@types/canvas-confetti": "^1.9.0",
  "canvas-confetti": "^1.9.4",
  "clsx": "^2.1.1",
  "framer-motion": "^12.43.0",
  "lucide-react": "^1.28.0",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "tailwind-merge": "^3.6.0",
  "tailwindcss": "^4.3.3"
}
```

## Core Dev Dependencies

```json
{
  "@types/node": "^24.13.3",
  "@types/react": "^19.2.17",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^6.0.4",
  "oxlint": "^1.75.0",
  "typescript": "~6.0.2",
  "vite": "^8.2.0"
}
```

## Dependency Risk Audit
- **Vulnerabilities**: 0 critical vulnerabilities reported.
- **Bundle Footprint**: Highly optimized; Framer Motion is tree-shaken, Lucide icons imported individually.
