'use client';

import Link from 'next/link';
import { socialLinks } from '../data/contact';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

const LeftSideBar = () => {

 return (
  <aside className="hidden xl:block fixed left-0 top-0 bottom-0  pt-6 pb-[var(--bottom-navbar-height)] z-10 w-20 border-e bg-background rounded-br-8xl ">
   <div className="flex flex-col justify-between h-full ">
    {/* logo */}
    <div className="flex justify-center ">
     <Link href="/" className="block">
      <div className="text-xl font-bold text-primary">
       <Image src="/ErMedlogo.png" width={60} height={60} alt="ErMed logo" property='og:image' />
      </div>
     </Link>
    </div>

    {/* theme mode */}
    <div className="">
     <ThemeSwitch />
    </div>

    {/* social icons */}
    <div className=" border-t border-muted/30">
     <ul className=" flex flex-col justify-end  divide-y divide-muted/30">
      {socialLinks.map((link) => (
       <li key={link.name}>
        {link.external ? (
         <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center p-5  transition-colors group"
          aria-label={link.ariaLabel}
         >
          <link.icon className="w-5 h-5 transition duration-200 group-hover:text-primary" />
         </a>
        ) : (
         <Link
          href={link.href}
          className="flex justify-center items-center p-5  transition-colors group"
          aria-label={link.ariaLabel}
         >
          <link.icon className="w-5 h-5 transition duration-200 group-hover:text-primary" />
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