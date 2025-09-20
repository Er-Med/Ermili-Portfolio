import Link from "next/link";
import MainButton from "../../components/MainButton";

export default function ContactSuccessPage() {
 return (
  <main className="bg-background/5 xl:ml-[var(--left-sidebar-width)] min-h-screen">
   <section className="flex items-center justify-center min-h-screen px-4 lg:px-8 pb-[calc(var(--bottom-navbar-height)+2rem)]" >
    <div className="max-w-2xl mx-auto text-center">
     {/* Success Icon */}
     <div className="mb-8">
      <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
       <svg
        className="w-12 h-12 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M5 13l4 4L19 7"
        />
       </svg>
      </div>
     </div>

     {/* Success Message */}
     <div className="mb-8">
      <h3 className="text-3xl md:text-4xl font-bold relative text-center mb-8">
       Message Sent Successfully!
      </h3>
      <p className="text-lg text-muted mt-4 leading-relaxed">
       Thank you for reaching out! I&apos;ve received your message and will get back to you as soon as possible.
      </p>
     </div>

     {/* Additional Info */}
     <div className="bg-primary/10 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
      <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">
       What happens next?
      </h3>
      <ul className="text-center sm:text-left text-muted space-y-3 sm:space-y-2">
       <li className="flex items-start sm:items-center gap-2 sm:gap-3">
        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 sm:mt-0"></span>
        <span className="text-sm sm:text-base text-start">I&apos;ll review your message within 24 hours</span>
       </li>
       <li className="flex items-start sm:items-center gap-2 sm:gap-3">
        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 sm:mt-0"></span>
        <span className="text-sm sm:text-base text-start">You&apos;ll receive a response at the email you provided</span>
       </li>
       <li className="flex items-start sm:items-center gap-2 sm:gap-3">
        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 sm:mt-0"></span>
        <span className="text-sm sm:text-base text-start">
         For urgent matters, you can call me directly at{" "}
         <a href="tel:+212737621432" className="text-primary hover:text-primary/80 transition-colors break-all">
          +212-694 103 869
         </a>
        </span>
       </li>
       <li className="flex items-start sm:items-center gap-2 sm:gap-3">
        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 sm:mt-0"></span>
        <span className="text-sm sm:text-base text-start">
         Or reach me directly at{" "}
         <a href="mailto:mohamedermili.dev@gmail.com" className="text-primary hover:text-primary/80 transition-colors break-all">
          mohamedermili.dev@gmail.com
         </a>
        </span>
       </li>
      </ul>
     </div>

     {/* Action Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/">
       <MainButton
        label="Back to Home"
        className="w-full sm:w-auto"
       />
      </Link>
      <Link href="/portfolio">
       <MainButton
        label="View My Work"
        href="/portfolio"
        as="button"
        className="w-full sm:w-auto bg-transparent border-2 border-primary !text-primary hover:bg-primary  hover:!text-white"
       />
      </Link>
     </div>

     {/* Contact Info */}
     {/* <div className="mt-12 pt-8 border-t border-muted/20">
      <p className="text-sm text-muted mb-4">
       Need immediate assistance?
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
       <a
        href="mailto:mohamedermili.dev@gmail.com"
        className="text-primary hover:text-primary/80 transition-colors"
       >
        mohamedermili.dev@gmail.com
       </a>
       <span className="hidden sm:inline text-muted">•</span>
       <a
        href="tel:+212737621432"
        className="text-primary hover:text-primary/80 transition-colors"
       >
        +212-737 621 432
       </a>
      </div>
     </div> */}
    </div>
   </section>
  </main >
 );
}
