'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { socialLinks, getInTouchConfig } from '../data/contact';
import ThemeSwitch from './ThemeSwitch';

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
       <div className="text-xl font-bold text-primary">ErMed</div>
      </Link>
     </div>

     <div className="flex items-center gap-2">
      {/* Menu */}
      <button
       onClick={toggleMenu}
       className="p-2"
       aria-label="Toggle menu"
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
      </button>

      {/* theme mode */}
      <div className="">
       <ThemeSwitch />
      </div>
     </div>

    </div>
   </aside>

   {/* Full Screen Menu Overlay */}
   {isMenuOpen && (
    <div className="xl:hidden fixed inset-0 w-full min-h-full overflow-auto bg-background z-50 flex flex-col">
     {/* Header */}
     <div className="flex justify-between items-center p-6 border-b border-b-light">
      <div className="text-2xl font-bold text-primary">ErMed</div>
      <button
       onClick={closeMenu}
       className="p-2 rounded-full hover:bg-primary transition-colors group"
       aria-label="Close menu"
      >
       <X size={24} className="text-dark group-hover:text-light" />
      </button>
     </div>

     {/* Menu Content */}
     <div className="flex-1 flex flex-col lg:flex-row  p-4 lg:p-6 gap-10 ">
      {/* Navigation Links */}
      <div className="flex-1">
       <nav className="divide-y divide-muted/20 border border-light rounded-lg rounded-tl-none shadow-md overflow-hidden ">
        {links.map((link, index) => {
         const fullHref = link.href.startsWith('/') ? link.href : `/${link.href}`;
         const isActive = fullHref === '/' ? pathname === '/' : pathname.startsWith(fullHref);
         return (
          <Link key={index} href={link.href} onClick={closeMenu} className={`relative p-4 block font-display text-xl md:text-3xl font-bold transition-colors hover:cursor-pointer group ${isActive ? 'text-white' : 'text-dark'}`}>
           {link.label}
           <span className={`absolute h-full top-0 left-0 bottom-0 transition-all duration-900 -z-10 group-hover:bg-primary ${isActive ? 'bg-primary w-full' : 'w-0'}`}></span>
          </Link>
         );
        })}


       </nav>
      </div>

      {/* Contact and Social Section */}
      <div className="md:min-w-[350px]">
       {/* Get in Touch */}
       <div className="mb-8">
        <div className="flex items-center  mb-4">
         <h3 className="text-3xl font-bold text-dark">{getInTouchConfig.title}</h3>
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
         </svg>
        </div>
        <div className="flex flex-col gap-4">
         {getInTouchConfig.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
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
          </div>
         ))}
        </div>
       </div>

       {/* Social Links */}
       <div>
        <div className="flex items-center pb-2 mb-6 border-b border-muted/20">
         <h3 className="text-2xl font-bold text-dark">Social Links</h3>
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
         </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
         {socialLinks.map((social) => (
          social.external ? (
           <a
            key={social.name}
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
            key={social.name}
            href={social.href}
            className="flex items-center space-x-2 p-3 rounded-lg rounded-tl-none border border-dark/5 hover:bg-dark/5 transition-colors group"
            aria-label={social.ariaLabel}
           >
            <social.icon className="w-5 h-5 transition duration-200 group-hover:text-primary" />
            <span className="text-sm font-medium ">{social.name}</span>
           </Link>
          )
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>
   )}
  </>
 );
}

export default MobileNav;