# API Documentation & Interfaces

## Client-Side Event Handlers & Callbacks

### 1. `onOpenContact`
- **Source**: `App.tsx`
- **Consumers**: `Navbar.tsx`, `Hero.tsx`
- **Description**: Triggers `isContactOpen = true`, opening the `ContactModal` overlay.

### 2. `onClose`
- **Source**: `App.tsx`
- **Consumers**: `ContactModal.tsx`
- **Description**: Triggers `isContactOpen = false`, closing the modal.

### 3. `onComplete`
- **Source**: `App.tsx`
- **Consumers**: `Preloader.tsx`
- **Description**: Invoked when the 0-100% count-up animation finishes, setting `isPreloaderActive = false`.

## External External Links & Anchors
- **Resume Link**: `portfolioData.personal.resumeUrl` (`/resume.pdf`)
- **GitHub**: `portfolioData.contact.github` (`https://github.com/pranavmaheshwari86-cpu`)
- **LinkedIn**: `portfolioData.contact.linkedin` (`https://www.linkedin.com/in/pranav-maheshwari2007`)
- **Email Mailto**: `mailto:Pranavmaheshwari86@gmail.com`
