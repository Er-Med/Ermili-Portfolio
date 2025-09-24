"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, Project } from "../data/projects";

const Page = () => {
 const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0]);

 return (
  <div className='xl:ml-[var(--left-sidebar-width)]  pb-[calc(var(--bottom-navbar-height)+1rem)]'>
   <div className="flex">
    {/* LEFT SECTION  */}
    <section className="flex-1 pe-4 md:pe-10 lg:pe-0 pt-[calc(var(--bottom-navbar-height)-1rem)] gap-4 flex flex-col">
     {/* projects */}
     {projects.slice(0, 4).map((project) => (
      <Link
       // href={`/portfolio/${project.id}`}
       href={`/`}
       key={project.id}
       className="px-4 py-7 lg:px-6 lg:py-9 border border-dark border-s-0  first:border-t-1 rounded-tr-2xl rounded-s-none flex flex-col gap-1 nth-child group relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary before:scale-x-0   before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-600 "
       onMouseEnter={() => setHoveredProject(project)}
       onMouseLeave={() => setHoveredProject(projects[0])}
      >
       <strong className="font-display font-meduim text-primary group-hover:text-white relative z-10">{project.category}</strong>
       <h4 className="font-display font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl group-hover:text-white relative z-10 uppercase">{project.title}</h4>
      </Link>
     ))}
    </section>
    {/* RIGHT SECTION */}
    <section className=" min-w-[50%] lg:min-w-[55%] hidden lg:block">
     <div className="flex justify-center items-center sticky top-0 h-[calc(100vh-var(--bottom-navbar-height))]">
      <div className="transition-all duration-300 ease-in-out pt-[calc(var(--bottom-navbar-height)-1rem)]">
       <Image
        src={hoveredProject?.image || "/projects/project1.jpg"}
        width={450}
        height={400}
        alt={`${hoveredProject?.title || 'project'} image`}
        className="rounded-2xl rounded-tl-none drop-shadow-[-4px_5px_0px_black] transition-all duration-300 ease-in-out hover:scale-105"
       />
      </div>
     </div>
    </section>
   </div>

  </div>
 );
}

export default Page;