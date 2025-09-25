import "./globals.css";
import FooterNavBar from "./components/FooterNavBar";
import { Metadata } from "next";
import { Space_Grotesk, Montserrat, Orbitron } from "next/font/google";
import LeftSideBar from "./components/LeftSideBar";
import MobileNav from "./components/MobileNav";
import { ThemeProvider } from "./components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Ermili Mohamed - Front-end Developer | React & Next.js Expert",
    template: "%s | Ermili Mohamed - Front-end Developer"
  },
  description: "Creative Front-end Developer from Morocco specializing in React, Next.js, TypeScript, and modern web technologies. Building responsive, pixel-perfect websites and web applications with exceptional user experiences.",
  keywords: [
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Morocco",
    "Responsive Web Design",
    "JavaScript Developer",
    "Tailwind CSS",
    "Portfolio",
    "Freelance Developer",
    "UI/UX Developer",
    "Web Development Services"
  ],
  authors: [{ name: "Ermili Mohamed" }],
  creator: "Ermili Mohamed",
  publisher: "Ermili Mohamed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ermili-mohamed.vercel.app"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ermili-mohamed.vercel.app", // Replace with your actual domain
    siteName: "Ermili Mohamed Portfolio",
    title: "Ermili Mohamed - Front-end Developer | React & Next.js Expert",
    description: "Creative Front-end Developer from Morocco specializing in React, Next.js, TypeScript, and modern web technologies. Building responsive, pixel-perfect websites and web applications.",
    images: [
      {
        url: "/ermili-mohamed.png", // Your profile image
        width: 1200,
        height: 630,
        alt: "Ermili Mohamed - Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ermili Mohamed - Front-end Developer | React & Next.js Expert",
    description: "Creative Front-end Developer from Morocco specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/ermili-mohamed.png"],
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your_google_verification_code", // Add your Google Search Console verification code
    // yandex: "your_yandex_verification_code",
    // yahoo: "your_yahoo_verification_code",
  },
  category: "technology",
  classification: "Portfolio Website",
  icons: {
    icon: [
      { url: "/ErMedlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/ErMedlogo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/ErMedlogo.png",
    apple: [
      { url: "/ErMedlogo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/ErMedlogo.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json", // You can create a web app manifest
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ermili Mohamed",
    "application-name": "Ermili Mohamed Portfolio",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${montserrat.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider>
          <LeftSideBar />
          <MobileNav />
          {children}
          <FooterNavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}