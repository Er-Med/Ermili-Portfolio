'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface Links {
 label: string,
 href: string
}
const links: Links[] = [
 {
  label: "HOME",
  href: "home"
 },
 {
  label: "ABOUT",
  href: "about"
 },
 {
  label: "PORTFOLIO",
  href: "portfolio"
 },
 {
  label: "BLOG",
  href: "home"
 },
 {
  label: "CONTACT",
  href: "home"
 },
]
const MobileNav = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
  // You can add theme switching logic here
 };

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
        className="text-gray-700"
       >
        <rect x="3" y="3" width="7" height="7" rx="2" ry="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" ry="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" ry="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" ry="2" />
       </svg>
      </button>

      {/* theme mode */}
      <div className="">
       <button
        onClick={toggleTheme}
        className="p-2"
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
     </div>

    </div>
   </aside>

   {/* Full Screen Menu Overlay */}
   {isMenuOpen && (
    <div className="xl:hidden fixed inset-0 w-full min-h-full overflow-auto bg-white z-50 flex flex-col">
     {/* Header */}
     <div className="flex justify-between items-center p-6 border-b border-b-light">
      <div className="text-2xl font-bold text-primary">ErMed</div>
      <button
       onClick={closeMenu}
       className="p-2 rounded-full hover:bg-gray-100 transition-colors"
       aria-label="Close menu"
      >
       <X size={24} className="text-gray-700" />
      </button>
     </div>

     {/* Menu Content */}
     <div className="flex-1 flex flex-col lg:flex-row items-center p-6 ">
      {/* Navigation Links */}
      <div className="flex-1 p-6 border border-light">
       <nav className="">
        {links.map((link, index) => (
         <Link key={index} href={link.href} onClick={closeMenu} className="relative p-4 block text-3xl font-bold text-gray-900  transition-colors hover:cursor-pointer hover:text-white group">
          {link.label}
          <span className='absolute w-0 h-full top-0 left-0 bottom-0 transition-all duration-900 -z-10 group-hover:bg-primary group-hover:w-full '></span>
         </Link>
        ))}


       </nav>
      </div>

      {/* Contact and Social Section */}
      <div className="p-6 border-t bg-gray-50">
       {/* Get in Touch */}
       <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
         <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
         <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
         </svg>
        </div>
        <div className="space-y-3">
         <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
           </svg>
          </div>
          <div>
           <div className="text-sm text-gray-600">Phone</div>
           <div className="text-sm font-medium">+991 - 763 684 4563</div>
          </div>
         </div>
         <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>
          </div>
          <div>
           <div className="text-sm text-gray-600">Email</div>
           <div className="text-sm font-medium">info@examplegmail.com</div>
          </div>
         </div>
         <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg>
          </div>
          <div>
           <div className="text-sm text-gray-600">Address</div>
           <div className="text-sm font-medium">Canada City, Office-02, Road-11, House-3B/B, Section-H</div>
          </div>
         </div>
        </div>
       </div>

       {/* Social Links */}
       <div>
        <div className="flex items-center justify-between mb-4">
         <h3 className="text-xl font-bold text-gray-900">Social Link</h3>
         <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
         </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
         <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Twitter</span>
         </button>
         <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Instagram</span>
         </button>
         <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M22 7h-7V6c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zM22 19c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1v-1h7v1zM22 13h-7v-1c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zM22 16h-7v-1c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zM22 10h-7V9c0-.5.5-1 1-1h5c.5 0 1 .5 1 1v1zM8 6c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h5c.5 0 1-.5 1-1V6zM5 8c.8 0 1.5.7 1.5 1.5S5.8 11 5 11s-1.5-.7-1.5-1.5S4.2 8 5 8z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Behance</span>
         </button>
         <button className="flex items-center space-x-2 p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm-5.5-7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.5 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.5 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">Dribbble</span>
         </button>
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