# Database Architecture & Data Schema

## Data Architecture
`portfolio-new` currently operates as a client-side static application with static data structures defined in `src/data/portfolioData.ts`.

## TypeScript Data Models

### 1. Personal Identity Model
```typescript
interface PersonalInfo {
  name: string;
  brandName: string;
  role: string;
  location: string;
  tagline: string;
  experienceYears: string;
  idPassNumber: string;
  profileImage: string;
  videoUrl: string;
  resumeUrl: string;
}
```

### 2. Project Item Model
```typescript
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  year: string;
}
```

### 3. Process Step Model
```typescript
interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  rotation: string;
  position: 'left' | 'right';
}
```

## Future Database Migration Roadmap
If backend storage is added (e.g. MongoDB Atlas or PostgreSQL):
- `Project` schema -> MongoDB collection `projects`
- `Inquiry` schema -> MongoDB collection `inquiries` (for contact form submissions)
