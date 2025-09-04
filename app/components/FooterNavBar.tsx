import Link from "next/link";
import { Interface } from "readline";
import { ArrowUpRight } from "lucide-react";
import MobileNav from "./MobileNav";

interface Links {
 label: string,
 href: string
}
const FooterNavBar = () => {

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
 return (
  <div className="fixed left-0 bottom-0 w-full z-20 border-t rounded-tl-4xl overflow-hidden max-h-[var(--bottom-navbar-height)]">

   {/* Show only in large screens */}
   <ul className="hidden xl:flex bg-background ">
    {
     links.map((link, index) => (
      <li key={index}
       className="flex-1 border-r last:border-r-0">
       <div className="flex justify-center items-center ">
        <Link href={link.href} className="inline-flex items-start justify-center p-5  font-heading font-semibold w-full relative">
         <span>{link.label}</span>
         <ArrowUpRight className="w-4 h-4 text-orange-500 " />
        </Link>

       </div>
      </li>
     ))
    }
   </ul>
  </div>
 );
}

export default FooterNavBar;