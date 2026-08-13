# External Integrations

## Active Libraries & External Services

### 1. `canvas-confetti`
- **Purpose**: Provides particle explosion celebration effect when contact form is submitted in `ContactModal.tsx`.
- **Import**: `import confetti from 'canvas-confetti';`

### 2. `lucide-react`
- **Purpose**: Vector UI Icons across navigation, timeline badges, project links, contact modals, and footer.
- **Icons Used**: `Menu`, `X`, `ArrowUpRight`, `Github`, `Linkedin`, `Twitter`, `Mail`, `Send`, `Briefcase`, `Code`, `Sparkles`, `CheckCircle2`, `Layers`, `Zap`, `ExternalLink`, `FileText`, `PhoneCall`.

### 3. FormSubmit AJAX API
- **Purpose**: Serverless email delivery service handling contact form submissions directly from `ContactModal.tsx` to `Pranavmaheshwari86@gmail.com`.
- **Endpoint**: `https://formsubmit.co/ajax/Pranavmaheshwari86@gmail.com`
- **Features**: `_replyto` header setting, JSON AJAX payload, `_captcha: 'false'`, structured HTML table format, multi-environment (local + production) support.

### 4. Unsplash Image Assets
- **Purpose**: High-resolution project thumbnail placeholders in `portfolioData.ts`.
- **Domains**: `images.unsplash.com`.
