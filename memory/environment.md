# Environment Variables & Configuration

## Configuration Files
- `vite.config.ts`: Configures Vite plugins (`@vitejs/plugin-react`, `@tailwindcss/vite`).
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript rules.
- `.oxlintrc.json`: Lint configuration.

## Environment Variables (Optional / Future Expansion)
For future integrations (e.g. Resend Email API, Analytics):
```env
# Optional environment variables template
VITE_SITE_URL=https://pranav-portfolio.com
VITE_RESEND_API_KEY=re_123456789
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```
