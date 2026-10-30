# CONTENT_RULES.md — Project Content Guidelines & Publishing Restrictions

> Official content strategy, brand voice, and publishing constraint documentation for this repository. Referenced automatically for all content generation, copywriting, and social posting tasks.

---

## 1. Verified Project Identity & Domain Context

- **Project Name**: `portfolio-new` (Pranav Developer Portfolio)
- **Developer & Owner**: **Pranav** — FullStack Engineer & AI Engineer
- **Experience Level**: 5+ years of engineering experience (`#8942-DEV`)
- **Industry & Domain**: Full-Stack Web Engineering, Artificial Intelligence & Machine Learning Systems, Luxury Interactive WebGL/React Interfaces, Enterprise Software Architecture.
- **Core Technology Stack**:
  - **Frontend**: React 19, TypeScript 6, Vite 8, Tailwind CSS v4, Framer Motion 12, Lucide Icons, Syne & Mono Typography.
  - **Styling Architecture**: Luxury Dark Aesthetic (`#111111`, `#1c1c1c`), Glassmorphism panels, Crimson accents (`#FF2A2A`), high-contrast modern typography.
  - **Featured Work**:
    1. **Flowshield**: Environmental AI & GIS platform for disaster early warning (FastAPI, Python, PostGIS, XGBoost, Leaflet, Docker).
    2. **Smart Bharat AI**: Unified AI digital governance portal for 500+ Indian schemes (Next.js 15, React 19, Three.js WebGL, Express, Gemini API).
    3. **Parlee Agro**: Modern beverage commerce portal (Next.js 16, React 19, Tailwind CSS v4, Base UI, Turbopack).
    4. **Aetheris**: AI employee verification and identity validation ecosystem (Next.js 15, Express 5, Prisma, MongoDB Atlas, Redis, Socket.io, Gemini API).
- **Target Audience**:
  - Technical recruiters, engineering hiring managers, CTOs, and tech founders looking for high-caliber FullStack & AI talent.
  - High-ticket clients, enterprise teams, and startups needing bespoke software development, AI agent pipelines, and high-performance web applications.
- **Brand Voice & Personality**:
  - Authoritative, senior-level engineering tone.
  - Terse, clear, high-signal, zero fluff.
  - Focused on measurable technical outcomes: latency, throughput, architecture, clean code, luxury UX polish.

---

## 2. Verified Publishing Restrictions & Post Limits

An exhaustive inspection of the entire codebase was conducted across backend models, database schemas, API routes, and frontend input forms:

### A. In-App Post Publishing Workflow:
- **Status**: **No in-app post creation, CMS, blog engine, or database post publishing workflow exists in this repository.**
- **Post Models / DB Schema**: None. The project is a client-side static application driven by `src/data/portfolioData.ts`.
- **API Validation**: No post-creation REST/GraphQL endpoints exist.

### B. In-App Form Inputs (`src/components/ContactModal.tsx`):
- `name`: `<input type="text">` — No `maxLength` enforced.
- `email`: `<input type="email">` — Standard email validation; no `maxLength` enforced.
- `message`: `<textarea rows={4}>` — **No `maxLength` attribute, no word limit, and no character limit enforced.** Direct AJAX delivery to FormSubmit endpoint.

### C. In-App Data Field Constraints (`src/data/portfolioData.ts`):
- `tagline`: Unrestricted in data; visually formatted for hero display (~140–180 characters recommended).
- `project.description`: Unrestricted in data; frontend applies Tailwind `line-clamp-2` (~120–160 characters recommended for card layout).
- `project.longDescription`: Unrestricted in data; rendered in full inside project modals (~200–350 characters recommended).

### D. External Publishing Channels (Social & Distribution):
When generating content for external platforms representing this project:
- **X / Twitter**:
  - Character Limit: **280 characters** (standard tier) / 4,000 (Premium tier).
  - Counting Rule: Every character (letters, spaces, punctuation, symbols, emojis) counts as 1. URLs count as 23 characters.
- **LinkedIn**:
  - Character Limit: **3,000 characters**.
  - Counting Rule: Every character including spaces, emojis, line breaks, and hashtags counts toward the limit.
- **GitHub / README / Portfolio Case Studies**:
  - Character Limit: **No technical ceiling**. Optimal depth: 250–600 words for technical case studies.

---

## 3. Content Writing Standards & Strategy

All content created under this project must adhere to:

1. **Precision & Engineering Reality**: Speak with deep technical literacy. Reference real stacks, architecture patterns, and genuine implementation details from the 4 portfolio projects.
2. **Hook-First Structure**:
   - **Engaging Opening**: Strong hook identifying a concrete technical or business problem.
   - **Core Solution**: High-density engineering insight or architecture breakdown.
   - **Value / Takeaway**: Actionable learning, metric improvement, or production pattern.
   - **Call to Action**: Natural, low-friction next step (explore code, view demo, collaborate).
3. **Slop & Buzzword Elimination**:
   - No generic AI clichés ("In today's fast-paced digital world", "Game-changer", "Delve into").
   - No fake statistics or unverified claims.
   - Minimal, purposeful emojis (maximum 1–2 per post, or zero).
   - Relevant, targeted hashtags only (3–5 max for LinkedIn/X, 0 for case studies).

---

## 4. Standard Response Output Format

Every content piece delivered will follow the mandatory specification:

- **Title:** [Clear, descriptive title]
- **Post Content:** [Complete, publication-ready content]
- **Word Count:** [Actual counted words]
- **Character Count:** [Actual counted characters]
- **Maximum Allowed:** [Verified platform/field limit]
- **Category:** [e.g., Engineering Case Study / Tech Showcase / Thought Leadership]
- **Hashtags:** [Relevant tags, or None]
