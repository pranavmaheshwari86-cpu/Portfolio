export const portfolioData = {
  // 1. Personal Identity & Branding
  personal: {
    name: "Pranav",
    brandName: "Pranav.",
    role: "FullStack engineer and AI Engineer",
    location: "",
    tagline: "Crafting high-performance modern web applications & intelligent AI solutions. Engineered for extreme scalability, luxury UX, and pixel-perfect aesthetics.",
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
      id: "project-1",
      title: "Aura Luxury Commerce",
      category: "Full Stack & 3D WebGL",
      description: "Ultra-high performance luxury e-commerce platform with real-time 3D product customization and instant checkout.",
      longDescription: "Engineered with React.js, Three.js, Node.js, and MongoDB. Features zero-layout-shift UI, micro-animations, server-side caching, and Stripe payment gateway integrations.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2026",
    },
    {
      id: "project-2",
      title: "Nexus AI Orchestrator",
      category: "AI Application & Dashboard",
      description: "Enterprise AI multi-agent workflow manager with live stream metrics and automated prompt optimization.",
      longDescription: "Built with React 19, Express/Node.js, WebSocket streams, and Tailwind CSS v4. Delivers realtime state synchronization, GPU-accelerated chart rendering, and automated telemetry.",
      tech: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "WebSockets"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2025",
    },
    {
      id: "project-3",
      title: "Kinetix Studio Platform",
      category: "Creative Web Development",
      description: "Cinematic video editor and web animation suite engineered for digital content creators.",
      longDescription: "Combines canvas manipulation, Framer Motion, Node.js microservices, and AWS S3 storage. Optimized for 60fps rendering across mobile and desktop devices.",
      tech: ["React.js", "Framer Motion", "Node.js", "AWS", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2025",
    },
    {
      id: "project-4",
      title: "Veloce Engine SaaS",
      category: "Enterprise SaaS Platform",
      description: "Cloud infrastructure monitoring dashboard for multi-region Kubernetes clusters.",
      longDescription: "Architected with React, Node.js microservices, and MongoDB Atlas. Handles 100,000+ daily telemetry payloads with sub-50ms query latency.",
      tech: ["React.js", "Node.js", "MongoDB", "Docker", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      year: "2024",
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
      subtitle: "Luxury UI/UX & Motion Prototyping",
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
