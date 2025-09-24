'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks, getInTouchConfig } from '../data/contact';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

interface Links {
 label: string,
 href: string
}
const links: Links[] = [
 {
  label: "HOME",
  href: "/"
 },
 {
  label: "ABOUT",
  href: "/about"
 },
 {
  label: "PORTFOLIO",
  href: "/portfolio"
 },
 {
  label: "CONTACT",
  href: "/contact"
 },
]

// Animation variants
const overlayVariants = {
 closed: {
  opacity: 0,
  scale: 0.98,
  y: 10,
  transition: {
   duration: 0.08
  }
 },
 open: {
  opacity: 1,
  scale: 1,
  y: 0,
  transition: {
   duration: 0.12
  }
 }
};

const menuVariants = {
 closed: {
  opacity: 0,
  y: 10,
  transition: {
   duration: 0.05
  }
 },
 open: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 0.08,
   staggerChildren: 0.02,
   delayChildren: 0.02
  }
 }
};

const menuItemVariants = {
 closed: {
  opacity: 0,
  y: 5,
  transition: {
   duration: 0.05
  }
 },
 open: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 0.08
  }
 }
};

const hamburgerVariants = {
 closed: {
  rotate: 0,
  scale: 1,
  transition: {
   duration: 0.08
  }
 },
 open: {
  rotate: 90,
  scale: 1.1,
  transition: {
   duration: 0.08
  }
 }
};
const MobileNav = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const pathname = usePathname();

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 const closeMenu = () => {
  setIsMenuOpen(false);
 };

 return (
  <>
   <aside className="xl:hidden fixed left-0 bottom-0 w-full p-4 z-30  border-t bg-red rounded-br-8xl bg-background">
    <div className="flex justify-between items-center h-full  ">
     {/* logo */}
     <div className=" flex justify-center ">
      <Link href="/" className="block">
       <div className="text-xl font-bold text-primary ">
        <Image src="/ErMedlogo.png" width={50} height={40} alt="ErMed logo" property='og:image' className='rotate-90' />
       </div>
      </Link>
     </div>

     <div className="flex items-center gap-2">
      {/* Menu */}
      <motion.button
       onClick={toggleMenu}
       className="p-2"
       aria-label="Toggle menu"
       variants={hamburgerVariants}
       animate={isMenuOpen ? "open" : "closed"}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-dark"
       >
        <rect x="3" y="3" width="7" height="7" rx="2" ry="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" ry="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" ry="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" ry="2" />
       </svg>
      </motion.button>

      {/* theme mode */}
      <div className="">
       <ThemeSwitch />
      </div>
     </div>

    </div>
   </aside>

   {/* Full Screen Menu Overlay */}
   <AnimatePresence>
    {isMenuOpen && (
     <motion.div
      className="xl:hidden fixed inset-0 w-full min-h-full overflow-y-auto overflow-x-hidden bg-background z-50 flex flex-col"
      variants={overlayVariants}
      initial="closed"
      animate="open"
      exit="closed"
     >
      {/* Header */}
      <motion.div
       className="flex justify-between items-center p-6 border-b border-b-light"
       initial={{ opacity: 0, y: -10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.08, delay: 0.02 }}
      >
       <div className="text-2xl font-bold text-primary">
        <Link href="/" className="block">
         <Image src="/ErMedlogo.png" width={60} height={60} alt="ErMed logo" property='og:image' className='rotate-90' />
        </Link>
       </div>
       <motion.button
        onClick={closeMenu}
        className="p-2 rounded-full hover:bg-primary transition-colors group"
        aria-label="Close menu"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.05 }}
       >
        <X size={24} className="text-dark group-hover:text-light" />
       </motion.button>
      </motion.div>

      {/* Menu Content */}
      <motion.div
       className="flex-1 flex flex-col lg:flex-row  p-4 lg:p-6 gap-10"
       variants={menuVariants}
       initial="closed"
       animate="open"
      >
       {/* Navigation Links */}
       <div className="flex-1">
        <nav className="divide-y divide-muted/20 border border-light rounded-lg rounded-tl-none shadow-md overflow-hidden ">
         {links.map((link, index) => {
          const fullHref = link.href.startsWith('/') ? link.href : `/${link.href}`;
          const isActive = fullHref === '/' ? pathname === '/' : pathname.startsWith(fullHref);
          return (
           <motion.div
            key={index}
            variants={menuItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.05 }}
           >
            <Link
             href={link.href}
             onClick={closeMenu}
             className={`relative p-4 block font-display text-xl md:text-3xl font-bold transition-colors hover:cursor-pointer group ${isActive ? 'text-white' : 'text-dark'}`}
            >
             {link.label}
             <span className={`absolute h-full top-0 left-0 bottom-0 transition-all duration-900 -z-10 group-hover:bg-primary ${isActive ? 'bg-primary w-full' : 'w-0'}`}></span>
            </Link>
           </motion.div>
          );
         })}
        </nav>
       </div>

       {/* Contact and Social Section */}
       <motion.div
        className="md:min-w-[350px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.08, delay: 0.05 }}
       >
        {/* Get in Touch */}
        <motion.div
         className="mb-8"
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.08, delay: 0.08 }}
        >
         <div className="flex items-center  mb-4">
          <h3 className="text-3xl font-bold text-dark">{getInTouchConfig.title}</h3>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
         </div>
         <div className="flex flex-col gap-4">
          {getInTouchConfig.items.map((item, index) => (
           <motion.div
            key={item.id}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08, delay: 0.1 + index * 0.02 }}
            whileHover={{ scale: 1.02 }}
           >
            <div className="w-10 h-10 border border-gray-300  rounded-lg rounded-tl-none   flex items-center justify-center">
             <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
             </svg>
            </div>
            <div className='flex flex-col gap-1'>
             <div className="text-muted font-semibold">{item.label}</div>
             {item.href ? (
              <a
               href={item.href}
               className="font-semibold hover:text-primary transition-colors duration-300"
               target={item.href.startsWith('http') ? '_blank' : undefined}
               rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
               {item.value}
              </a>
             ) : (
              <div className="font-medium">{item.value}</div>
             )}
            </div>
           </motion.div>
          ))}
         </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.08, delay: 0.12 }}
        >
         <div className="flex items-center pb-2 mb-6 border-b border-muted/20">
          <h3 className="text-2xl font-bold text-dark">Social Links</h3>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
         </div>
         <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
           <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.08, delay: 0.15 + index * 0.02 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           >
            {social.external ? (
             <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-3  rounded-lg rounded-tl-none  border border-dark/5  hover:bg-dark/5  transition-colors group"
              aria-label={social.ariaLabel}
             >
              <social.icon className="w-5 h-5 transition duration-200 group-hover:text-primary" />
              <span className="text-sm font-medium text-dark">{social.name}</span>
             </a>
            ) : (
             <Link
              href={social.href}
              className="flex items-center space-x-2 p-3 rounded-lg rounded-tl-none border border-dark/5 hover:bg-dark/5 transition-colors group"
              aria-label={social.ariaLabel}
             >
              <social.icon className="w-5 h-5 transition duration-200 group-hover:text-primary" />
              <span className="text-sm font-medium ">{social.name}</span>
             </Link>
            )}
           </motion.div>
          ))}
         </div>
        </motion.div>
       </motion.div>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 );
}

export default MobileNav;