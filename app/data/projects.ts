export type Project = {
  id: string;
  title: string;
  category: string;
  websiteType: "Landing Page" | "Portfolio" | "Blog/News" | "E-commerce";
  image: string; // path under public/projects
  url?: string; // external link to the project
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
  // Blog/News Projects
  {
    id: "dispatch-template",
    title: "Dispatch Template",
    category: "Blog",
    websiteType: "Blog/News",
    image: "/projects/dispatch.webp",
    url: "https://dispatch-template.webflow.io/",
    shortDescription:
      "News-focused blog website built for a client, emphasizing readability and content discovery to engage readers.",
    overview:
      "A custom blog website designed and developed for a client in the news and editorial space. The project focused on creating strong typography and efficient content layout to maximize reader engagement and content discoverability.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Blog Template",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "blogmin-flowsark",
    title: "Blogmin Flowsark",
    category: "Blog",
    websiteType: "Blog/News",
    image: "/projects/blogmin-flowsark.webp",
    url: "https://blogmin-flowsark.webflow.io/",
    shortDescription:
      "Minimalist blog template with clean design and focused content presentation.",
    overview:
      "A beautifully designed minimal blog template that emphasizes content readability and elegant typography for modern publishers.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Blog Template",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "grandnews",
    title: "Grandnews",
    category: "News",
    websiteType: "Blog/News",
    image: "/projects/grandnews.jpg",
    url: "https://themes.themegoods.com/grandnews/demo2/",
    shortDescription:
      "Premium news and magazine WordPress theme with comprehensive features and modern design.",
    overview:
      "A feature-rich WordPress theme designed for news websites and online magazines with advanced customization options and professional layouts.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "News Theme",
      duration: "2 Weeks",
    },
    tools: ["wordpress"],
  },
  // Landing Page Projects
  {
    id: "kitpro-jaeger",
    title: "Kitpro Jaeger",
    category: "Landing",
    websiteType: "Landing Page",
    image:
      "/projects/68ed0012d491930f63b21ffb_a9b4ea42-e7f7-4b70-aba8-b81ae5495859 (1).webp",
    url: "https://kitpro-jaeger.webflow.io/",
    shortDescription:
      "Conversion-focused landing page built for a client with modern design and clear call-to-actions to drive leads.",
    overview:
      "A high-converting landing page developed for a client to showcase their products and services effectively. The design focuses on clear messaging and strategic call-to-action placement to maximize conversion rates.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Landing Page",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "rustico-bakery",
    title: "Rustico Bakery",
    category: "Landing",
    websiteType: "Landing Page",
    image: "/projects/rustico-bakery.webp",
    url: "https://rustico-bakery.webflow.io/",
    shortDescription:
      "Elegant landing page for bakery with warm design and appetizing visuals.",
    overview:
      "A beautifully crafted landing page template designed to showcase bakery products with inviting aesthetics.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Landing Page",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "redcliff-1936",
    title: "1936 Redcliff",
    category: "Landing",
    websiteType: "Landing Page",
    image: "/projects/1936-redcliff.webp",
    url: "https://1936-redcliff.webflow.io/",
    shortDescription:
      "Elegant landing page with sophisticated design and premium aesthetics.",
    overview:
      "A premium landing page template with attention to detail and refined visual elements.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Landing Page",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  // Portfolio Projects
  {
    id: "merkil",
    title: "Merkil",
    category: "Portfolio",
    websiteType: "Portfolio",
    image: "/projects/merkil.webflow.webp",
    url: "https://merkil.webflow.io/",
    shortDescription:
      "Modern portfolio website built for a digital marketing agency client, featuring professional design and comprehensive service showcase.",
    overview:
      "A comprehensive portfolio website developed for a digital marketing agency client. The project included custom sections for services, project showcases, and client engagement features, all designed with modern aesthetics to reflect the agency's brand and attract new clients.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Portfolio Website",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "glow-startup-template",
    title: "Glow Startup Template",
    category: "Portfolio",
    websiteType: "Portfolio",
    image: "/projects/glow-startup.webp",
    url: "https://glow-startup-template.webflow.io/",
    shortDescription:
      "Vibrant startup portfolio template with modern design and engaging visual elements.",
    overview:
      "A dynamic portfolio template specifically designed for startups, emphasizing services, case studies, and client engagement with contemporary design patterns.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Portfolio Website",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "leo-marshall",
    title: "Leo Marshall",
    category: "Portfolio",
    websiteType: "Portfolio",
    image: "/projects/leo-marshall.webp",
    url: "https://leo-marshall.webflow.io/",
    shortDescription:
      "Creative portfolio website showcasing work with modern design and smooth animations.",
    overview:
      "A professional portfolio template designed to highlight creative work with elegant presentation.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Portfolio Website",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  {
    id: "ovo-legion",
    title: "Ovo Legion",
    category: "Portfolio",
    websiteType: "Portfolio",
    image: "/projects/ovo-legion.webp",
    url: "https://ovo-legion.webflow.io/",
    shortDescription:
      "Bold portfolio design with unique layout and creative visual elements.",
    overview:
      "An innovative portfolio template featuring distinctive design patterns and engaging user experience.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "Portfolio Website",
      duration: "2 Weeks",
    },
    tools: ["webflow"],
  },
  // E-commerce Projects
  {
    id: "minimal-electronics",
    title: "Minimal Electronics",
    category: "E-commerce",
    websiteType: "E-commerce",
    image: "/projects/minimal-electronics.jpg",
    url: "https://xstore.8theme.com/elementor/demos/minimal-electronics/",
    shortDescription:
      "Clean e-commerce website built for an electronics retailer client, featuring minimal design and intuitive navigation to boost sales.",
    overview:
      "A modern e-commerce website developed for an electronics retailer client. The project was optimized for electronics products with a streamlined shopping experience, focusing on product visibility and easy checkout flow to maximize conversions.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "E-commerce Store",
      duration: "3 Weeks",
    },
    tools: ["elementor", "wordpress"],
  },
  {
    id: "marketov2-furniture",
    title: "Marketov2 Furniture",
    category: "E-commerce",
    websiteType: "E-commerce",
    image: "/projects/xpeedstudio.jpg",
    url: "https://demo.xpeedstudio.com/marketov2/furniture/",
    shortDescription:
      "Modern furniture e-commerce platform with elegant design and comprehensive product showcase.",
    overview:
      "A sophisticated e-commerce template designed for furniture stores with beautiful product displays and intuitive shopping experience.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "E-commerce Store",
      duration: "3 Weeks",
    },
    tools: ["wordpress"],
  },
  {
    id: "blonwe-fashion",
    title: "Blonwe Fashion",
    category: "E-commerce",
    websiteType: "E-commerce",
    image: "/projects/blonwe.webp",
    url: "https://klbtheme.com/blonwe/fashion/home-2/",
    shortDescription:
      "Stylish fashion e-commerce store with modern design and trend-focused product presentation.",
    overview:
      "A contemporary fashion e-commerce template featuring elegant layouts and optimized shopping experience for clothing and accessories.",
    shortInfo: {
      client: "Template Project",
      location: "Remote",
      projectType: "E-commerce Store",
      duration: "3 Weeks",
    },
    tools: ["wordpress"],
  },
];
