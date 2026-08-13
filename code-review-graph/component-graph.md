# Component Graph & Render Hierarchy

```mermaid
graph TD
    App[App.tsx State Root] -->|isPreloaderActive: true| Preloader
    App -->|onOpenContact: fn| Navbar
    App -->|onOpenContact: fn| Hero
    App --> About
    App --> ProcessTimeline
    App --> Projects
    App --> Footer
    App -->|isOpen, onClose| ContactModal
```

## Prop Flow Contracts
- `Navbar`: receives `onOpenContact` -> invokes on button click.
- `Hero`: receives `onOpenContact` -> invokes on "Hire Me" / "Get in Touch" buttons. Manages background video lifecycle via `IntersectionObserver` (auto-pause when scrolled offscreen).
- `ContactModal`: receives `isOpen` (boolean) and `onClose` (callback). Delivers contact form messages directly to `portfolioData.contact.email` via FormSubmit AJAX API.
