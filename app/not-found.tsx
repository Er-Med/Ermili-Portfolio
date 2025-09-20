import Link from "next/link";
import MainButton from "./components/MainButton";
import { personalInfo } from "./data/contact";

export default function NotFound() {
 return (
  <div className='bg-background relative'>
   {/* Main content with left margin to account for fixed sidebar */}
   <div className='bg-background p-4 pt-8 sm:p-6 md:p-8 lg:p-10 xl:p-12 pb-32 sm:pb-18 md:pb-28 xl:pb-24 xl:ml-[var(--left-sidebar-width)] min-h-screen flex items-center justify-center'>
    <div className='flex flex-col items-center text-center max-w-2xl mx-auto gap-8'>
     {/* 404 Number */}
     <div className='flex flex-col items-center gap-4'>
      <h1 className='font-display text-8xl sm:text-9xl md:text-[12rem] font-bold text-primary opacity-20 leading-none'>
       404
      </h1>
      <div className='absolute'>
       <h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight'>
        Oops! Page Not Found
       </h2>
      </div>
     </div>

     {/* Error Message */}
     <div className='flex flex-col gap-4'>
      <p className='text-lg sm:text-xl text-muted leading-relaxed'>
       The page you&apos;re looking for seems to have vanished into the digital void.
       Don&apos;t worry though - even the best developers encounter 404 errors!
      </p>
      <p className='text-base text-muted'>
       Let&apos;s get you back on track to exploring {personalInfo.name}&apos;s amazing portfolio.
      </p>
     </div>

     {/* Navigation Buttons */}
     <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
      <Link href="/">
       <MainButton
        label="Back to Home"
        className="w-full sm:w-auto"
       />
      </Link>

      <div className='flex items-center gap-2'>
       <span className='w-8 h-0.5 bg-muted'></span>
       <Link
        href="/about"
        className='font-display font-bold hover:text-primary transition-colors duration-300 hover:cursor-pointer'
       >
        About Me
       </Link>
      </div>
     </div>

     {/* Additional Navigation Links */}
     <div className='flex flex-wrap justify-center gap-4 sm:gap-6 mt-4'>
      <Link
       href="/portfolio"
       className='text-muted hover:text-primary transition-colors duration-300 text-sm font-medium'
      >
       Portfolio
      </Link>
      <span className='text-muted'>•</span>
      <Link
       href="/blog"
       className='text-muted hover:text-primary transition-colors duration-300 text-sm font-medium'
      >
       Blog
      </Link>
      <span className='text-muted'>•</span>
      <Link
       href="/contact"
       className='text-muted hover:text-primary transition-colors duration-300 text-sm font-medium'
      >
       Contact
      </Link>
     </div>

    </div>
   </div>
  </div>
 );
}
