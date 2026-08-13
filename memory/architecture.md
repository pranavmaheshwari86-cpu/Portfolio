# System Architecture

## Architecture Pattern
`portfolio-new` follows a Single-Page Application (SPA) architecture built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, and **Framer Motion 12**. State is managed locally via React Hooks (`useState`), and static configuration is centralized in `src/data/portfolioData.ts`.

## Component Lifecycle & Rendering Model

```mermaid
graph TD
    App[App.tsx Core Root] --> Preloader[Preloader Component]
    App --> Navbar[Navbar Component]
    App --> Main[Main Content Container]
    App --> Footer[Footer Component]
    App --> ContactModal[ContactModal Overlay]

    Main --> Hero[Hero Section]
    Main --> About[About Section]
    Main --> ProcessTimeline[Process Timeline]
    Main --> Projects[Projects Showcase]

    Data[portfolioData.ts] --> Hero
    Data --> About
    Data --> ProcessTimeline
    Data --> Projects
```

## State Management Lifecycle
1. **Preloader State (`isPreloaderActive`)**: Defaults to `true`. Gates main UI interactions until countdown finishes, setting `isPreloaderActive` to `false`.
2. **Contact Modal State (`isContactOpen`)**: Managed centrally in `App.tsx` and passed via `onOpenContact` callback props to `Navbar` and `Hero`.

## Data Flow Architecture
- All content (personal info, tech stack, project list, timeline steps) is defined as strongly typed objects in `src/data/portfolioData.ts`.
- Components import `portfolioData` directly, ensuring zero prop-drilling for static data while keeping components decoupled.

## Storage Architecture
- Currently 100% client-side static asset rendering with zero persistent database dependency in the frontend bundle.
- Form submissions in `ContactModal` simulate API dispatch with local confetti trigger via `canvas-confetti`.
