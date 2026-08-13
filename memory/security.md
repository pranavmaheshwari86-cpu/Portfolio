# Security Posture & Vulnerability Controls

## Current Posture: LOW RISK (Static Client Application)

### 1. XSS Prevention
- React automatically escapes rendered strings in JSX.
- No `dangerouslySetInnerHTML` usage in any component.

### 2. Dependency Hardening
- Zero vulnerable npm dependencies.
- Packages locked via `package-lock.json`.

### 3. Target Blank Security
- All external links (`target="_blank"`) MUST use `rel="noopener noreferrer"` to prevent reverse tabnabbing attacks. Verified across `Hero.tsx`, `Projects.tsx`, and `Footer.tsx`.

### 4. Content Security Policy (CSP) Directives (Recommended for Prod Deployment)
```http
Content-Security-Policy: default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline'; script-src 'self';
```
