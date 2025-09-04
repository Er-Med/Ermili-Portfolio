'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Social links data object
const socialLinks = [
 {
  name: 'Linkedin',
  href: 'https://linkedin.com/yourusername',
  icon: '/social/linkedin.svg',
  external: true,
  ariaLabel: 'Linkedin'
 },
 // {
 //  name: 'X (Twitter)',
 //  href: 'https://x.com/yourusername',
 //  icon: '/social/X.svg',
 //  external: true,
 //  ariaLabel: 'X (Twitter)'
 // },

 {
  name: 'GitHub',
  href: 'https://github.com/yourusername',
  icon: '/social/github.svg',
  external: true,
  ariaLabel: 'GitHub'
 },
 {
  name: 'Instagram',
  href: 'https://instagram.com/yourusername',
  icon: '/social/instagram.svg',
  external: true,
  ariaLabel: 'Instagram'
 },
 {
  name: 'Email',
  href: 'mailto:your-email@example.com',
  icon: '/social/email.svg',
  external: false,
  ariaLabel: 'Email'
 },
];

const LeftSideBar = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
  // You can add theme switching logic here
 };

 return (
  <aside className="hidden xl:block fixed left-0 top-0 bottom-0  pt-6 pb-[var(--bottom-navbar-height)] z-10 w-20 border-e bg-background rounded-br-8xl ">
   <div className="flex flex-col justify-between h-full ">
    {/* logo */}
    <div className="flex-1 flex justify-center ">
     <Link href="/" className="block">
      <div className="text-xl font-bold text-primary">ErMed</div>
     </Link>
    </div>

    {/* theme mode */}
    <div className="flex-1">
     <button
      onClick={toggleTheme}
      className="p-2  border border-s-0 rounded-br-md"
      aria-label="Toggle theme"
     >
      <Image
       src={isDarkMode ? "/light-mode.svg" : "/nightmode.svg"}
       alt={isDarkMode ? "Light mode" : "Dark mode"}
       width={24}
       height={24}
       className="w-6 h-6"
      />
     </button>
    </div>

    {/* social icons */}
    <div className="flex-1 border-t border-muted">
     <ul className=" flex flex-col justify-end  divide-y divide-muted">
      {socialLinks.map((link) => (
       <li key={link.name}>
        {link.external ? (
         <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center p-5  "
          aria-label={link.ariaLabel}
         >
          <Image
           src={link.icon}
           alt={link.name}
           width={24}
           height={24}
           className="w-5 h-5"
          />
         </a>
        ) : (
         <Link
          href={link.href}
          className="flex justify-center items-center p-5  "
          aria-label={link.ariaLabel}
         >
          <Image
           src={link.icon}
           alt={link.name}
           width={24}
           height={24}
           className="w-5 h-5"
          />
         </Link>
        )}
       </li>
      ))}
     </ul>
    </div>
   </div>
  </aside>
 );
}

export default LeftSideBar;