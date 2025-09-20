
"use client";

import React from "react";

type MainButtonProps = {
 label: string;
 className?: string;
 onClick?: () => void;
 as?: "button" | "a";
 href?: string;
 target?: string;
 rel?: string;
 download?: string | boolean;
};

export default function MainButton({
 label = "Hire Me",
 className = "",
 onClick,
 as = "button",
 href,
 target,
 rel,
 download,
}: MainButtonProps) {
 const baseClasses =
  "px-8 py-4 bg-primary text-white shadow-[-4px_4px_0px_var(--foreground)]  font-display font-bold hover:cursor-pointer   transition-all duration-200 hover:shadow-[_-2px_2px_0px_var(--foreground)] rounded-tr-[10px] rounded-bl-[10px]";

 if (as === "a" && href) {
  return (
   <a href={href} target={target} rel={rel} download={download} className={`${baseClasses} ${className}`}>
    {label}
   </a>
  );
 }

 return (
  <button onClick={onClick} className={`${baseClasses} ${className}`}>
   {label}
  </button>
 );
}

