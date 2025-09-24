export type Project = {
  id: string;
  title: string;
  category: string;
  image: string; // path under public/projects
  shortDescription: string;
  overview: string;
  shortInfo: {
    client: string;
    location: string;
    projectType: string;
    duration: string;
  };
  tools: string[]; // match svg names under public/tools without extension
};

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Arab Innovation Hub",
    category: "Digital Platform",
    image: "/projects/project1.jpg",
    shortDescription:
      "A clean, fast, and responsive personal portfolio showcasing projects, skills, and contact information.",
    overview:
      "This project focuses on performance-first Next.js architecture with SEO best practices, dynamic content sections, and a minimal, accessible design.",
    shortInfo: {
      client: "Self",
      location: "Remote",
      projectType: "Portfolio Website",
      duration: "2 Weeks",
    },
    tools: ["nextjs", "react", "typescript", "tailwind"],
  },
  {
    id: "ecommerce-storefront",
    title: "E-COME STOREFRONT UI",
    category: "E-commerce",
    image: "/projects/project1.jpg",
    shortDescription:
      "Modern storefront UI exploring product discovery, cart flows, and responsive design.",
    overview:
      "Prototype for an e-commerce front featuring category browsing, product detail pages, and intuitive cart interactions.",
    shortInfo: {
      client: "Concept",
      location: "Remote",
      projectType: "Storefront UI",
      duration: "3 Weeks",
    },
    tools: ["nextjs", "react", "sass"],
  },
  {
    id: "Data Visualization",
    title: "Analytics Dashboard",
    category: "Data Visualization",
    image: "/projects/project1.jpg",
    shortDescription:
      "Conversion-focused landing page with pricing tiers and call-to-actions.",
    overview:
      "Built to test hero variants and pricing layouts with clean typography and visuals.",
    shortInfo: {
      client: "Startup",
      location: "United Kingdom",
      projectType: "Marketing Website",
      duration: "1 Month",
    },
    tools: ["nextjs", "css"],
  },
  {
    id: "progressive-web-app",
    title: "Progressive Web App",
    category: "progressive-web-app",
    image: "/projects/project1.jpg",
    shortDescription:
      "Realtime weather dashboard with multi-city comparison and forecasting.",
    overview:
      "Emphasizes data visualization and readable information density across devices.",
    shortInfo: {
      client: "Concept",
      location: "Remote",
      projectType: "Web App",
      duration: "2 Weeks",
    },
    tools: ["react", "typescript"],
  },
  {
    id: "task-manager",
    title: "TASK MANAGER UI",
    category: "Productivity",
    image: "/projects/project5.jpg",
    shortDescription:
      "Task management UI with boards, statuses, and drag-and-drop.",
    overview: "Focus on component reusability and state management patterns.",
    shortInfo: {
      client: "Concept",
      location: "Remote",
      projectType: "Web App",
      duration: "3 Weeks",
    },
    tools: ["react", "typescript", "sass"],
  },
  {
    id: "admin-dashboard",
    title: "ADMIN DASHBOARD",
    category: "Dashboard",
    image: "/projects/project6.jpg",
    shortDescription:
      "Admin analytics dashboard with charts and role-based sections.",
    overview:
      "Built for scalability with modular layouts and clear visual hierarchy.",
    shortInfo: {
      client: "Enterprise",
      location: "United Kingdom",
      projectType: "Internal Tool",
      duration: "1.5 Months",
    },
    tools: ["nextjs", "typescript", "tailwind"],
  },
];
