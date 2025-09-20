import {
  AtSign,
  BriefcaseBusiness,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Mail,
} from "lucide-react";

// Contact information data
export const contactInfo = [
  {
    id: "phone",
    title: "To Know More",
    icon: Phone,
    label: "Phone",
    value: "+212-737 621 432",
    href: "tel:+212737621432",
  },
  {
    id: "email",
    title: "Update Info",
    icon: AtSign,
    label: "Email Now",
    value: "info@gmail.com",
    href: "mailto:info@gmail.com",
  },
  {
    id: "location",
    title: "Local Coordinator",
    icon: MapPin,
    label: "Location",
    value: "Morocco, casablanca",
    href: "https://maps.google.com/?q=Casablanca,Morocco",
  },
  {
    id: "professional",
    title: "Freelance",
    icon: BriefcaseBusiness,
    label: "Freelance",
    value: "Available Right Now",
    href: "/contact",
  },
];

// Social media links data
export const socialLinks = [
  {
    name: "Email",
    href: "mailto:mohamedermili.dev@gmail.com",
    icon: Mail,
    external: false,
    ariaLabel: "Send Email",
    color: "#EA4335",
  },
  {
    name: "GitHub",
    href: "https://github.com/Er-Med",
    icon: Github,
    external: true,
    ariaLabel: "GitHub Profile",
    color: "#333",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ermili-mohamed",
    icon: Linkedin,
    external: true,
    ariaLabel: "LinkedIn Profile",
    color: "#0077B5",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ermili_mohamed",
    icon: Instagram,
    external: true,
    ariaLabel: "Instagram Profile",
    color: "#E4405F",
  },

  // {
  //   name: "X (Twitter)",
  //   href: "https://x.com/ermili_mohamed",
  //   icon: "/social/X.svg",
  //   external: true,
  //   ariaLabel: "X (Twitter) Profile",
  //   color: "#000000",
  // },
];

// Contact form configuration
export const contactFormConfig = {
  title: "Professional Skill",
  description:
    "UI/UX services encompass a range of offerings aimed at enhancing user experiences and interfaces across digital products. Here are some key services typically provided by UI/UX designers",
  fields: [
    {
      name: "fullName",
      label: "Your Full Name*",
      type: "text",
      placeholder: "Full Name..",
      required: true,
    },
    {
      name: "email",
      label: "Your Email Address*",
      type: "email",
      placeholder: "Enter Your Email..",
      required: true,
    },
    {
      name: "subject",
      label: "Your Subject*",
      type: "text",
      placeholder: "Subject..",
      required: true,
    },
    {
      name: "message",
      label: "Your Message*",
      type: "textarea",
      placeholder: "Write a message..",
      required: true,
      rows: 6,
    },
  ],
  submitButton: {
    text: "Send Message",
    className:
      "px-6 py-3 border border-primary text-primary font-display font-semibold rounded-br-md shadow-[_-3px_3px_0px_var(--primary)] hover:shadow-[_-1px_1px_0px_var(--primary)] hover:cursor-pointer hover:text-dark hover:border-dark hover:shadow-dark transition-all duration-300",
  },
};

// Get in Touch section configuration for mobile nav
export const getInTouchConfig = {
  title: "Get in Touch",
  items: [
    {
      id: "phone",
      label: "Phone",
      value: "+212-737 621 432",
      href: "tel:+212737621432",
      icon: "phone",
      iconPath:
        "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
    {
      id: "email",
      label: "Email",
      value: "info@gmail.com",
      href: "mailto:info@gmail.com",
      icon: "email",
      iconPath:
        "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      id: "address",
      label: "Address",
      value: "Morocco, Casablanca",
      href: "https://maps.google.com/?q=Casablanca,Morocco",
      icon: "location",
      iconPath:
        "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ],
};

// Personal information
export const personalInfo = {
  name: "Mohamed",
  fullName: "Ermili <br /> Mohamed",
  title: "Front End Developer",
  description:
    "My work focuses on creating modern web applications that balance speed, accessibility, and beautiful user experiences.",
  location: "Morocco, Casablanca",
  email: "info@gmail.com",
  phone: "+212-737 621 432",
  resume: "/Ermili_Mohamed_en.pdf",
  profileImage: "/imgme.jpeg",
  availability: "Available for freelance work",
};
