# Deployment & Hosting Guide

## Hosting Targets
Recommended zero-config static hosts:
1. **Vercel**: Deploy via Vercel CLI (`vercel`) or GitHub Integration.
2. **Netlify**: Deploy via Netlify CLI (`netlify deploy --prod`).
3. **GitHub Pages**: Build output `dist/` published to `gh-pages` branch.

## Build Pipeline
```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript build verification & Vite bundling
npm run build

# Output directory generated: /dist
```

## Production Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: `>= 20.0.0` (Local runner: `v24.16.0`)
