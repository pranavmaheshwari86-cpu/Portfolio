# UI Component Catalog & Specs

## Core Component Inventory

### 1. `Preloader.tsx`
- Props: `onComplete: () => void`
- Function: Runs counter from 0% to 100% over ~2 seconds, then triggers fade-out and fires `onComplete`.

### 2. `Navbar.tsx`
- Props: `onOpenContact: () => void`
- Function: Sticky glassmorphism header with desktop links, action button, and mobile hamburger drawer toggle.

### 3. `Hero.tsx`
- Props: `onOpenContact: () => void`
- Function: High-impact hero layout, badge pill, dynamic roles, experience counter, CTA buttons, and resume download.

### 4. `About.tsx`
- Props: None (Reads `portfolioData`)
- Function: Displays biography, 5+ years experience callout, and tech stack cards (React.js, Node.js, MongoDB).

### 5. `ProcessTimeline.tsx`
- Props: None (Reads `portfolioData`)
- Function: Renders 4-step rotated card timeline with numbers "01", "02", "03", "04" and hover details.

### 6. `Projects.tsx`
- Props: None (Reads `portfolioData`)
- Function: Displays featured engineering project cards with tech tags, project year, and live/GitHub CTA links.

### 7. `Footer.tsx`
- Props: None
- Function: Luxury dark footer displaying social links, email contact, availability badge, and back-to-top button.

### 8. `ContactModal.tsx`
- Props: `isOpen: boolean`, `onClose: () => void`
- Function: Accessible modal dialog containing name, email, and message form inputs with `canvas-confetti` trigger on submit.
