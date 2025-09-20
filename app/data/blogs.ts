export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Pendulum Serenity Tempest Verto Ipsum Nova",
    excerpt:
      "UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products.",
    author: "Md Shafiqul",
    category: "Travel",
    image: "/blogs/blog1.jpg",
    slug: "pendulum-serenity-tempest-verto-ipsum-nova",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Modern Web Development Trends in 2024",
    excerpt:
      "Exploring the latest technologies and frameworks that are shaping the future of web development and user experience design.",
    author: "Md Shafiqul",
    category: "Technology",
    image: "/blogs/blog1.jpg", // Replace with blog2.jpg when available
    slug: "modern-web-development-trends-2024",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "The Art of Minimalist Design",
    excerpt:
      "How minimalist design principles can create powerful and effective user interfaces that focus on essential elements.",
    author: "Md Shafiqul",
    category: "Design",
    image: "/blogs/blog1.jpg", // Replace with blog3.jpg when available
    slug: "art-of-minimalist-design",
    date: "2024-01-25",
  },
  {
    id: 4,
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices and patterns for creating maintainable and scalable React applications that can grow with your business.",
    author: "Md Shafiqul",
    category: "Development",
    image: "/blogs/blog1.jpg", // Replace with blog4.jpg when available
    slug: "building-scalable-react-applications",
    date: "2024-01-30",
  },
];
