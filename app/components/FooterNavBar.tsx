"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface Links {
 label: string,
 href: string
}
const FooterNavBar = () => {
 const pathname = usePathname();

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
  // {
  //  label: "BLOG",
  //  href: "/blog"
  // },
  {
   label: "CONTACT",
   href: "/contact"
  },
 ]
 return (
  <div className="fixed left-0 bottom-0 w-full z-20 border-t  overflow-hidden max-h-[var(--bottom-navbar-height)]">

   {/* Show only in large screens */}
   <ul className="hidden xl:flex bg-background ">
    {
     links.map((link, index) => {
      const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
      return (
       <li key={index}
        className="flex-1 border-r last:border-r-0">
        <div className="flex justify-center items-center ">
         <Link href={link.href} className={` group inline-flex items-start justify-center p-5  font-heading font-semibold w-full relative z-20 before:content-[''] before:absolute before:inset-0 before:bg-dark before:origin-top hover:before:origin-bottom before:transition-transform before:duration-400 before:-z-10 transition-all duration-400 hover:text-light hover:before:scale-y-100 ${isActive ? 'text-light before:scale-y-100' : 'before:scale-y-0'}`}>
          <span className="text-sm font-display">{link.label}</span>
          <ArrowUpRight className={`w-4 h-4 group-hover:text-primary ${isActive && "text-primary"}`} />
         </Link>

        </div>
       </li>
      );
     })
    }
   </ul>
  </div>
 );
}

export default FooterNavBar;