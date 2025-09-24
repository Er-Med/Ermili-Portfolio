import Link from "next/link";

interface ExternalLinkProps {
 href: string;
 children: React.ReactNode;
 className?: string;
}

const ExternalLink = ({ href, children, className = "font-medium underline" }: ExternalLinkProps) => {
 return (
  <Link
   href={href}
   className={className}
   target="_blank"
   rel="noopener noreferrer"
  >
   {children}
  </Link>
 );
};

export default ExternalLink;
