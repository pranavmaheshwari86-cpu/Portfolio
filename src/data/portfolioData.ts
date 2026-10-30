export const portfolioData = {
  // 1. Personal Identity & Branding
  personal: {
    name: "Pranav",
    brandName: "Pranav.",
    role: "FullStack engineer and AI Engineer",
    location: "",
    tagline: "Crafting high-performance modern web applications & intelligent AI solutions. Engineered for extreme scalability, cutting-edge UX, and pixel-perfect aesthetics.",
    experienceYears: "5+",
    idPassNumber: "#8942-DEV",
    profileImage: "/profile.png",
    videoUrl: "/video.mp4",
    resumeUrl: "/resume.pdf",
  },

  // 2. Contact Information & Socials
  contact: {
    email: "Pranavmaheshwari86@gmail.com",
    github: "https://github.com/pranavmaheshwari86-cpu",
    linkedin: "https://www.linkedin.com/in/pranav-maheshwari2007",
    twitter: "https://twitter.com/your-username",
    availability: "Available Worldwide",
  },

  // 3. Tech Stack Showcase (About Section)
  techStack: [
    {
      name: "REACT.JS",
      color: "#61DAFB",
      type: "Frontend Framework",
    },
    {
      name: "NODE.JS",
      color: "#68A063",
      type: "Backend Runtime",
    },
    {
      name: "MONGODB",
      color: "#47A248",
      type: "Database Engine",
    },
  ],

  // 4. Featured Projects (Projects Section)
  projects: [
    {
      id: "flowshield",
      title: "Flowshield",
      category: "Environmental AI & GIS Intelligence",
      description: "Operational environmental intelligence and disaster decision-support platform for flash flood and cloudburst early warning in Himalayan river valleys.",
      longDescription: "Engineered with React 18, TypeScript, Python 3.12, FastAPI, and PostgreSQL/PostGIS. Features GIS Voronoi catchment overlays, real-time telemetry streaming via SSE, Recharts environmental analytics, and calibrated ML flood risk modeling with XGBoost, Scikit-Learn, and SHAP.",
      tech: ["FastAPI", "Python", "React", "PostGIS", "XGBoost", "Leaflet", "Docker"],
      image: "/flowshield.jpg",
      liveUrl: "https://flowshield-one.vercel.app/",
      githubUrl: "https://github.com/pranavmaheshwari86-cpu/Flowshield-AI",
      year: "2026",
    },
    {
      id: "smart-bharat-ai",
      title: "Smart Bharat AI",
      category: "AI GovTech & Public Welfare",
      description: "Unified AI-driven digital governance and public welfare portal for Indian citizens. Eliminates bureaucracy, language barriers, and complex paperwork for 500+ government schemes.",
      longDescription: "Unified AI-driven digital governance and public welfare platform engineered as an npm Workspaces monorepo. Features Next.js 15 App Router, React 19, Three.js WebGL interactive avatar, Express backend with JWT and rate limiting, and multi-model AI routing across Groq, Gemini API, and OpenAI.",
      tech: ["Next.js 15", "React 19", "Three.js", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Gemini API"],
      image: "/smart-bharat-ai.jpg",
      liveUrl: "https://smart-bharat-ai-backend.vercel.app/",
      githubUrl: "https://github.com/pranavmaheshwari86-cpu/Smart_Bharat_AI",
      year: "2026",
    },
    {
      id: "parlee-agro",
      title: "Parlee Agro",
      category: "Modern E-Commerce & Brand Portal",
      description: "Modern beverage brand portal and commerce experience built on the latest Next.js 16 and React 19 stack with Tailwind CSS v4.",
      longDescription: "Next-generation brand showcase and digital commerce platform for Parlee Agro's iconic beverage portfolio. Engineered with Next.js 16 App Router, React 19, Turbopack, Tailwind CSS v4, Base UI primitives, and CVA variant management for sub-second page loads and fluid navigation.",
      tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript", "Turbopack", "Base UI"],
      image: "/parlee-agro.jpg",
      liveUrl: "https://parlee-agro.vercel.app/",
      githubUrl: "https://github.com/pranavmaheshwari86-cpu/parlee_agro",
      year: "2026",
    },
    {
      id: "aetheris",
      title: "Aetheris",
      category: "AI Identity & Talent Verification",
      description: "AI-powered employee verification, identity validation, and talent discovery ecosystem.",
      longDescription: "End-to-end employee background and identity verification platform engineered with Next.js 15, React 19, Express 5, and Prisma ORM with MongoDB Atlas. Features Supabase Auth, dual-secret JWTs, Redis rate limiting, Socket.io real-time updates, and Google Gemini API for semantic talent discovery and credentials evaluation.",
      tech: ["Next.js 15", "React 19", "Express 5", "MongoDB", "Prisma", "Redis", "Gemini API", "Socket.io"],
      image: "/aetheris.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/pranavmaheshwari86-cpu/EMPLOYEE-VERIFICATION-PORTAL",
      year: "2026",
    },
  ],

  // 5. Workflow / Process Timeline ("How We Work")
  processSteps: [
    {
      number: "01",
      title: "Define",
      subtitle: "Discovery & Product Architecture",
      description: "We analyze your core business objectives, map out user journeys, define technical stack requirements, and craft a bulletproof architectural roadmap.",
      details: ["Requirements Engineering", "Tech Stack Selection", "System Architecture"],
      rotation: "rotate-2",
      position: "right" as const,
    },
    {
      number: "02",
      title: "Design",
      subtitle: "High-End UI/UX & Motion Prototyping",
      description: "Creating award-winning visual interfaces with custom typography, calibrated color palettes, glassmorphism, and cinematic micro-interactions.",
      details: ["Design System Systematization", "Interactive Motion Prototypes", "Responsive Layouts"],
      rotation: "-rotate-3",
      position: "left" as const,
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Scalable Engineering & Clean Code",
      description: "Writing high-performance React.js frontends and robust Node.js backends with strict type safety, modular component structure, and optimized DB queries.",
      details: ["React & Node.js Core", "REST / GraphQL APIs", "Performance Optimization"],
      rotation: "rotate-3",
      position: "right" as const,
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Deployment & Global Delivery",
      description: "Zero-downtime CI/CD deployment, security auditing, edge caching, Lighthouse 100/100 score verification, and continuous performance tracking.",
      details: ["Cloud CDN Distribution", "Security Hardening", "24/7 Monitoring"],
      rotation: "-rotate-2",
      position: "left" as const,
    },
  ],
};
